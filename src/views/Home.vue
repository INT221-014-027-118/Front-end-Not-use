<template>

<div class="flex items-center lg:h-screen lg:mt-0 -mt-5 sm:mt-0 md:mt-28 ">
    <div class="w-4/5 mx-auto mt-24 sm:mt-44 md:mt-0">
        <div class="flex flex-col items-stretch md:flex-row">
            <item-type v-for="item in itemType" :key="item.img" :item="item" ></item-type>
        </div>
    </div>
    
</div>

  <list-items></list-items>
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
          text:"headset"  
        },
        {
          itmeName:"headset",
          image: keyboard,
          icon:"keyboard",
          text:"keyboard"  
        },
        {
          itmeName:"headset",
          image: mouse,
          icon:"mouse",
          text:"mouse"  
        },
      ]
    }
  },
}
</script>
