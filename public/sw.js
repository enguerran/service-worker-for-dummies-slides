self.addEventListener("fetch", (event) => {
  if (event.request.destination === "image") {
    event.respondWith(cacheFallingBackToNetwork(event));
  }
});

async function cacheFallingBackToNetwork(event) {
  const cache = await caches.open("mysite-dynamic");
  const cachedResponse = await cache.match(event.request);
  if (cachedResponse) return cachedResponse;
  const networkResponse = await fetch(event.request);
  event.waitUntil(cache.put(event.request, networkResponse.clone()));
  return networkResponse;
}
