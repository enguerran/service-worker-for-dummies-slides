<template>
  <div class="bg-white max-h-lg overflow-y-scroll text-center">
    <button
      class="bg-indigo-600 mt-4 text-gray-100 p-2 rounded focus:shadow hover:shadow"
      @click="register"
    >
      register SW
    </button>
    <div
      class="max-w-2xl mx-auto py-16 px-4 text-left sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <DummiesCollections :collections="collections" />
    </div>
  </div>
</template>

<script>
import DummiesCollections from "./DummiesCollections.vue";
import { getCollections } from "./api/dummies.js";

export default {
  name: "App",
  components: {
    DummiesCollections,
  },
  data() {
    return {
      collections: [],
    };
  },
  async mounted() {
    this.collections = await getCollections();
    navigator.serviceWorker.addEventListener("message", (event) => {
      this.updateCollection(event.data.url, event.data.msg);
    });
  },

  methods: {
    updateCollection(url, msg) {
      const itemIndex = this.collections.findIndex(
        (item) => item.data.image.src === url
      );
      this.collections = [
        ...this.collections.slice(0, itemIndex),
        {
          ...this.collections[itemIndex],
          messageFromSW: msg,
        },
        ...this.collections.slice(itemIndex + 1),
      ];
    },
    register() {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/7" })
        .then((reg) => console.log("SW registered!", reg))
        .catch((err) => console.log("Boo!", err));
    },
  },
};
</script>
