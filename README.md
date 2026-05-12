# Colegio José Arrieta - Frontend (React + Vite)

Landing comercial para captación de alumnos con integración a API REST propia.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+

## Instalación

```bash
npm install
```

## Variables de entorno

Crear archivo `.env` en la raíz:

```env
VITE_API_URL=http://localhost:4000/api
```

## Ejecutar en desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Rutas principales

- `/` Inicio
- `/por-que-elegirnos`
- `/proyecto-educativo`
- `/admision`
- `/vida-escolar`
- `/noticias`
- `/noticias/:slug`
- `/contacto`

## Integraciones API

- `GET /noticias` (filtros + paginación)
- `GET /noticias/:slug`
- `POST /admision`
- `POST /contacto`

La base URL se configura desde `VITE_API_URL`.

## Estructura relevante

```text
src/
  api/
  components/
    layout/
    sections/
    ui/
  data/
  hooks/
  pages/
```

## Notas

- Diseño mobile-first con Tailwind CSS v3.
- Animaciones con Framer Motion y viewport tracking.
- SEO por página con `react-helmet-async`.
- Formularios con `react-hook-form` + `zod`.
