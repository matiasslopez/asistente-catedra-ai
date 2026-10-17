// Servidor local sin dependencias: sirve el prototipo y la ruta /api/claude.
// Uso: ANTHROPIC_API_KEY=sk-ant-... node server.js  →  http://localhost:3000
import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import claude from "./api/claude.js";

const RAIZ = fileURLToPath(new URL(".", import.meta.url));
const TIPOS = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml" };
const PUERTO = process.env.PORT || 3000;

http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname === "/api/claude") return claude(req, res);

  let ruta = url.pathname === "/" ? "/prototipo/index.html" : url.pathname;
  if (ruta.endsWith("/")) ruta += "index.html";
  const archivo = normalize(join(RAIZ, ruta));
  if (!archivo.startsWith(RAIZ)) { res.statusCode = 403; return res.end(); }
  try {
    const datos = await readFile(archivo);
    res.setHeader("Content-Type", TIPOS[extname(archivo)] || "application/octet-stream");
    res.end(datos);
  } catch {
    res.statusCode = 404; res.end("No encontrado");
  }
}).listen(PUERTO, () => console.log(`Asistente de Cátedra AI en http://localhost:${PUERTO}`));
