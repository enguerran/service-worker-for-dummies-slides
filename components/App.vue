<template>
  <div class="bg-white max-h-lg overflow-y-scroll">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <DummiesCollections :collections="collections" />
    </div>
  </div>
</template>

<script>
import DummiesCollections from "./DummiesCollections.vue";
import { getCollections } from "./api/dummies.js";

navigator.serviceWorker
  .register("/sw.js")
  .then((reg) => console.log("SW registered!", reg))
  .catch((err) => console.log("Boo!", err));

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
    console.log(this.collections);
  },
};
</script>
