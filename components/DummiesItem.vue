<template>
  <a href="#" class="group">
    <div
      class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative"
    >
      <img
        :src="imageSrc"
        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
        class="w-full h-full object-center object-cover group-hover:opacity-75"
        :width="imageWidth"
        :height="imageHeight"
      />
      <p
        v-if="messageFromSW"
        class="absolute top-0 p-2 bg-gray-700 text-gray-100"
      >
        {{ messageFromSW }}
      </p>
    </div>
    <h3 class="mt-4 text-lg text-gray-900">{{ title }}</h3>
  </a>
</template>

<script>
export default {
  name: "DummiesItem",
  props: {
    title: String,
    imageSrc: String,
    imageWidth: Number,
    imageHeight: Number,
    description: String,
    messageFromSW: String,
  },
};
</script>

<style></style>
