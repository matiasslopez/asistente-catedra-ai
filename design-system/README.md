# Asistente de Cátedra AI — design system

Asistente de Cátedra AI es un asistente de cátedra con inteligencia artificial. El docente crea los ejercicios y define el criterio de corrección. La IA corrige y acompaña al alumno con feedback hasta que llega a la respuesta correcta, y le devuelve al docente una lectura de su curso. La marca tiene que transmitir lo mismo que el producto: criterio académico, orden y confianza. Es formal sin ser solemne.

## Principios

- **Blanco primero.** El blanco (`paper`) ocupa al menos el 70% de cualquier pantalla. El azul marino (`navy`) marca identidad y acción, y el negro (`ink`) es el texto. La proporción de referencia es 70 / 20 / 10: blanco, negro y azul marino.
- **Filetes, no sombras.** Las secciones y tarjetas se separan con filetes de 1px (`line`) y con aire. La única sombra (`shadow-float`) es para lo que flota.
- **El docente pone el criterio.** La interfaz muestra siempre de dónde sale cada corrección y cada recomendación: un dato, una respuesta o un criterio del docente.
- **Un acento por pantalla.** Un solo botón principal navy por vista, para lo que la pantalla tiene que lograr.

## Voz y tono

Habla como un buen ayudante de cátedra: claro, cercano y preciso. En español rioplatense, con voseo.

- Sí: oraciones cortas, verbos al principio, términos de la materia ("LEFT JOIN", "valores nulos").
- Sí: el feedback señala qué revisar sin dar la respuesta. "Fijate si aparecen todas las materias del enunciado."
- No: emoji, signos de exclamación, superlativos ("increíble", "revolucionario"), ni "pista" (decimos "feedback de corrección" y "consejo").
- Los botones dicen lo que hacen: "Enviar respuesta", "Pedir un consejo", "Aprobar y publicar".

## Color

Tres colores de marca y tres de estado.

| Rol | Token | Uso |
| --- | --- | --- |
| Blanco | `paper`, `paper-alt` | Fondo de todo. `paper-alt` alterna bandas de sección. |
| Negro | `ink`, `ink-muted` | Texto principal y secundario. |
| Azul marino | `navy`, `navy-deep`, `navy-soft`, `on-navy` | Acción principal, enlaces, títulos destacados, fondos teñidos y la banda de cierre. |
| Estado | `correct`, `partial`, `incorrect` y sus `-soft` | Solo para el resultado de una corrección y para errores. Nunca como decoración. |

Reglas:

- El texto sobre un relleno navy usa `on-navy`, nunca un blanco literal, así funciona en el tema oscuro.
- Los estados nunca se distinguen solo por color: siempre van con su palabra ("Correcta", "Parcial", "Incorrecta").
- En el tema oscuro el fondo es un azul noche (`paper`) y el navy se aclara para mantener contraste. El tema claro es el principal.

## Tipografía

Familia Source, de Adobe, gratuita en Google Fonts (licencia OFL):

- **Source Serif 4** para títulos (`display`, `h1`, `h2`). Le da el tono formal y académico.
- **Source Sans 3** para la interfaz y el texto corrido (`h3`, `lead`, `body`, `body-sm`, `label`).
- **Source Code Pro** para respuestas SQL y código (`code`).

Para cargarlas:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Source+Sans+3:wght@400;600&family=Source+Code+Pro:wght@400;500&display=swap">
```

Los títulos van en serif peso 600 con `text-wrap: balance`. El texto corrido no supera `measure` (68 caracteres). Los rótulos en mayúsculas (`label`) llevan espaciado de 0.08em y nunca contienen frases.

## Espaciado y maquetación

Base de 4px (`space-1` a `space-24`). El contenido de la landing tiene un ancho máximo de `content-max` (1120px), con un margen lateral mínimo de `space-4` en móvil. Entre secciones se dejan `space-24` en desktop y `space-16` en móvil. Las esquinas son casi rectas: `radius-md` (4px) para botones, campos y tarjetas, y `radius-lg` para capturas grandes.

## Iconografía y logo

El logo está pendiente. Mientras tanto, la marca es el nombre en Source Serif 4, peso 600, color `ink`, sin abreviar. Si hacen falta íconos, van en trazo de 1.5px, de una sola tinta (`currentColor`) y con esquinas rectas, al tamaño del texto que acompañan. No se usan ilustraciones de robots, cerebros ni chispas de "IA".

## Componentes

Los componentes están en `components/bundle.js` como `window.Catedra`, son funciones de JavaScript sin dependencias que devuelven un elemento del DOM, y sus estilos están en `components/bundle.css` (clases `cat-*`). Para el desarrollo en Claude Code, son la referencia visual de cada pieza:

- **Button**: principal (navy), secundario (con borde) y texto.
- **Badge**: estado de una corrección y origen de un ejercicio.
- **Field**: campo de texto o de código, con rótulo, ayuda y error.
- **Feedback**: el bloque de corrección que ve el alumno.
- **Stat**: una cifra del tablero del docente, con su contexto.

## Accesibilidad

El texto cumple 4.5:1 sobre su fondo en ambos temas, y los bordes de controles y el foco cumplen 3:1. El foco de teclado es `focus-ring`. Los estados llevan siempre palabra además de color.
