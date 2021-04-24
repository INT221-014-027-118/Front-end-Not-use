<template>
  <div class="mt-28">
    <div
      class="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 grid sm:grid-cols-2 max-w-6xl mx-auto relative"
    >
      <div>
        <form @submit.prevent="submitForm">
          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="brand">
              Brand
            </label>
            <input
              v-model.trim="brand"
              class="input-css"
              id="brand"
              type="text"
              placeholder=""
            />
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="name">
              Name
            </label>
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
              <label class="label-css" for="price">
                Price
              </label>
              <input
                v-model="price"
                class="input-css"
                id="price"
                type="number"
                placeholder=""
              />
            </div>

            <div class="w-1/2 px-3">
              <label class="label-css" for="grid-state">
                Type
              </label>
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
            <label class="label-css" for="description">
              Description
            </label>
            <textarea
              class="input-css h-36"
              id="description"
              v-model="description"
              type="text"
              placeholder=""
            />
          </div>
          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="description">File</label>
            <input
              class="input-css"
              id="file"
              v-on:change="onFileChange($event)"
              type="file"
            />
          </div>

          <input
            type="submit"
            value="Add Product"
            class="btn absolute bottom-4 right-4 cursor-pointer rounded z-10 shadow-md"
          />
        </form>
      </div>

      <div class="lg:w-full px-3 mb-6 md:mb-0">
        <label class="label-css" for="previewImage">Preview</label>
        <div class="input-css relative">
          <img :src="previewImage" alt="" />
          <span class="material-icons absolute top-2 right-2 cursor-pointer" @click="removeImage">
            close
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: "",
      name: "",
      price: 0,
      type: "",
      description: "",
      url: "http://localhost:5000/product",
      previewImage: null,
    };
  },
  methods: {
    submitForm() {
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
          description: this.description
        }),
      });
    },
    onFileChange(event) {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
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
