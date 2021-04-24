<template>
  <div
    class="w-7 h-7 text-center rounded-md border-2 cursor-pointer" :style="{ backgroundColor: color }"
    @click="active = !active">
    <span class="material-icons text-gray-400" v-show="active">
      done
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  props: {
    color: {
        type: String,
        required: true, 
    },
  },
};
</script>

<style></style>
