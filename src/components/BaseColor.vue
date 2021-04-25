<template>
  <div class="w-7 h-7 m-4 text-center rounded-md cursor-pointer flex items-center justify-center" 
    :style="{ backgroundColor: color }" @click="activeColor">
    <span class="material-icons text-gray-400 ring-4 rounded-md  ring-offset-gray-100 ring-offset-2" v-show="active" :class="{ 'ring-blue-400' :active}">
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
   methods: {
    activeColor() {
        this.active = !this.active
        this.$emit('active-color',this.active)
    },
  },
};
</script>

<style></style>
