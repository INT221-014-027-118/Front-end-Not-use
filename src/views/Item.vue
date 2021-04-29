<template>
  <div class="mt-20 md:mt-24">
    <div class="h-full items-center mx-auto max-w-6xl mb-10 rounded-md bg-blue-100 dark:bg-gray-700">
          <div class="bg-blue-200 dark:bg-blue-800 px-10 py-3 text-xl font-mono tracking-wider rounded-md flex flex-col md:flex-row justify-between items-center ">
            <div>Test Title: product name</div>  
            <div class="flex mt-4 md: md:m-0 text-sm">
              <div class="flex items-center bg-green-600 p-1 mx-3 px-3 cursor-pointer rounded-md text-white">
                <span class="material-icons">edit</span>Edit
              </div>
              <div class="flex items-center bg-red-600 p-1 mx-3 px-3 cursor-pointer rounded-md text-white">
                <span class="material-icons">delete</span>Delete
              </div>
            </div>
          </div>  
        

          <div class="container p-2 pb-5 mx-auto grid gap-3 grid-cols-1 md:grid-cols-2">

              <div class="flex flex-col">
                <img src="@/assets/headset.svg" alt="" class="max-h-96 my-5">
                <div class="flex items-center justify-center">
                  <div class="w-7 h-7 m-2 text-center rounded-md cursor-pointer flex items-center justify-center bg-black"  />
                  <div class="w-7 h-7 m-2 text-center rounded-md cursor-pointer flex items-center justify-center bg-white"  />
                  <div class="w-7 h-7 m-2 text-center rounded-md cursor-pointer flex items-center justify-center bg-red-500"  />
                  <div class="w-7 h-7 m-2 text-center rounded-md cursor-pointer flex items-center justify-center bg-yellow-400"  />
                  <div class="w-7 h-7 m-2 text-center rounded-md cursor-pointer flex items-center justify-center bg-green-500"  />
                </div>
              </div>

              <div class="py-3 px-5">
                <div class="pb-3 text-2xl">Product name</div>
                <div class="px-3">
                  <p></p>
                  <div class="flex justify-between items-center mt-5">
                    <span class="text-md font-light">Warranty:</span>
                    <span class="text-2xl text-red-600 font-bold">$ 8.00</span>
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
  components: {
  },
  props: {
    item: String,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
    console.log(this.item)
  },
};
</script>
