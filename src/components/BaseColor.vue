<template>
  <div
    class="w-7 h-7 m-2 text-center rounded-md cursor-pointer flex items-center justify-center"
    :style="{ backgroundColor: color }"
    @click="activeColor"
  >
    <span
      class="material-icons ring-4 rounded-md ring-offset-gray-100 ring-offset-2"
      v-show="active"
      :class="{ 'ring-blue-400 text-blue-500': active }"
    >
      done
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },
  props: {
    color: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
  },
  methods: {
    activeColor() {
      this.active = !this.active;
      this.$emit("active-color", this.active);
    },
  },
  async created() {
     this.active = await Boolean(this.isActive);
    console.log(this.active)
  },
};
</script>

<style></style>
