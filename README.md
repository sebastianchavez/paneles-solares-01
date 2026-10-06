# SolarAndina — Landing Page Template

Template HTML estático multi-página para una empresa de paneles solares / energía solar fotovoltaica. Construido con Tailwind CSS (vía CDN) y JavaScript nativo, sin build step. Mercado: Chile (CLP).

## Características

- 9 páginas HTML completas
- 100% responsive (mobile-first)
- Animaciones de entrada con `IntersectionObserver`
- Contadores numéricos animados
- Galería con filtros y lightbox
- Formulario de contacto con validación
- Datos mockeados centralizados (fáciles de editar)
- Botón flotante de WhatsApp
- Paleta ámbar + verde esmeralda (asociada al sol y energía limpia)
- SEO básico (títulos, descripciones, OpenGraph)
- Calendario semanal de cursos y charlas

## Páginas

| Archivo | Descripción |
|---|---|
| `index.html` | Inicio: hero, stats, servicios destacados, proceso, galería preview, testimonios, CTA |
| `sobre-nosotros.html` | Historia, equipo, misión/visión, valores, certificaciones SEC/ACERA |
| `servicios.html` | Listado completo de 8 servicios + proceso |
| `galeria.html` | Galería con filtros por categoría + lightbox |
| `precios.html` | 3 planes (Hogar/Pyme/Industria), tabla comparativa, precios individuales, FAQ |
| `clases.html` | Cursos pagos + charlas gratuitas + calendario semanal |
| `contacto.html` | Formulario + datos + horarios + FAQ + mapa Google |
| `privacidad.html` | Política de privacidad (Ley 19.628 Chile) |
| `terminos.html` | Términos y condiciones |

## Estructura de carpetas

```
paneles-solares-01/
├── index.html
├── sobre-nosotros.html
├── servicios.html
├── galeria.html
├── precios.html
├── clases.html
├── contacto.html
├── privacidad.html
├── terminos.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── data.js          # Toda la info mockeada (editá aquí)
│   │   ├── main.js          # Nav, animaciones, galería, FAQ
│   │   └── form.js          # Validación del formulario de contacto
│   └── images/
└── README.md
```

## Cómo usar

### Opción 1: Abrir directamente

Simplemente abrí `index.html` en tu navegador. No hay build process.

### Opción 2: Servidor local (recomendado)

Algunos navegadores bloquean recursos cuando se sirve con `file://`. Para mejor performance y evitar warnings de CORS:

```bash
# Python 3
python -m http.server 8080

# Node.js (con npx)
npx serve .

# PHP
php -S localhost:8080
```

Luego abrí `http://localhost:8080` en tu navegador.

## Personalización

### 1. Datos del negocio

Toda la información del sitio está centralizada en `assets/js/data.js`. Editá el objeto `BUSINESS` con tus datos:

```js
const BUSINESS = {
  name: "Tu Empresa Solar",
  phone: "+56 9 ...",
  email: "tu@email.cl",
  address: "Tu dirección, Chile",
  schedule: {
    weekdays: "Lun-Vie 9:00 a 18:30",
    saturday: "Sáb 10:00 a 14:00",
    sunday: "Dom Cerrado"
  },
  // ... redes sociales, mapa, etc.
};
```

También podés editar:

- `STATS` — Estadísticas principales (años, proyectos, kWh, CO₂)
- `SERVICES` — Lista de 8 servicios con descripciones y precios
- `PLANS` — 3 planes de precios con características
- `COURSES` — Cursos y charlas disponibles
- `SCHEDULE` — Calendario semanal
- `GALLERY` — 12 imágenes con categoría
- `TESTIMONIALS` — Testimonios de clientes
- `FAQ` — Preguntas frecuentes
- `TEAM` — Equipo de trabajo
- `CERTIFICATIONS` — Certificaciones y aliados

### 2. Cambiar colores

Los colores principales son `amber-500` (sol) y `emerald-500` (energía limpia). Para cambiar la paleta:

**Opción A:** Reemplazar las clases de Tailwind en todos los HTMLs (buscar y reemplazar).

**Opción B:** Configurar `tailwind.config` al inicio de cada HTML:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#tu-color',
        secondary: '#tu-color-2',
      }
    }
  }
};
```

### 3. Imágenes

Las imágenes del template vienen de Unsplash como placeholders. Reemplazalas con tus propias imágenes:

- Editá los `src="https://images.unsplash.com/..."` en cada HTML
- O agregá imágenes locales en `assets/images/` y referenciá con `assets/images/tu-imagen.jpg`

### 4. WhatsApp

El botón flotante y los enlaces a WhatsApp usan el número `BUSINESS.whatsappRaw`. Para cambiarlo, editá el campo en `data.js` (sin `+`, sin espacios).

## Stack técnico

- **HTML5** semántico
- **Tailwind CSS 3** (vía CDN, no requiere build)
- **JavaScript nativo** (sin frameworks ni librerías)
- **Google Fonts:** Inter
- **Iconos:** SVG inline (Lucide-style)
- **Imágenes:** Unsplash (placeholders)
- **Mapa:** Google Maps embebido

## Animaciones incluidas

- Fade-in al hacer scroll (`IntersectionObserver`)
- Slide-in desde izquierda/derecha
- Contadores numéricos animados
- Botones con efecto ripple
- Galería con hover scale + overlay
- Lightbox modal con fade
- Cards con hover lift
- Menú móvil animado
- Pulso en botón WhatsApp
- Rayos de sol flotantes en hero
- Chispas decorativas animadas

## Compatibilidad

- Chrome / Edge / Firefox / Safari (últimas 2 versiones)
- iOS Safari 12+
- Soporta `prefers-reduced-motion`

## Notas legales

El template incluye **política de privacidad** y **términos y condiciones** con contenido de ejemplo adaptado al mercado chileno (Ley 19.628 sobre Protección de Datos Personales). Antes de publicar el sitio en producción:

1. Hacé revisar el texto legal por un abogado
2. Adaptá las cláusulas a tu situación particular
3. Verificá el cumplimiento de la normativa aplicable
4. Actualizá la fecha de "Última actualización"

## Licencia

Template de uso libre. Imágenes de Unsplash sujetas a su propia licencia.