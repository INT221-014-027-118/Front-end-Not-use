<template>

<div class="flex flex-col h-screen justify-center my-20 md:my-0">
    <div class="w-4/5 mx-auto mt-24 sm:mt-44 md:mt-0">
        <div class="flex flex-col items-stretch md:flex-row">
            <item-type v-for="item in itemType" :key="item.img" :item="item" ></item-type>
        </div>
    </div>
    <div class="flex justify-center mt-5 md:mt-20">
      <router-link to="/product" class="px-5 py-2 rounded-lg shadow ring-4  bg-blue-200 dark:bg-blue-900 hover:bg-blue-300 transition duration-200 transform dark:hover:bg-blue-700">All Products</router-link>
    </div>
</div>

</template>

<script>
import ItemType from "@/components/ItemType.vue"
import headset from "@/assets/headset.svg"
import keyboard from "@/assets/keyboard.svg"
import mouse from "@/assets/mouse.svg"

export default {
  name: 'Home',
  components: {
    ItemType,
  },
  data() {
    return {
      itemType:[
        {
          itmeName:"headset",
          image: headset,
          icon:"headset_mic",
        },
        {
          itmeName:"keyboard",
          image: keyboard,
          icon:"keyboard",
        },
        {
          itmeName:"mouse",
          image: mouse,
          icon:"mouse",
        },
      ]
    }
  },
}
</script>
