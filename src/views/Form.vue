<template>
  <div class="mt-20 lg:mt-24">
    <form @submit.prevent="submitForm">
      <div
        class="relative grid max-w-6xl px-8 pt-4 pb-10 mx-auto bg-white rounded shadow-md dark:bg-gray-700 sm:grid-cols-2"
      >
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ L ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        <div>
          <div class="relative px-3 mb-6 lg:w-full md:mb-0">
            <label class="label-css" for="brand">Brand</label>
            <select
              class="input-css"
              id="brandAdd"
              v-model="brandAdd"
              required
              :class="{ 'ring ring-red-400': invalid_brand }"
            >
              <option value="" disabled selected>[ Select Brand ]</option>
              <option
                v-for="brand in brands"
                :key="brand.brandId"
                :value="brand.brandName"
                class="text-lg "
                >{{ brand.brandName }}</option
              >
            </select>
            <span
              v-if="invalid_brand"
              class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 "
              >Please select Brand</span
            >
          </div>

          <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
            <label class="label-css" for="">Name</label>
            <input
              v-model.trim="name"
              class="input-css"
              id=""
              type="text"
              placeholder="product name"
              required
              :class="{ 'ring ring-red-400': invalid_name }"
            />
            <span
              v-if="invalid_name"
              class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 "
              >Please input name</span
            >
          </div>

          <div class="flex flex-col md:flex-row lg:w-full">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative">
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
                :class="{ 'ring ring-red-400': invalid_price }"
              />
              <span
                v-if="invalid_price"
                class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 "
                >Please select Brand</span
              >
            </div>

            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="label-css" for="grid-state">Type</label>
              <div class="relative ">
                <select
                  class="input-css"
                  id="type"
                  v-model="type"
                  required
                  :class="{ 'ring ring-red-400': invalid_type }"
                >
                  <option value="" disabled selected>[ Select Type ]</option>
                  <option value="Keyboard">Keyboard</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Headset">Headset</option>
                </select>
                <span
                  v-if="invalid_type"
                  class="absolute -bottom-1 left-5 p-3 font-mono text-red-500 "
                  >Please select type</span
                >
              </div>
            </div>
          </div>

          <div class="relative px-3 mb-6 lg:w-full md:mb-0">
            <label class="label-css" for="description">Description</label>
            <textarea
              class="input-css h-44"
              id="description"
              v-model="description"
              type="text"
              placeholder=""
            />
          </div>

          <div class="relative px-3 mb-6 lg:w-full md:mb-0">
            <label class="label-css" for="previewImage">color</label>
            <div
              class="input-css "
              :class="{ 'ring ring-red-400': invalid_Color }"
            >
              <div class="flex flex-wrap">
                <div v-for="(color, index) in colors" :key="color.colorId">
                  <base-color
                    :color="color.hexColor"
                    @active-color="active($event, index)"
                    :isActive="color.active"
                  />
                </div>
              </div>
            </div>
            <span
              v-if="invalid_Color"
              class="absolute p-3 font-mono text-red-500 left-7 -bottom-3 "
              >Please select product color</span
            >
          </div>

          <input
            @click="validating"
            type="submit"
            value="Add Product"
            class="absolute z-10 rounded shadow-md cursor-pointer btn bottom-4 right-4"
          />
        </div>

        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Right ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

        <div>
          <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
            <label class="label-css" for="previewImage">Launch date</label>
            <input
              type="date"
              class="input-css"
              v-model="launchDate"
              required
              :class="{ 'ring ring-red-400': invalid_date }"
              @blur="invalid_date = launchDate === '' ? true : false"
            />
            <span
              v-if="invalid_date"
              class="absolute p-3 font-mono text-red-500 left-7 -bottom-1"
              >Please input date</span
            >
          </div>

          <div class="px-3 mb-6 lg:w-full md:mb-0">
            <label class="label-css">Warranty</label>
            <div class="flex flex-col md:flex-row input-css">
              <div class="flex items-center mr-7">
                <input
                  type="radio"
                  id="0"
                  name="warranty"
                  v-model="warranty"
                  value="0"
                  class="w-4 h-5 mr-2"
                />
                <label for="0">none</label>
              </div>
              <div class="flex items-center mr-7">
                <input
                  type="radio"
                  id="3"
                  name="warranty"
                  v-model="warranty"
                  value="3"
                  class="w-4 h-5 mr-2"
                />
                <label for="3">3 year</label>
              </div>
              <div class="flex items-center mr-7">
                <input
                  type="radio"
                  id="5"
                  name="warranty"
                  v-model="warranty"
                  value="5"
                  class="w-4 h-5 mr-2"
                />
                <label for="5">5 year</label>
              </div>
            </div>
          </div>

          <div
            class="px-3 mb-6 lg:w-full md:mb-0 relative"
            :class="{ hidden: activeClose }"
          >
            <label class="label-css" for="description">File</label>
            <input
              class="input-css"
              id="file"
              v-on:change="onFileChange($event)"
              type="file"
              required
              :class="{ 'ring ring-red-400': invalid_img }"
            />
            <span
              v-if="invalid_img"
              class="absolute p-3 font-mono text-red-500 left-7 -bottom-1 "
              >Please choose image</span
            >
          </div>

          <div
            class="px-3 mb-6 lg:w-full md:mb-0"
            :class="{ hidden: !activeClose }"
          >
            <label class="label-css" for="previewImage">Preview</label>
            <div class="relative input-css">
              <span
                class="absolute p-1 text-white bg-blue-700 rounded-full cursor-pointer material-icons top-2 right-2"
                @click="removeImage()"
                >close</span
              >
              <img :src="previewImage" alt="Preview Image" class="max-h-80" />
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
      brandAdd: "",
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
      invalid_name: false,
      invalid_price: false,
      invalid_type: false,
      invalid_Description: false,
      invalid_Color: false,
      invalid_date: false,
      invalid_img: false,
    };
  },
  props: {
    itemId: Number,
  },
  methods: {
    validating() {
      this.invalid_brand = this.brandAdd === "" ? true : false;
      setTimeout(() => {
        this.invalid_brand = false;
      }, 5000);
      this.invalid_name = this.name === "" ? true : false;
      setTimeout(() => {
        this.invalid_name = false;
      }, 5000);
      this.invalid_price = this.price === 0 ? true : false;
      setTimeout(() => {
        this.invalid_price = false;
      }, 5000);
      this.invalid_type = this.type === "" ? true : false;
      setTimeout(() => {
        this.invalid_type = false;
      }, 5000);
      this.invalid_Description = this.description === "" ? true : false;
      setTimeout(() => {
        this.invalid_Description = false;
      }, 5000);
      this.invalid_Color = this.colorsAdd.length === 0 ? true : false;
      setTimeout(() => {
        this.invalid_Color = false;
      }, 5000);
      this.invalid_date = this.launchDate === "" ? true : false;
      setTimeout(() => {
        this.invalid_date = false;
      }, 5000);
      this.invalid_img = this.previewImage === null ? true : false;
      setTimeout(() => {
        this.invalid_img = false;
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
          return {
            colorId: color.colorId,
            colorName: color.colorName,
            hexColor: color.hexColor,
          };
        });
    },
    async getDataToEdit() {
      fetch("http://localhost:5000/products/" + this.itemId)
        .then((res) => res.json())
        .then((data) => {
          this.brandAdd  = data.brand
          this.type = data.type
          this.name = data.name
          this.price = data.price
          this.description = data.description
          this.warranty = data.warranty
          this.launchDate = data.launchDate
          // this.colors.forEach((color,index)=>{
          //   if(data.colors[index].colorId==color.colorId){
          //     color.active = true
          //   }
          // })
          // this.colors.map((color2)=>{
          //   if(data.colors.some((color)=>{return color.colorId === color2.colorId})){
          //     color.active = true
          //   }
          // })
          // for(let i =0; i < this.colors.length ; i++){
          //   if(data.colors.some((color)=>{return color.colorId === this.colors[i].colorId}))
          //   this.colors[i].active = true

          // }

        })
        .catch((error) => console.log(error));
    },
  },
  async created() {
    fetch("http://localhost:5000/colors")
      .then((res) => res.json())
      .then((data) => (this.colors = data))
      .then(() => {this.colors.forEach((color) => (color["active"] = true))
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => (this.brands = data))
      .catch((error) => console.log(error));
    
    this.getDataToEdit();
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
