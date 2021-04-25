<template>

<div class="flex items-center lg:h-screen lg:mt-0 -mt-5 sm:mt-0 md:mt-28 ">
  <div class="w-4/5 mx-auto mt-24 sm:mt-44 md:mt-0">
    <div class="flex flex-col items-stretch md:flex-row">
      
    <item-type v-for="item in itemType" :key="item.img" :item="item" ></item-type>

    </div>
  </div>
</div>

  <div class="h-screen bg-red-600 mt-52">
    <div class="h-full items-center mx-auto max-w-6xl bg-yellow-400">
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
    <div class="container p-2 mx-auto grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

      
      <div class="flex flex-col border border-green-400 shadow-md">
        <div class="bg-white overflow-hidden w-full relative pb-96" >
          <img 
            src="@/assets/headset.svg"
            class="absolute h-full w-full object-cover object-center p-2 rounded-lg "
            alt=""
          />
        </div>
        <div class="z-10 w-full">
          <div class="bg-white shadow-lg py-5 px-5">
            <h1 class="font-bold text-gray-800 text-lg">Geek Pizza</h1>
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <p class="font-bold text-gray-800 text-lg">Geek Pizza</p>
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600 font-light">Size : Regular</div>

              <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center shadow-md">
        <div
          class="bg-white overflow-hidden rounded-lg w-full relative pb-36"
        >
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
            class="absolute h-full w-full object-cover object-center"
            alt=""
          />
        </div>
        <div class="z-10 -mt-12 px-6 w-full">
          <div class="bg-white shadow-lg rounded-lg py-5 px-5">
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600 font-light">Size : Regular</div>
              <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center shadow-md">
        <div
          class="bg-white overflow-hidden rounded-lg w-full relative pb-36"
        >
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
            class="absolute h-full w-full object-cover object-center"
            alt=""
          />
        </div>
        <div class="z-10 -mt-12 px-6 w-full">
          <div class="bg-white shadow-lg rounded-lg py-5 px-5">
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600 font-light">Size : Regular</div>
              <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center shadow-md">
        <div
          class="bg-white overflow-hidden rounded-lg w-full relative pb-36"
        >
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
            class="absolute h-full w-full object-cover object-center"
            alt=""
          />
        </div>
        <div class="z-10 -mt-12 px-6 w-full">
          <div class="bg-white shadow-lg rounded-lg py-5 px-5">
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600 font-light">Size : Regular</div>
              <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center shadow-md">
        <div
          class="bg-white overflow-hidden rounded-lg w-full relative pb-36"
        >
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
            class="absolute h-full w-full object-cover object-center"
            alt=""
          />
        </div>
        <div class="z-10 -mt-12 px-6 w-full">
          <div class="bg-white shadow-lg rounded-lg py-5 px-5">
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600 font-light">Size : Regular</div>
              <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center shadow-md">
        <div
          class="bg-white overflow-hidden rounded-lg w-full relative pb-36"
        >
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
            class="absolute h-full w-full object-cover object-center"
            alt=""
          />
        </div>
        <div class="z-10 -mt-12 px-6 w-full">
          <div class="bg-white shadow-lg rounded-lg py-5 px-5">
            <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600 font-light">Size : Regular</div>
              <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
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
    ItemType
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
