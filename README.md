# Asistente de Cátedra AI

Un asistente de cátedra con inteligencia artificial. El docente crea los ejercicios y define el criterio de corrección; la IA corrige y acompaña a cada alumno con feedback hasta que llega a la respuesta correcta, sin dársela; y el docente ve quién practicó, cuánto feedback necesitó cada uno y qué temas conviene reforzar.

Proyecto final del curso **AI First Product Manager** (Product Hub): PRD y MVP construido con Claude Code. El piloto arranca en la cátedra de Bases de Datos (UNLaM), donde las respuestas SQL se pueden verificar ejecutándolas.

## Qué hay en este repositorio

| Carpeta | Contenido |
| --- | --- |
| `prototipo/` | Prototipo funcional en un solo HTML: vista del alumno (ejercicios SQL corregidos con SQLite en el navegador, feedback de corrección y consejos) y vista del docente (creación de ejercicios en tres modos, tablero y recomendaciones). |
| `design-system/` | Tokens (`tokens.json`), guía de marca (`README.md`) y componentes base (`components/`). Azul marino, negro y blanco; familia tipográfica Source. |
| `landing/` | Primer borrador de la landing, hecho en Claude Design. |

## Probar el prototipo

Abrí `prototipo/index.html` en el navegador. La corrección de consultas SQL funciona sin servidor. Las funciones con IA (corrección de respuestas abiertas, feedback redactado por la IA, recomendaciones) usaban la integración del entorno de artifacts de Claude; fuera de ese entorno el prototipo cae al feedback cargado por el docente.

## Documentos

- PRD: en Claude Docs (privado).
- Design system: artifact de Claude (privado); este repo tiene la copia de trabajo.
