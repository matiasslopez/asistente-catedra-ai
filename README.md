# Asistente de Cátedra AI

Un asistente de cátedra con inteligencia artificial. El docente crea los ejercicios y define el criterio de corrección; la IA corrige y acompaña a cada alumno con feedback hasta que llega a la respuesta correcta, sin dársela; y el docente ve quién practicó, cuánto feedback necesitó cada uno y qué temas conviene reforzar.

Proyecto final del curso **AI First Product Manager** (Product Hub): PRD y MVP construido con Claude Code. El piloto arranca en la cátedra de Bases de Datos (UNLaM), donde las respuestas SQL se pueden verificar ejecutándolas.

## Qué hay en este repositorio

| Carpeta | Contenido |
| --- | --- |
| `prototipo/` | Prototipo funcional en un solo HTML: vista del alumno (ejercicios SQL corregidos con SQLite en el navegador, feedback de corrección y consejos) y vista del docente (creación de ejercicios en tres modos, tablero y recomendaciones). |
| `design-system/` | Tokens (`tokens.json`), guía de marca (`README.md`) y componentes base (`components/`). Azul marino, negro y blanco; familia tipográfica Source. |
| `landing/` | Primer borrador de la landing, hecho en Claude Design. |

## Cómo funciona la IA

El prototipo usa la API de Claude a través de una ruta propia, `/api/claude` (`api/claude.js`). La clave de la API queda en el servidor y el navegador nunca la ve. La IA redacta el feedback de corrección, corrige respuestas abiertas, genera ejercicios y escribe las recomendaciones para el docente. La corrección de SQL no depende de la IA: se ejecuta en el navegador con SQLite.

Si la IA no está configurada, el prototipo sigue funcionando con el feedback que cargó el docente.

La ruta limita el largo de cada pedido y la cantidad de pedidos por minuto, y no deja elegir el modelo desde el navegador.

## Correrlo en tu compu

1. Sacá una clave en [console.anthropic.com](https://console.anthropic.com) (API Keys).
2. Copiá `.env.example` como `.env` y pegá la clave en `ANTHROPIC_API_KEY`.
3. Con Node 20.6 o más nuevo: `npm start` y abrí http://localhost:3000.

## Publicarlo en Vercel

1. En [vercel.com](https://vercel.com), **Add New › Project** e importá este repositorio. No hace falta configurar build.
2. En **Settings › Environment Variables**, agregá `ANTHROPIC_API_KEY` (y `ANTHROPIC_MODEL` si querés otro modelo).
3. Deploy. Cada cambio que entra a `main` se publica solo.

Ponele un límite de gasto mensual a la clave en la consola de Anthropic: la página es pública y cualquiera que la abra consume IA.

## Documentos

- PRD: en Claude Docs (privado).
- Design system: artifact de Claude (privado); este repo tiene la copia de trabajo.
