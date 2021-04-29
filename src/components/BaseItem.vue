<template>
<router-link :to="{name: 'Item' ,params: {type:product.type,itemName:product.name ,itemId:product.id,itemImgTest:image }}" class="hover:text-indigo-500">
  <div class="flex flex-col rounded-lg shadow-md">
    <div class=" overflow-hidden w-full relative pb-72">
      <img
        :src="image"
        class="absolute h-full w-full object-cover object-center p-1 rounded-lg bg-white"
        alt=""
      />
    <div class=" absolute -mt-4 w-full p-1 bottom-0 bg-gray-500 opacity-60 h-8 rounded-b-lg" />
    <div class=" absolute -mt-4 w-full p-1 bottom-0">
      <div class="flex flex-row-reverse">
          <div class="w-4 h-4 m-1 rounded-md" v-for="color in product.colors" :key="color.colorId" :style="{ backgroundColor: color.hexColor }"></div>
      </div>
    </div>
    </div>
    <div class="z-10 w-full ">
      <div class="py-4 px-5">

        <h1 class="font-bold text-lg">{{ product.name }}</h1>
        <div class="flex items-center justify-between">
          <div class="text-sm font-light">Size : Regular</div>
          <div class="text-2xl text-red-600 font-bold">
            $ {{ product.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</router-link>
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
      image:''
    };
  },
  props: {
    product: Object,
  },
  created() {
    this.image = this.forTestImg.find((item)=>{return this.product.type.toLowerCase() === item.type.toLowerCase()}).img
  },
};
</script>

<style></style>
