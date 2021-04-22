<template>
    <div class="bg-gray-300 fixed w-full top-0 text-black">
    <div class="flex relative max-w-6xl mx-auto h-16 md:h-20 px-4">
        <div class="flex relative items-center">
            <img alt="Vue logo" src="@/assets/logo.png" class="w-20" />
        </div>
        <div>
        <div class="flex items-center absolute inset-y-0 right-0">
            <div class="flex font-medium font-bold">
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
