<template>
  <div
    class="flex flex-col rounded-lg shadow-md "
    @mouseenter="showED = !showED"
    @mouseleave="showED = !showED"
    
  >
    <div class=" overflow-hidden w-full relative pb-72">
      <div
        v-show="showED"
        class="flex  space-x-8 absolute z-10 top-1/2 right-1/2 transform  translate-x-2/4"
        
      >
        <div
          class=" bg-green-500 py-4 px-5 cursor-pointer rounded-full text-white shadow-2xl"
          @click="editItem"
        >
          <span class="material-icons text-4xl">edit</span>
        </div>
        <div
          class=" bg-red-600 py-4 px-5 cursor-pointer rounded-full text-white shadow-2xl"
          @click="deleteItem"
        >
          <span class="material-icons text-4xl">delete</span>
        </div>
      </div>
      <img
        :src="image"
        class="absolute h-full w-full object-cover object-center p-1 rounded-lg bg-white"
        alt=""
        :class="{ 'filter opacity-50' : showED}"
      />
      <div
        class=" absolute -mt-4 w-full p-1 bottom-0 bg-gray-500 opacity-60 h-8 rounded-b-lg"
      />
      <div class=" absolute -mt-4 w-full p-1 bottom-0">
        <div class="flex flex-row-reverse">
          <div
            class="w-4 h-4 m-1 rounded-md"
            v-for="color in product.colors"
            :key="color.colorId"
            :style="{ backgroundColor: color.hexColor }"
          ></div>
        </div>
      </div>
    </div>
    <router-link
      :to="{
        name: 'Item',
        params: {
          type: product.type,
          itemName: product.name,
          itemId: product.id,
          itemImgTest: image,
        },
      }"
      class="hover:text-indigo-500"
    >
      <div class="z-10 w-full ">
        <div class="py-4 px-5">
          <h1 class="font-bold text-lg">{{ product.name }}</h1>
          <div class="flex items-center justify-between">
            <div class="text-sm font-light">Warranty : [ ]</div>
            <div class="text-2xl text-red-600 font-bold">
              $ {{ product.price }}
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forTestImg: [
        { type: "keyboard", img: require("@/assets/keyboard.svg") },
        { type: "headset", img: require("@/assets/headset.svg") },
        { type: "mouse", img: require("@/assets/mouse.svg") },
      ],
      image: "",
      showED: false,
    };
  },
  methods: {
    editItem() {
      this.$router.push({ name: "Form", params: { itemId: this.product.id } });
    },
    deleteItem() {
      console.log("del");
    },
  },

  props: {
    product: Object,
  },
  created() {
    this.image = this.forTestImg.find((item) => {
      return this.product.type.toLowerCase() === item.type.toLowerCase();
    }).img;
  },
};
</script>

<style></style>
