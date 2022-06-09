self.addEventListener("install", (event) => {
  console.log("V1 installing…");
  event.waitUntil(
    caches.open("static-v1").then((cache) => cache.add("/moon.jpg"))
  );
});

self.addEventListener("activate", (event) => {
  console.log("V1 now ready to handle fetches!");
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.origin == location.origin && url.pathname === "/sun.jpg") {
    event.respondWith(caches.match("/moon.jpg"));
  }
});
