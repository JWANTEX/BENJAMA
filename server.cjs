/* eslint-disable no-undef */

const express = require("express");
const session = require("express-session");
const SteamAuth = require("node-steam-openid");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'benjama-super-gizli-key-2026',
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

// Render ve Cloudflare arkasında çalıştığımızı bildiriyoruz
app.set('trust proxy', 1);

const isProduction = process.env.NODE_ENV === 'production';
const DOMAIN = isProduction ? 'https://benjama.onrender.com' : 'http://localhost:8080';

const steam = new SteamAuth({
  realm: DOMAIN,
  returnUrl: `${DOMAIN}/auth/steam/callback`,
  apiKey: process.env.STEAM_API_KEY || "CF987D6943F18974F0A7756AD4231F29",
});

app.get("/", (req, res) => {
  if (req.session.user) {
    const user = req.session.user;
    const avatar = user._json?.avatarfull || 'https://via.placeholder.com/200';
    const username = user.username || user.personaname || 'Oyuncu';
    const steamid = user.steamid;
    
    res.send(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BENJAMA - Premium Gaming</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            background: linear-gradient(135deg, #242842 0%, #0c133b 50%, #0d529b 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #ff0000;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
          }
          
          body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(100, 200, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255, 100, 150, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }
          
          .container {
            position: relative;
            z-index: 1;
            max-width: 600px;
            width: 90%;
          }
          
          .profile-card {
            background: linear-gradient(135deg, rgba(20, 30, 60, 0.95) 0%, rgba(30, 40, 80, 0.95) 100%);
            border-radius: 20px;
            padding: 50px 40px;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(100, 200, 255, 0.3);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
            animation: slideIn 0.6s ease-out;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .avatar {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            margin: 0 auto 30px;
            border: 4px solid rgba(100, 200, 255, 0.5);
            box-shadow: 0 0 30px rgba(100, 200, 255, 0.4);
            object-fit: cover;
            animation: glow 3s ease-in-out infinite;
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 30px rgba(100, 200, 255, 0.4); }
            50% { box-shadow: 0 0 50px rgba(100, 200, 255, 0.7); }
          }
          
          .title {
            font-size: 14px;
            color: rgba(100, 200, 255, 0.8);
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 15px;
          }
          
          .username {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #64c8ff 0%, #00d4ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .steamid {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 30px;
            font-family: 'Courier New', monospace;
          }
          
          .premium-badge {
            display: inline-block;
            background: linear-gradient(135deg, #ff6b00 0%, #ffb000 100%);
            color: #000;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .button-group {
            display: flex;
            gap: 15px;
            margin-top: 30px;
          }
          
          .btn {
            flex: 1;
            padding: 12px 25px;
            border: none;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          
          .btn-profile {
            background: linear-gradient(135deg, #64c8ff 0%, #00d4ff 100%);
            color: #000;
          }
          
          .btn-profile:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(100, 200, 255, 0.4);
          }
          
          .btn-logout {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .btn-logout:hover {
            background: rgba(255, 100, 100, 0.2);
            border-color: rgba(255, 100, 100, 0.4);
          }
          
          .steam-link {
            display: inline-block;
            margin-top: 20px;
            padding: 8px 16px;
            background: linear-gradient(135deg, #1b2838 0%, #2a475e 100%);
            border: 1px solid rgba(100, 200, 255, 0.3);
            border-radius: 8px;
            color: #64c8ff;
            text-decoration: none;
            font-size: 12px;
            transition: all 0.3s ease;
          }
          
          .steam-link:hover {
            border-color: rgba(100, 200, 255, 0.6);
            box-shadow: 0 0 20px rgba(100, 200, 255, 0.3);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="profile-card">
            <img src="${avatar}" alt="Steam Avatar" class="avatar">
            
            <div class="premium-badge">⭐ PREMIUM MEMBER</div>
            
            <div class="title">Hoş Geldin</div>
            <h1 class="username">${username}</h1>
            <div class="steamid">Steam ID: ${steamid}</div>
            
            <div class="button-group">
              <a href="/profile" class="btn btn-profile">📋 Profil</a>
              <a href="/logout" class="btn btn-logout">🚪 Çıkış</a>
            </div>
            
            <a href="https://steamcommunity.com/profiles/${steamid}" target="_blank" class="steam-link">
              Steam Profiline Git →
            </a>
          </div>
        </div>
      </body>
      </html>
    `);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BENJAMA - Premium Gaming Platform</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0d1b2a 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
          }
          
          body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(100, 200, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255, 100, 150, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }
          
          .container {
            position: relative;
            z-index: 1;
            max-width: 500px;
            width: 90%;
            text-align: center;
          }
          
          .login-card {
            background: linear-gradient(135deg, rgba(20, 30, 60, 0.95) 0%, rgba(30, 40, 80, 0.95) 100%);
            border-radius: 20px;
            padding: 60px 40px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(100, 200, 255, 0.3);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
            animation: slideIn 0.6s ease-out;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .logo {
            font-size: 48px;
            margin-bottom: 20px;
          }
          
          .title {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #64c8ff 0%, #00d4ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .subtitle {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 40px;
          }
          
          .steam-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 16px 32px;
            background: linear-gradient(135deg, #1b2838 0%, #2a475e 100%);
            border: 2px solid rgba(100, 200, 255, 0.4);
            border-radius: 12px;
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .steam-btn:hover {
            background: linear-gradient(135deg, #2a475e 0%, #3a5e7e 100%);
            border-color: rgba(100, 200, 255, 0.7);
            box-shadow: 0 10px 30px rgba(100, 200, 255, 0.3);
            transform: translateY(-2px);
          }
          
          .steam-icon {
            font-size: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="login-card">
            <div class="logo">🎮</div>
            <h1 class="title">BENJAMA</h1>
            <p class="subtitle">Premium Gaming Platform</p>
            
            <a href="/auth/steam" class="steam-btn">
              <span class="steam-icon">🔗</span>
              Steam ile Giriş Yap
            </a>
          </div>
        </div>
      </body>
      </html>
    `);
  }
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
