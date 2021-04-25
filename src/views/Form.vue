<template>
  <div class="mt-24 lg:mt-24">
    <form @submit.prevent="submitForm">
      <div class="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-4 pb-14 grid sm:grid-cols-2 max-w-6xl mx-auto relative" >
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ L ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        <div>
          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="brand">Brand</label>
            <input
              v-model.trim="brand"
              class="input-css"
              id="brand"
              type="text"
              placeholder=""
            />
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="name">Name</label>
            <input
              v-model.trim="name"
              class="input-css"
              id="name"
              type="text"
              placeholder=""
            />
          </div>

          <div class="lg:w-full flex flex-row">
            <div class="w-1/2 px-3 mb-6 md:mb-0">
              <label class="label-css" for="price">Price</label>
              <input
                v-model="price"
                class="input-css"
                id="price"
                type="number"
                placeholder=""
              />
            </div>

            <div class="w-1/2 px-3">
              <label class="label-css" for="grid-state">Type</label>
              <div class="relative">
                <select class="input-css" id="type" v-model="type">
                  <option value="Keyboard">Keyboard</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Headset">Headset</option>
                </select>
              </div>
            </div>
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="description">Description</label>
            <textarea
              class="input-css h-36"
              id="description"
              v-model="description"
              type="text"
              placeholder=""
            />
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="previewImage">color</label>
            <div class="input-css">
              <div class="flex flex-wrap">
                <div v-for="(color, index) in colors" :key="color.color">
                  <base-color
                    :color="color.color"
                    @active-color="active($event, index)"
                  />
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Add Product"
            class="btn absolute bottom-4 right-4 cursor-pointer rounded z-10 shadow-md"
          />
        </div>

        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Right ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

        <div>
          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="description">File</label>
            <input
              class="input-css"
              id="file"
              v-on:change="onFileChange($event)"
              type="file"
            />
          </div>

          <div
            class="lg:w-full px-3 mb-6 md:mb-0"
            :class="{ hidden: !activeClose }"
          >
            <label class="label-css" for="previewImage">Preview</label>
            <div class="input-css relative">
              <span
                class="material-icons absolute top-2 right-2 cursor-pointer p-1 rounded-full bg-blue-700 text-white"
                @click="removeImage()"
                >close</span
              >
              <img :src="previewImage" alt="Preview Image" class="max-h-96" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseColor from "../components/BaseColor.vue";
export default {
  components: { BaseColor },
  data() {
    return {
      brand: "",
      name: "",
      price: 0,
      type: "",
      description: "",
      url: "http://localhost:5000/product",
      previewImage: null,
      activeClose: false,
      colors: [
        { active: Boolean, color: "#000000" },
        { active: Boolean, color: "#fffff0" },
        { active: Boolean, color: "#c9c9c9" },
        { active: Boolean, color: "#ffa5b5" },
        { active: Boolean, color: "#57bfff" },
        { active: Boolean, color: "#365aad" },
        { active: Boolean, color: "#008972" },
        { active: Boolean, color: "#6857ab" },
      ],
    };
  },
  methods: {
    submitForm() {
      let colorsAdd = this.colors
        .filter((color) => {
          return color.active === true;
        })
        .map((color) => {
          return color.color;
        });
      fetch(this.url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          brand: this.brand,
          type: this.type,
          name: this.name,
          price: this.price,
          colors: colorsAdd,
          description: this.description,
          img: this.img,
        }),
      });
    },

    onFileChange(event) {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.activeClose = true;
    },

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.previewImage = event.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.previewImage = null;
      this.activeClose = !this.activeClose;
    },

    active(active, index) {
      this.colors[index].active = active;
    },
  },
};
</script>

<style scoped>
.input-css {
  @apply block w-full border border-gray-500 focus:outline-none rounded py-3 px-4 mb-3 bg-gray-100 dark:bg-gray-600;
}

.label-css {
  @apply block uppercase tracking-wide text-xs font-bold mb-2;
}

.btn {
  @apply bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4;
}
</style>
