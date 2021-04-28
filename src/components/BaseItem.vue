<template>
  <div class="flex flex-col rounded-lg shadow-md">
    <div class=" overflow-hidden w-full relative pb-72">
      <img
        :src="image"
        class="absolute h-full w-full object-cover object-center p-1 rounded-lg bg-white"
        alt=""
      />
    </div>
    <div class="z-10 w-full ">
      <div class="py-5 px-5">
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
