<template>
  <div class="fixed w-full top-0 z-50 text-blue-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
    <div class="flex relative max-w-6xl mx-auto h-16 md:h-20 px-4">
          <div >
              <router-link to="/"  class="flex relative items-center hover:text-indigo-500 cursor-pointer">
              <i class="material-icons text-7xl">sports_esports</i> 
              <span class="font-mono p-2 font-bold text-2xl tracking-tighter animate-pulse hidden md:inline-flex">Refun Guarntee</span>
              </router-link>       
          </div>
        <div>
          <div class="flex items-center absolute inset-y-0 right-0">
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
