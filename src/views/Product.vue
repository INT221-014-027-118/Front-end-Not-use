<template>
  <router-view class="z-40 h-screen w-full backdrop-filter backdrop-blur-xl"/>
  <div class="mt-16 md:mt-20 mb-60">
    <div class="h-full items-center mx-auto max-w-6xl bg-blue-100 dark:bg-gray-700 rounded-md mb-8 relative"
      v-for="brand in brandsObjs" :key="brand.brand" >
      <div class="text-center bg-blue-200 dark:bg-blue-800 px-2 py-3 text-xl font-mono tracking-wider rounded-md sticky top-16 md:top-20 z-30 ">
        {{ brand.brand }}
      </div>

      <div class="container p-2 mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
        <base-item :product="item" v-for="item in brand.items" :key="item.id" />
      </div>

    </div>
  </div>

</template>

<script>
import BaseItem from "@/components/BaseItem.vue";

export default {
  name: "Product",
  components: {
    BaseItem,
  },
  props: {
    type: String,
    getAll: String,
  },
  data() {
    return {
      items: [],
      brandsObjs: [],
    };
  },
  methods: {
    async getProducts() {
      await fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => {
          this.items = data.sort((a, b) => {
            if (a.brand > b.brand) return 1;
            if (a.brand < b.brand) return -1;
            return 0;
          });
        })
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
    await this.getProducts();

    let brands = new Set(
      this.items.map((item) => {
        return item.brand;
      })
    );
    brands = Array.from(brands);

    brands.forEach((brand) => {
      this.brandsObjs.push({
        brand: brand,
        items: this.items.filter((item) => {
          return item.brand === brand;
        }),
      });
    });
  },
};
</script>
