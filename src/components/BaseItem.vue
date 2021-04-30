<template>
  <div
    class="flex flex-col rounded-lg shadow-md "
    @mouseenter="showED = !showED"
    @mouseleave="showED = !showED"
    v-show="!isDeleted"
  >
    <div class="overflow-hidden w-full relative pb-72">
      <div
        v-show="showED"
        class="flex invisible sm:visible space-x-8 absolute z-10 top-1/2 right-1/2 transform translate-x-2/4"
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
      <div
        class="flex visible sm:invisible space-x-8 absolute z-10 right-1/2 transform  translate-x-2/4"
      >
        <div
          class=" flex items-center bg-green-500 py-1 px-5 cursor-pointer rounded-md text-white shadow-2xl"
          @click="editItem"
        >
          <span class="material-icons text-2xl">edit</span>Edit
        </div>
        <div
          class=" flex items-center bg-red-600 py-1 px-5 cursor-pointer rounded-md text-white shadow-2xl"
          @click="deleteItem"
        >
          <span class="material-icons text-2xl">delete</span>Delete
        </div>
      </div>
      <img
        :src="image"
        class="absolute h-full w-full object-cover object-center p-1 rounded-lg bg-white"
        alt=""
        :class="{ ' sm:opacity-50': showED }"
      />
      <div
        class=" absolute -mt-4 w-full p-1 bottom-0 bg-gray-600 opacity-60 h-8 rounded-b-lg"
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
      class="hover:text-blue-600"
      @mouseenter="more = !more"
      @mouseleave="more = !more"
    >
      <div class="z-10 w-full relative">
        <div class="pt-4 pb-8 px-5 ">
          <h1
            class="font-bold text-lg underline sm:no-underline"
            :class="{ underline: more }"
          >
            {{ product.name }}
          </h1>
          <div class="flex items-center justify-between">
            <div class="text-sm font-light text-black dark:text-white ">
              Warranty : [ ]
            </div>
            <div class="text-2xl text-red-600 font-bold">
              ฿ {{ product.price }}
            </div>
          </div>
          <div class="h-24 p-2 overflow-hidden text-black dark:text-white relative">{{ product.description }}
          <div class="absolute z-10 bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-100 pointer-events-none"></div>


          </div>
        </div>
        <div
          class="absolute right-1/2 transform underline translate-x-1/2 bottom-1 z-10"
        >
          Show More
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
      urlItem: "http://localhost:5000/products/" + this.product.id,
      isDeleted: false,
    };
  },
  methods: {
    editItem() {
      this.$router.push({ name: "Form", params: { itemId: this.product.id } });
    },
    deleteItem() {
      let confirm = window.confirm("Are you sure?");
      if (confirm) {
        fetch(this.urlItem, { method: "DELETE" })
          .then(() => {
            this.close();
          })
          .catch((error) => console.log(error));
        this.isDeleted = true;
      }
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
