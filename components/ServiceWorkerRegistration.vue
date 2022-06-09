<template>
  <div class="h-200 bg-indigo-300 text-gray-800 flex">
    <p v-for="(message, index) in messages" :key="`${message}-${index}`">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    navigator.serviceWorker
      .register("/sw-sun.js")
      .then((reg) => this.messages.push("SW registered!"))
      .catch((err) => console.log("Boo!", err));
  },
};
</script>

<style></style>
