<template>
    <div class="fixed w-full top-0 text-indigo-900 bg-gray-300 dark:bg-gray-900 dark:text-gray-100">
    <div class="flex relative max-w-6xl mx-auto h-16 md:h-20 px-4">
        <div class="flex relative items-center">
              <i class="material-icons text-7xl  p-2 animate-spin">sports_esports</i> 
              <p class="font-mono p-2 font-bold text-2xl tracking-tighter animate-pulse">Refun Guarntee</p>       
          </div>
        <div>
        <div class="flex items-center absolute inset-y-0 right-0">
            <div class="flex font-medium font-bold items-center">
                <router-link to="/" class="px-4 py-7">Home</router-link>
                <router-link to="/about" class="px-4 py-7">About</router-link>
                <p class="border-r-2 border-gray-300 h-5 w-1 my-auto mx-5"></p>
                <div class="cursor-pointer">
                  <div :class="{ hidden: !change }" @click="switchMode" class="px-4 py-7" >
                      <i class="material-icons">light_mode</i>
                  </div>
                  <div :class="{ hidden: change }"  @click="switchMode" class="px-4 py-7 " >
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
