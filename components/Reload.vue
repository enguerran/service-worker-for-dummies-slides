<template>
  <div class="text-center bottom">
    <button
      class="p-4 rounded bg-yellow-300 text-gray-900 font-bold"
      @click="reload"
    >
      REFRESH PAGE
      <span v-if="this.number > 0"> {{ this.number }}… </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: undefined,
    };
  },
  methods: {
    reload() {
      this.number = 3;
      const interval = setInterval(() => {
        this.number -= 1;
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        this.number = 0;
        location.reload();
      }, this.number * 1000);
    },
  },
};
</script>

<style></style>
