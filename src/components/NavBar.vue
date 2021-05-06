<template>
  <div class="fixed w-full top-0 z-50 text-blue-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-100 select-none">
    <div class="flex relative items-center mx-auto max-w-6xl h-16 md:h-20 px-4">
          <div class="mx-auto sm:m-0">
              <router-link to="/"  class="flex items-center hover:text-indigo-500 cursor-pointer transform duration-200 p-2">
                <i class="material-icons text-5xl md:text-7xl">sports_esports</i> 
                <span class="font-mono p-2 font-bold text-2xl tracking-tighter animate-pulse hidden md:inline-flex">Refun Guarntee</span>
              </router-link>       
          </div>
        <div>
          <div class="flex items-center absolute inset-y-0 right-0 invisible sm:visible">
              <div class="flex font-bold items-center">
                  <router-link to="/" class="px-4 py-7 hover:text-indigo-500">Home</router-link>
                  <router-link to="/form" v-if="this.$route.name !== 'FormEdit'" class="px-4 py-7 hover:text-indigo-500">Add</router-link>
                  <router-link to="/team" class="px-4 py-7 hover:text-indigo-500">Team</router-link>
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

          <div class="absolute top-0 left-0 w-8 h-full z-50 sm:hidden">
                            
                <div class="relative py-3 sm:max-w-xl mx-auto">
                    <nav x-data="{ open: false }">
                        <button class="w-10 h-10 relative focus:outline-none" @click="open = !open , menulist = !menulist">
                            <span class="sr-only">Open main menu</span>
                            <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8">
                                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
                            </div>
                        </button>
                    </nav>
                </div>

                <div :class="[ !menulist ?  'invisible' : 'w-screen absolute transform transition duration-500 ease-in-out top-0 translate-y-16' ]">
                  <div class="flex flex-col bg-gray-200 dark:bg-gray-900 w-full">
                    <router-link to="/" class="px-4 py-7 hover:text-indigo-500 text-center" @click="menulist =!menulist" >Home</router-link>
                    <router-link to="/team" class="px-4 py-7 hover:text-indigo-500 text-center"  @click="menulist =!menulist" >Team</router-link>
                    <!-- <router-link to="/about" class="px-4 py-7 hover:text-indigo-500 text-center"  @click="menulist =!menulist" >About</router-link> -->
                    <router-link to="/form" v-if="this.$route.name !== 'FormEdit'" class="px-4 py-7 hover:text-indigo-500 text-center"  @click="menulist =!menulist" >Add</router-link>
                  </div>
                </div>
              
          </div>

          <div class="cursor-pointer absolute top-0 right-6 w-8 h-full z-50 sm:hidden flex items-center ">
              <div :class="{ hidden: !change }" @click="switchMode" class="p-4 hover:text-indigo-500">
                  <i class="material-icons">light_mode</i>
              </div>
              <div :class="{ hidden: change }"  @click="switchMode" class="p-4 hover:text-indigo-500">
                  <i class="material-icons">dark_mode</i>
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
  data() {
    return {
      open: false,
      menulist: false,
      active: false
    }
  },
  methods: {
    switchMode() {
      this.$emit("switch-mode");
    }

  },
};
</script>

<style >

</style>
