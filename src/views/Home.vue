<template>

<div class="flex items-center h-screen ">
  <div class="w-4/5 mx-auto mt-24 sm:mt-44 md:mt-0">
    <div class="flex flex-col items-stretch md:flex-row">
      
      <div class="md:w-1/3 p-4 md:p-3 lg:p-7 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"  >
        <div class="h-28 md:h-36 rounded-t-lg bg-contain bg-white bg-no-repeat bg-top" :style="{'background-image': 'url(' + require('@/assets/headset.svg') + ')'}"></div>
        <div class="flex justify-center items-center p-3 sm:p-6 rounded-b-lg shadow-2xl text-center bg-blue-200 dark:bg-blue-900" >
              <i class="material-icons p-3 md:p-3 lg:p-6 rounded-full bg-blue-700 text-white mr-3">headset_mic</i>
              <span class="text-xl font-mono uppercase">headset</span>
        </div>
      </div>
      

      <div class="md:w-1/3 p-4 md:p-3 lg:p-7 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"  >
        <div class="h-28 md:h-36 rounded-t-lg bg-contain bg-white bg-no-repeat bg-top" :style="{'background-image': 'url(' + require('@/assets/keyboard.svg') + ')'}"></div>
        <div class="flex justify-center items-center p-3 sm:p-6 rounded-b-lg shadow-2xl text-center bg-blue-200 dark:bg-blue-900" >
              <i class="material-icons p-3 md:p-3 lg:p-6 rounded-full bg-blue-700 text-white mr-3">keyboard</i>
              <span class="text-xl font-mono uppercase">keyboard</span>
        </div>
      </div>

      <div class="md:w-1/3 p-4 md:p-3 lg:p-7 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"  >
        <div class="h-28 md:h-36 rounded-t-lg bg-contain bg-white bg-no-repeat bg-top" :style="{'background-image': 'url(' + require('@/assets/mouse.svg') + ')'}"></div>
        <div class="flex justify-center items-center p-3 sm:p-6 rounded-b-lg shadow-2xl text-center bg-blue-200 dark:bg-blue-900" >
              <i class="material-icons p-3 md:p-3 lg:p-6 rounded-full bg-blue-700 text-white mr-3">mouse</i>
              <span class="text-xl font-mono uppercase">mouse</span>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      itme:[
        {
          itmeName:"headset",
        }
      ]
    }
  },
}
</script>
