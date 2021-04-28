<template>
  <div
    class="h-full items-center mx-auto max-w-6xl bg-blue-100 dark:bg-gray-700 rounded-md mb-10 mt-24"
  >
    <div
      class="text-center bg-blue-200 dark:bg-blue-800 px-2 py-3 text-xl font-mono tracking-wider rounded-md"
    >
      test Title
    </div>

    <div
      class="container p-2 mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <base-item
        :product="item"
        v-for="item in items"
        :key="item.id"
      ></base-item>
    </div>
  </div>
</template>

<script>
import BaseItem from "@/components/BaseItem.vue";

export default {
  name: "Home",
  components: {
    BaseItem,
  },
  props: {
    type: String,
    resetPage: Boolean,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getProducts() {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => (this.items = data))
        .then(() => {
          if (!this.resetPage) {
            this.items = this.items.filter((item) => {
              return item.type.toLowerCase() === this.type.toLowerCase();
            });
          }
        })
        .catch((error) => console.log(error));
    },
  },
  async created() {
    this.getProducts();
  },
};
</script>
