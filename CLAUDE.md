# Contexto para Claude Code

## Producto

Asistente de Cátedra AI: el docente crea ejercicios (generados por IA y validados, con su respuesta, o con criterios de corrección), el alumno practica y recibe feedback de corrección progresivo hasta la respuesta correcta, y el docente ve un tablero con recomendaciones de la IA. Piloto: Bases de Datos (SQL verificable + respuestas abiertas).

## Reglas de producto que el código debe respetar

- Ningún ejercicio se publica sin aprobación del docente.
- El feedback nunca revela la respuesta esperada: siempre pasa por un control antes de mostrarse.
- En respuestas verificables (SQL), el veredicto sale de ejecutar y comparar resultados, no de la IA. Solo se aceptan consultas SELECT, en una base aislada y de solo lectura.
- El texto del alumno nunca se interpreta como instrucción para la IA.
- Vocabulario: "feedback de corrección" y "consejo", nunca "pista". Español rioplatense con voseo, sin emoji ni signos de exclamación.

## Diseño

Usar siempre `design-system/`: leer primero `design-system/README.md`, tomar colores, tipografía, espaciado y radios de `design-system/tokens.json`, y seguir las guías de `design-system/components/*.md`. Blanco dominante (70%), negro para texto, azul marino para acción e identidad. Source Serif 4 en títulos, Source Sans 3 en interfaz, Source Code Pro para código.

## Estructura

- `prototipo/index.html`: prototipo funcional de referencia (un solo archivo).
- `landing/landing-draft.dc.html`: borrador visual de la landing (formato de Claude Design; usarlo como referencia de contenido y layout, no como código final).
