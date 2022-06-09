<template>
  <div
    class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  >
    <DummiesItem
      v-for="collection in collections"
      :key="collection.collectionId"
      :title="collection.data.title"
      :imageSrc="collection.data.image.src"
      :imageWidth="collection.data.image.width"
      :imageHeight="collection.data.image.height"
      :description="collection.data.description"
    />
  </div>
</template>

<script>
import DummiesItem from "./DummiesItem.vue";

export default {
  name: "DummiesCollections",
  components: {
    DummiesItem,
  },
  props: {
    collections: Array,
  },
};
</script>
