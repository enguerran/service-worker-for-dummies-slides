---
# try also 'default' to start simple
theme: seriph
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
hideInToc: true
class: 'text-yellow-300'
layout: intro
author: Enguerran
authorUrl: https://blog.ticabri.com
title: Service Worker for dummies
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Service Worker for dummies

## a programmable network proxy

<div class="mt-10 w-lg mx-auto">
<img src="https://web-dev.imgix.net/image/RK2djpBgopg9kzCyJbUSjhEGmnw1/iKWO7c2WNobLt30VZx9C.png?auto=format&w=600" width="600" />
</div>

---

# What does Service Worker provide?

- specialized JavaScript asset
- proxy between web browser and web servers
- providing offline access
- boosting page performance
- reduce energy consumption

<ServiceWorkerRegistration />

---
layout: fact
---

# Demo time

Intercepting an image request

An image of the sun is displayed…

When I reload the page, the image is replaced by an image of the moon

---

<Sun />
<Reload />

---

# The Service Worker script

```javascript {all|1-7|13-19|1,9,13}
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
```

---
layout: center
---

<div class="prose">
<figure class="">
<video autoplay="" controls="" loop="" muted="">
<source src="https://storage.googleapis.com/web-dev-uploads/video/jL3OLOhcWUQDnR4XjewLBx4e3PC3/rdeulhDt9H1tqOdqh9Cj.mp4" type="video/mp4" />
</video>
</figure>
</div>

---

<App />