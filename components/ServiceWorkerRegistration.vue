<template>
  <div class="bg-indigo-300 text-gray-800 flex">
    <div class="m-10">
      <button
        class="bg-indigo-600 text-gray-100 p-2 rounded focus:shadow hover:shadow"
        @click="register"
      >
        Register Service Worker
      </button>
      <p v-for="(message, index) in messages" :key="`${message}-${index}`">
        {{ message }}
      </p>
    </div>
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
    navigator.serviceWorker.getRegistration("/4").then((reg) => {
      if (!reg) return;
      if (reg.installing) {
        return this.messages.push(
          `${reg.installing.scriptURL} is ${reg.installing.state} on scope ${reg.scope}`
        );
      }
      if (reg.waiting) {
        return this.messages.push(
          `${reg.waiting.scriptURL} is ${reg.waiting.state} on scope ${reg.scope}`
        );
      }
      if (reg.active) {
        return this.messages.push(
          `${reg.active.scriptURL} is ${reg.active.state} on scope ${reg.scope}`
        );
      }
    });
  },
  methods: {
    register() {
      navigator.serviceWorker
        .register("/sw-sun.js", { scope: "/4" })
        .then((reg) => {
          console.log("Service Worker registration succeeded:", reg);
          this.messages.push(`SW registered!`);
        })
        .catch((err) => console.log("Boo!", err));
    },
  },
};
</script>

<style></style>
