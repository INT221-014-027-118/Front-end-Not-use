<template>
  <div class="mt-28">
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 grid grid-cols-2 max-w-6xl mx-auto relative"
    >
      <form @submit.prevent="submitForm">
        <div class="lg:w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="brand"
          >
            Brand
          </label>
          <input
            v-model.trim="brand"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="brand"
            type="text"
            placeholder=""
          />
        </div>

        <div class="lg:w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            v-model.trim="name"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="name"
            type="text"
            placeholder=""
          />
        </div>
        <div class="lg:w-full md:w-1/2 flex flex-row">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="price"
            >
              Price
            </label>
            <input
              v-model="price"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="price"
              type="number"
              placeholder=""
            />
          </div>

          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-state"
            >
              Type
            </label>
            <div class="relative">
              <select
                class="block bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded w-full"
                id="type"
                v-model="type"
              >
                <option value="Keyboard">Keyboard</option>
                <option value="Mouse">Mouse</option>
                <option value="Headset">Headset</option>
              </select>
            </div>
          </div>
        </div>

        <div class="lg:w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="description"
          >
            Description
          </label>
          <textarea
            class="appearance-none block w-full h-36 bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="description"
            v-model="description"
            type="text"
            placeholder=""
          />
        </div>

        <input
          type="submit"
          value="Add Product"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded absolute bottom-4 right-4"
        />
      </form>
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
          description: this.description,
          previewImage: null,
        }),
      });
    },
  },
};
</script>

<style>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
