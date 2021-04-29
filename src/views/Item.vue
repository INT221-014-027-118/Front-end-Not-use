<template>
  <div class="fixed pt-0 md:pt-3 lg:pt-10 ">
    
    <div class="items-center mx-auto max-w-6xl mb-10 rounded-md bg-blue-100 dark:bg-gray-700 ">
          <div class="bg-blue-200 dark:bg-blue-800 px-10 py-3 text-xl font-mono tracking-wider rounded-md flex flex-col md:flex-row justify-between items-center ">
            <div>{{item.brand}}:{{item.name}}</div>
            <div class="flex mt-4 md: md:m-0 text-sm">
              <div class="flex items-center bg-green-600 p-1 mx-3 px-3 cursor-pointer rounded-md text-white">
                <span class="material-icons">edit</span>Edit
              </div>
              <div class="flex items-center bg-red-600 p-1 mx-3 px-3 cursor-pointer rounded-md text-white">
                <span class="material-icons">delete</span>Delete
              </div>
              <span class="material-icons p-2 bg-white text-black rounded-full ml-10 -mr-5 cursor-pointer " @click="close">close</span>
            </div>
          </div>


      <div
        class="container p-2 pb-5 mx-auto grid gap-3 grid-cols-1 md:grid-cols-2"
      >
        <div class="flex flex-col">
          <img :src="itemImgTest" alt="" class="max-h-96 my-5" />
          <div class="flex items-center justify-center">
            <div
              class="w-7 h-7 m-2 text-center rounded-md cursor-pointer flex items-center justify-center" v-for="color in item.colors" :key="color.id"
              :style="{backgroundColor:color.hexColor}"
            />
          </div>
        </div>

        <div class="py-3 px-5">
          <div class="pb-3 text-2xl">{{item.name}}</div>
          <div class="px-3">
            <p>{{item.description}}</p>
            <div class="flex justify-between items-center mt-5">
              <span class="text-md font-light">Warranty:</span>
              <span class="text-2xl text-red-600 font-bold">$ {{item.price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  components: {},
  props: {
    itemName: String,
    itemId: Number,
    itemImgTest: String,
  },
  data() {
    return {
      item: Object,
    };
  },
  methods: {
    close(){
      this.$router.go(-1)
    }
  },
  async created() {
    fetch("http://localhost:5000/products/" + this.itemId)
      .then((res) => res.json())
      .then((data) => (this.item = data))
      .catch((error) => console.log(error));
  },
};
</script>
