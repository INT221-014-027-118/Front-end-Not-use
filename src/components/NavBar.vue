<template>
  <div class="fixed w-full top-0 z-50 text-blue-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
    <div class="flex relative items-center mx-auto max-w-6xl h-16 md:h-20 px-4">
          <div class="mx-auto sm:m-0">
              <router-link to="/"  class="flex items-center hover:text-indigo-500 cursor-pointer">
                <i class="material-icons text-5xl md:text-7xl">sports_esports</i> 
                <span class="font-mono p-2 font-bold text-2xl tracking-tighter animate-pulse hidden md:inline-flex">Refun Guarntee</span>
              </router-link>       
          </div>
        <div>
          <div class="flex items-center absolute inset-y-0 right-0 hidden sm:inline-flex">
              <div class="flex font-bold items-center">
                  <router-link to="/" class="px-4 py-7 hover:text-indigo-500">Home</router-link>
                  <router-link to="/team" class="px-4 py-7 hover:text-indigo-500">Team</router-link>
                  <router-link to="/about" class="px-4 py-7 hover:text-indigo-500">About</router-link>
                  <router-link to="/form" class="px-4 py-7 hover:text-indigo-500">Add</router-link>
                  <p class="border-r-2 dark:border-gray-300 border-indigo-900 h-5 w-1 my-auto mx-5"></p>
                  <div class="cursor-pointer">
                    <div :class="{ hidden: !change }" @click="switchMode" class="px-4 py-7 hover:text-indigo-500">
                        <i class="material-icons">light_mode</i>
                    </div>
                    <div :class="{ hidden: change }"  @click="switchMode" class="px-4 py-7 hover:text-indigo-500">
                        <i class="material-icons">dark_mode</i>
                    </div>
                  </div>
              </div>
          </div>

          <div class="absolute top-0 left-0 w-8 h-full z-50 bg-red-600 sm:hidden border border-yellow-500">
              <div class="bg-green-700 ">test1 
                
                <div class=" ">test</div>
                <div class=" ">test</div>
                <div class=" ">test</div>
                <div class=" ">test</div>
                <div class=" ">test</div>
                <div class=" ">test</div>
                <div class=" ">test</div>
                <div class=" ">test</div>
                <div class=" ">test</div>
                <div class=" ">test</div>
              </div>
             
          </div>


        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    change: Boolean,
  },
  methods: {
    switchMode() {
      this.$emit("switch-mode");
    },
  },
};
</script>

<style >

</style>
