# 🤘 Metal Albums Monitor

Aplikace pro monitorování nových metalových a rockových alb z celého světa. Sleduj nové releasy, hodnocení a informace z více zdrojů včetně Spotify, Metal Archives a Last.fm.

## 🚀 Rychlý start (bez API klíčů)

Aplikace **funguje hned** s testovacími mock daty! Nepotřebuješ nastavovat žádné API klíče.

**Varianta 1: Automatický start (doporučeno)**

```bash
cd metal-albums
./start.sh
```

**Varianta 2: Manuální start**

```bash
# 1. Spusť backend
cd backend
npm install
npm start

# 2. V novém terminálu spusť frontend
cd frontend
npm install
npm run dev

# 3. Otevři http://localhost:5173 🤘
```

Backend automaticky detekuje, že nejsou nastavené API klíče a použije **mock data** s realistickými metalovými alby.

> 💡 **Tip**: Pokud chceš reálná data ze Spotify a Last.fm, následuj [pokyny níže](#-instalace-s-reálnými-api).

## ✨ Funkce

- 📅 **Týdenní nové releasy** - Zobrazení nově vydaných alb za poslední týden, měsíc nebo den
- 🎸 **Filtrování podle žánrů** - Metal, Rock, Death Metal, Black Metal, Thrash Metal, Doom Metal, Progressive Metal, Power Metal, Metalcore, Deathcore
- ⭐ **Hodnocení z více zdrojů** - Statistiky z Last.fm, informace z Metal Archives
- 🎨 **Moderní dark theme UI** - Responzivní design optimalizovaný pro metal estetiku
- 🔄 **Real-time data** - Aktuální informace z API s inteligentním cachováním

## 🚀 Technologie

### Frontend
- React 18 + Vite
- CSS3 s moderním dark theme
- Axios pro API komunikaci
- date-fns pro formátování datumů

### Backend
- Node.js + Express
- API proxy pro Spotify, Metal Archives, Last.fm
- Node-cache pro cachování (1 hodina)
- CORS enabled pro cross-origin requests

## 📦 Instalace s reálnými API

### Režimy provozu

Aplikace podporuje **2 režimy**:

1. **🎭 Mock Data Mode** (výchozí) - Bez API klíčů, testovací data
2. **✅ Live API Mode** - S API klíči, reálná data ze Spotify a Last.fm

### 1. Backend

```bash
cd backend
npm install
```

**Bez API klíčů (Mock Data Mode)**:

Backend funguje ihned bez konfigurace! Nepotřebuješ vytvářet `.env` soubor.

**S API klíči (Live API Mode)**:

Vytvoř `.env` soubor s API klíči:

```env
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
LASTFM_API_KEY=your_lastfm_api_key
PORT=3001
```

**Získání API klíčů:**
1. **Spotify**:
   - Jdi na [Spotify Dashboard](https://developer.spotify.com/dashboard)
   - Vytvoř novou aplikaci
   - Zkopíruj Client ID a Client Secret
2. **Last.fm**:
   - Jdi na [Last.fm API](https://www.last.fm/api/account/create)
   - Vytvoř API účet
   - Zkopíruj API Key

Spuštění backendu:

```bash
npm start
```

Backend běží na `http://localhost:3001`

### 2. Frontend

```bash
cd frontend
npm install
```

Vytvoř `.env` soubor:

```env
VITE_API_URL=http://localhost:3001
```

Spuštění frontendu:

```bash
npm run dev
```

Frontend běží na `http://localhost:5173`

## 🎯 Použití

1. Spusť backend server (`npm start` v `backend/`)
2. Spusť frontend dev server (`npm run dev` v `frontend/`)
3. Otevři prohlížeč na `http://localhost:5173`
4. Vyber žánr a časové období
5. Prohlížej si nová alba, klikni na kartu pro detaily

## 📡 API Endpointy

Backend poskytuje následující endpointy:

- `GET /api/spotify/new-releases?genre=metal&limit=50` - Nové releasy ze Spotify
- `GET /api/spotify/artist/:id` - Detaily o interpretovi
- `GET /api/metal-archives/search?band=...&album=...` - Vyhledávání v Metal Archives
- `GET /api/lastfm/album?artist=...&album=...` - Informace z Last.fm
- `GET /health` - Health check

## 🎨 Screenshots

_Coming soon..._

## 🔧 Vývoj

### Backend struktur
```
backend/
├── server.js          # Express server s API routami
├── package.json       # Dependencies
├── .env              # API klíče (ne v gitu)
└── .env.example      # Příklad konfigurace
```

### Frontend struktura
```
frontend/
├── src/
│   ├── api/
│   │   └── musicApi.js      # API client
│   ├── components/
│   │   ├── Header.jsx       # Hlavička
│   │   ├── FilterPanel.jsx  # Filtry
│   │   ├── AlbumList.jsx    # Seznam alb
│   │   └── AlbumCard.jsx    # Karta alba
│   ├── App.jsx              # Hlavní komponenta
│   ├── App.css              # Styly aplikace
│   └── index.css            # Globální styly
└── package.json
```

## 🐛 Troubleshooting

### Backend se nespustí
- Zkontroluj, že máš správně nastavené API klíče v `.env`
- Ujisti se, že port 3001 není obsazený

### Frontend nezobrazuje data
- Zkontroluj, že backend běží na správném portu
- Zkontroluj console v prohlížeči pro chyby
- Ověř CORS nastavení

### Spotify API vrací chyby
- Zkontroluj platnost Spotify API credentials
- Ověř, že aplikace je správně nastavená v Spotify Dashboard

## 📄 Licence

MIT

## 🙏 Credits

- Data ze Spotify API
- Informace z Metal Archives
- Statistiky z Last.fm API

---

Made with 🤘 for metalheads worldwide
