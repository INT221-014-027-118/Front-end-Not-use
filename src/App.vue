<template>
  <nav-bar :change="changeMode" @switch-mode="switchMode"></nav-bar>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      changeMode: Boolean,
    };
  },
  methods: {
    switchMode() {
      this.changeMode = !this.changeMode;
      if (this.changeMode == false) {
        localStorage.theme = "light";
        document.getElementById('light')
      } else {
        localStorage.theme = "dark";
        document.getElementById('dark')
      }
      this.mode();
    },
    mode() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        this.changeMode = true;
        document.documentElement.classList.add("dark");
      } else {
        this.changeMode = false;
        document.documentElement.classList.remove("dark");
      }
    },
  },
  created() {
    this.mode();
  },
};
</script>
<style>

.dark:root {
  color-scheme: dark;
}
.light:root {
  color-scheme: light;
}

</style>
