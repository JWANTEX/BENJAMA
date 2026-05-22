/* eslint-disable no-undef */

const express = require("express");
const session = require("express-session");
const SteamAuth = require("node-steam-openid");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  session({
    secret: process.env.SESSION_SECRET || "benjama-session-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        httpOnly: true,
        sameSite: 'lax'
    }
  }),
);

const isProduction = process.env.NODE_ENV === 'production';
const DOMAIN = isProduction ? 'https://benjama.onrender.com' : 'http://localhost:8080';

const steam = new SteamAuth({
  realm: DOMAIN,
  returnUrl: `${DOMAIN}/auth/steam/callback`,
  apiKey: process.env.STEAM_API_KEY || "CF987D6943F18974F0A7756AD4231F29",
});

app.get("/", (req, res) => {
  res.send(`
    <h1>Siteye Hoş Geldin</h1>
    <a href="/auth/steam">Steam ile Giriş Yap</a>
  `);
});

app.get("/auth/steam", async (req, res) => {
  try {
    const redirectUrl = await steam.getRedirectUrl();
    res.redirect(redirectUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Steam giriş yönlendirmesi sırasında hata oluştu.");
  }
});

app.get("/auth/steam/callback", async (req, res) => {
  try {
    const user = await steam.authenticate(req.query);
    req.session.user = user;
    res.redirect("/profile");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
});

app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }

  const { username, steamid } = req.session.user;
  res.send(`
    <h2>Hoş geldin ${username}!</h2>
    <p>Steam ID: ${steamid}</p>
    <a href="/logout">Çıkış</a>
  `);
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`Steam auth server is running on http://localhost:${PORT}`);
});
