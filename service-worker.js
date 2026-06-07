const CACHE_NAME = "sistema-formacao-memoria-v1";
const FILES = [
  "./",
  "sistema_integrado_formacao_memoria_agroecologia.html",
  "manifest.webmanifest",
  "icone-sistema.svg",
  "instituto_coopera_incubacoop.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
