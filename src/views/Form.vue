<template>
  <div class="mt-20 lg:mt-24">
    <form @submit.prevent="submitForm">
      <div class="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-4 pb-10 grid sm:grid-cols-2 max-w-6xl mx-auto relative" >
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ L ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        <div>
          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="brand">Brand</label>
              <select class="input-css" id="type" v-model="brandAdd" required>
                  <option value="" disabled selected>[ Select Brand ]</option>
                  <option v-for="brand in brands" :key="brand.brandId" :value="brand.brandName"  class="text-lg ">{{brand.brandName}}</option>
              </select>
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="name">Name</label>
            <input
              v-model.trim="name"
              class="input-css"
              id="name"
              type="text"
              placeholder="product name"
              required
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
                min="1" 
                max="9999999"
                required
              />
            </div>

            <div class="w-1/2 px-3">
              <label class="label-css" for="grid-state">Type</label>
              <div class="relative">
                <select class="input-css" id="type" v-model="type" required>
                  <option value="" disabled selected>[ Select Type ]</option>
                  <option value="Keyboard">Keyboard</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Headset">Headset</option>
                </select>
              </div>
            </div>
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0 relative">
            <label class="label-css" for="description" >Description</label>
            <textarea
              class="input-css h-44"
              id="description"
              v-model="description"
              type="text"
              placeholder=""
              :class="{ 'ring ring-red-400' : invalid_Description}"
            />
              <span v-if="invalid_Description" class="text-red-500 font-mono absolute left-8 bottom-2 p-3 ">Please input description</span>
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0 relative">
            <label class="label-css" for="previewImage">color</label>
            <div class="input-css " :class="{ 'ring ring-red-400' : invalid_Color}">
              <div class="flex flex-wrap">
                <div v-for="(color, index) in colors" :key="color.colorId">
                  <base-color
                    :color="color.hexColor"
                    @active-color="active($event, index)"
                  />
                </div>
              </div>
            </div>
              <span v-if="invalid_Color" class="text-red-500 font-mono absolute left-8 -bottom-3 p-3 ">Please select product color</span>
          </div>

          <input
            @click="validating"
            type="submit"
            value="Add Product"
            class="btn absolute bottom-4 right-4 cursor-pointer rounded z-10 shadow-md"
          />
        </div>

        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Right ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

        <div>

          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css" for="previewImage">Launch date</label>
              <input type="date" class="input-css" v-model="launchDate" required/>
              
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0">
            <label class="label-css">Warranty</label>
            <div class="flex flex-col md:flex-row input-css">
              <div class="flex items-center mr-7">
                <input type="radio" id="0" name="warranty" v-model="warranty" value="0" class="mr-3 h-5 w-4">
                <label for="0">none</label>
              </div>
              <div class="flex items-center mr-7">
                <input type="radio" id="3" name="warranty" v-model="warranty" value="3" class="mr-3 h-5 w-4">
                <label for="3">3 year</label>
              </div>
              <div class="flex items-center mr-7">
                <input type="radio" id="5" name="warranty" v-model="warranty" value="5" class="mr-3 h-5 w-4">
                <label for="5">5 year</label>
              </div>
            </div>
          </div>

          <div class="lg:w-full px-3 mb-6 md:mb-0" >
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
              <img :src="previewImage" alt="Preview Image" class="max-h-64" />
            </div>
          </div>


        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [],
      brandAdd:'',
      name: "",
      price: 0,
      warranty: 0,
      launchDate: "",
      type: "",
      description: "",
      url: "http://localhost:5000/products",
      previewImage: null,
      activeClose: false,
      colors: [],
      colorsAdd: [],
      invalid_brand: false,
      invalid_Color: false,
      invalid_Description: false
    };
  },
  methods: {
    validating(){
        this.invalid_Color = this.colorsAdd.length === 0 ? true : false;
        setTimeout(() => {
          this.invalid_Color = false
        }, 5000);
        this.invalid_Description = this.description === "" ? true : false;
        setTimeout(() => {
          this.invalid_Description = false
        }, 5000);

        
    },

    submitForm() {

      fetch(this.url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          brand: this.brandAdd,
          type: this.type,
          name: this.name,
          price: this.price,
          colors: this.colorsAdd,
          description: this.description,
          warranty: this.warranty,
          launchDate: this.launchDate,
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
      this.colorsAdd = this.colors
        .filter((color) => {
          return color.active === true;
        })
        .map((color) => {
          return {colorId:color.colorId,colorName:color.colorName,hexColor:color.hexColor};
        });
    },
  },
  async created() {
        fetch('http://localhost:5000/colors')
        .then((res) => res.json())
        .then((data) => this.colors = data)
        .then(()=>this.colors.forEach((color) => color['active']=false))
        .catch((error) => console.log(error));

        fetch('http://localhost:5000/brands')
        .then((res) => res.json())
        .then((data) => this.brands = data)
        .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.input-css {
  @apply w-full border border-gray-500 focus:outline-none rounded py-3 px-5 mb-3 bg-gray-100 dark:bg-gray-600;
}

.label-css {
  @apply block uppercase tracking-wide text-xs font-bold mb-2;
}

.btn {
  @apply bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4;
}
</style>
