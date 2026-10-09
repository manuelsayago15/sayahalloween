# SayaHalloween 🎃

Sitio web oficial del **SayaHalloween**, la fiesta anual de disfraces organizada por El Saya y La Guaricha desde 2021.

Incluye:
- **Landing del evento**: cuenta regresiva, venta de entradas, actividades, itinerario, FAQs, galería y organizadores.
- **Encuesta post-evento** (`/survey`): los invitados califican la fiesta y dejan sugerencias; las respuestas se guardan en Firestore.

## Stack

- React 18 + Vite 5
- React Router 7
- Zustand (estado de la encuesta)
- Firebase Firestore
- Deploy en Vercel

## Cómo correrlo

```bash
npm install
cp .env.example .env.local   # completar con las credenciales de Firebase
npm run dev
```

> ⚠️ `.env.local` no se sube a git. En cada PC nueva hay que copiarlo a mano.

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar el build |
| `npm run lint` | ESLint |

## Rutas

| Ruta | Página |
|---|---|
| `/` | Home (hero, entradas, actividades, organizadores, comentarios) |
| `/itinerary` | Itinerario + preview de galería |
| `/activities` | Actividades, premios y bases del concurso de disfraces |
| `/faqs` | Preguntas frecuentes |
| `/gallery` | Galería de fotos |
| `/organizers` | Organizadores |
| `/prizes` | Premios (pendiente, sin enlace en el sitio) |
| `/survey` | Encuesta post-evento (sin navbar ni footer) |

## Checklist anual 🗓️

Antes de cada edición revisar:

- [ ] `src/pages/components/Countdown.jsx` → fecha y hora del evento
- [ ] `src/pages/components/HeroSection.jsx` → día y hora visibles
- [ ] `src/pages/components/Navbar.jsx` → número de edición
- [ ] `src/pages/components/faqs/faqsData.js` → fechas de venta, horario, link de la encuesta
- [ ] `src/pages/components/Tickets.jsx` → precios y activar/desactivar botones de compra
- [ ] `src/pages/components/modal/Modal.jsx` → links de pago de Fintoc
- [ ] `src/pages/components/views/ItineraryView.jsx` → horarios del itinerario
- [ ] `index.html` → `<title>` con el año
- [ ] `src/data/questions.json` → año en las preguntas de la encuesta
- [ ] `public/images/gallery/` + `Gallery.jsx` → fotos nuevas

> El año del footer se actualiza automáticamente.
