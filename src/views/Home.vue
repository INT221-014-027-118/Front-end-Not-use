<template>

<div class="flex flex-col sm:h-screen justify-center my-20 sm:my-20 md:m-0">
    <div class="w-4/5 mx-auto">
        <div class="flex flex-col items-stretch md:flex-row">
            <item-type v-for="item in itemType" :key="item.img" :item="item" ></item-type>
        </div>
    </div>
    <div class="flex justify-center my-5 md:mt-16">
      <router-link to="/product" class="px-9 py-4 ring-2 ring-offset-2 ring-offset-blue-500 rounded-lg shadow-2xl bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 transition duration-200 transform dark:hover:bg-blue-700">All Products</router-link>
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
