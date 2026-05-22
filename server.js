const express = require('express');
const session = require('express-session');
const SteamAuth = require('node-steam-openid');
require('dotenv').config();

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET || 'benjama-super-gizli-key-2026',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: process.env.NODE_ENV === 'production', 
        httpOnly: true 
    }
}));

const isProduction = process.env.NODE_ENV === 'production';
const DOMAIN = isProduction ? 'https://arkbenjama.com' : 'http://localhost:8080';

const steam = new SteamAuth({
    realm: DOMAIN,
    returnUrl: `${DOMAIN}/auth/steam/callback`,
    apiKey: process.env.STEAM_API_KEY
});

app.set('trust proxy', 1);

// ====================== ANA SAYFA ======================
app.get('/', (req, res) => {
    if (req.session.user) {
        const u = req.session.user;
        res.send(`
            <!DOCTYPE html>
            <html>
            <head><title>BENJAMA</title>
            <style>
                body{font-family:Arial;background:#1b2838;color:#fff;text-align:center;padding:50px;}
                .card{max-width:500px;margin:0 auto;background:#2a475e;padding:30px;border-radius:15px;box-shadow:0 10px 30px rgba(0,0,0,0.5);}
                img{width:120px;height:120px;border-radius:50%;border:4px solid #66c0f4;}
            </style>
            </head>
            <body>
            <div class="card">
                <img src="${u.avatar}" alt="Avatar">
                <h1>Hoş geldin, ${u.username}!</h1>
                <p><strong>SteamID:</strong> ${u.steamid}</p>
                <a href="${u.profileUrl}" target="_blank">Steam Profiline Git →</a><br><br>
                <a href="/profile">📋 Tam Profil</a> | 
                <a href="/profile/edit">✏️ Profili Düzenle</a><br><br>
                <a href="/logout">Çıkış Yap</a>
            </div>
            </body></html>
        `);
    } else {
        res.send(`
            <h1>BENJAMA</h1>
            <a href="/auth/steam">
                <img src="https://community.akamai.steamstatic.com/public/images/steamworks_logo.png" width="220" alt="Steam ile Giriş">
            </a>
            <p style="margin-top:30px; color:#66c0f4;">Steam hesabınla giriş yap</p>
        `);
    }
});

app.get('/auth/steam', async (req, res) => {
    const redirectUrl = await steam.getRedirectUrl();
    res.redirect(redirectUrl);
});

app.get('/auth/steam/callback', async (req, res) => {
    try {
        const user = await steam.authenticate(req.query);
        req.session.user = {
            steamid: user.steamid,
            username: user.username || user.name,
            avatar: user._json?.avatarfull || 'https://via.placeholder.com/150',
            profileUrl: `https://steamcommunity.com/profiles/${user.steamid}`
        };
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

// /profile ve /profile/edit sayfalarını istersen önceki mesajımdan kopyala (aynı kaldı)
app.get('/profile', (req, res) => { /* önceki güzel profil kartı kodunu buraya yapıştır */ });
app.get('/profile/edit', (req, res) => { /* önceki edit sayfası kodunu buraya yapıştır */ });

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 BENJAMA Server ${PORT} portunda çalışıyor`));
