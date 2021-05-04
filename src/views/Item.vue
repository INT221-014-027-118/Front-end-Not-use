<template>
    <div class="pt-0 md:py-7 lg:py-10 w-screen h-full overflow-scroll" v-show="showItem">
        <div class="items-center mx-auto max-w-6xl mb-10 rounded-md bg-blue-100 dark:bg-gray-700 ">
            <div class="bg-blue-300 dark:bg-blue-800 px-5 md:px-10 py-3 text-xl font-mono tracking-wider rounded-md flex flex-col md:flex-row justify-between items-center relative">
                <div>
                    <p class="text-2xl font-bold">{{ brandName }} </p><p class="text-xl"> {{ product.productName }}</p>
                </div>
                <div class="flex mt-4 md: md:m-0 text-sm">
                    <div class="flex items-center bg-green-600 md:px-5 md:py-3 mx-3 px-4 py-2 hover:bg-green-700 cursor-pointer rounded-full text-white select-none" @click="editItem"><span class="material-icons">edit</span>Edit</div>
                    <div class="flex items-center bg-red-600 md:px-5 md:py-3 mx-3 px-4 py-2 over:bg-red-700 md:mr-16 cursor-pointer rounded-full text-white select-none" @click="deleteItem">
                        <span class="material-icons">delete</span>Delete
                    </div>
                    <span class="material-icons p-2 bg-white hover:bg-gray-300 text-black rounded-full cursor-pointer absolute top-1/4 right-2 -translate-y-1/2 select-none" @click="close">close</span>
                </div>
            </div>

            <div class="px-10 lg:mx-auto grid gap-3 grid-cols-1 md:grid-cols-2">
                <div class="flex justify-center md:flex-col my-3">
                    <img :src="itemImgTest" alt="" class=" sm:max-h-96 bg-white" />
                    <div class="flex flex-col md:flex-row items-center justify-center bg-gray-400 relative">
                        <div
                            class="w-7 h-7 m-2 text-center rounded-md cursor-pointer flex items-center justify-center "
                            v-for="color in product.colors"
                            :key="color.colorId"
                            :style="{ backgroundColor: color.hexColor }"
                            @mouseover="showTextColor(`${color.colorName}  ${color.hexColor}`)"
                            @mouseleave="showTextColor('')"
                        ></div>
                        <div v-show="showText" class="absolute -top-11 text-black">
                            <div class="bg-gray-500 text-white rounded-md px-3 py-2 opacity-80">{{ showText }}</div>
                        </div>
                    </div>
                </div>

                <div class="pb-8 sm:py-5 sm:px-5">
                    <div class="pb-3 text-2xl border-b border-black dark:border-gray-100 mb-3">{{ product.productName }}</div>
                    <div class="px-0 sm:px-3">
                        <div class="flex justify-between items-center mb-5">
                            <span class="text-md font-light">Warranty : {{ product.warranty == 0 ? "none" : product.warranty + " year" }}</span>
                            <span class="text-2xl text-red-500 font-bold">฿ {{ product.price }}</span>
                        </div>
                        <p>{{ product.description }}</p>
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
        type: String,
        productId: String,
        itemImgTest: String,
        productPassing: Object,
    },
    data() {
        return {
            showItem: true,
            urlItem: "http://localhost:9091/product",
            showText: "",
            product: [],
            marginTop: false,
            brandName: "",
        };
    },
    methods: {
        close() {
            this.showItem = false;
            this.$router.push({
                name: "ProductTypes",
                params: { type: this.product.type.typeName },
            });
            this.$emit("close-item", false);
        },
        showTextColor(color) {
            this.showText = `${color}`;
        },
        deleteItem() {
            let confirm = window.confirm("Are you sure?");
            if (confirm) {
                fetch(`${this.urlItem}/delete/${this.product.productId}`, { method: "DELETE" })
                    .then(() => {
                        this.close();
                    })
                    .catch((error) => console.log(error));
                this.$emit("deleted-item", this.product);
            }
        },
        editItem() {
            this.$router.push({
                name: "FormEdit",
                params: { itemId: this.product.productId },
            });
        },
        async getProduct() {
            return fetch(`${this.urlItem}/${this.productId}`)
                .then((res) => res.json())
                .then((data) => {
                    this.product = data;
                    this.brandName = data.brand.brandName;
                })
                .catch((error) => console.log(error));
        },
    },
    async created() {
        if (typeof this.productPassing == "function") {
            await this.getProduct();
        } else {
            this.product = this.productPassing;
            this.brandName = this.product.brand.brandName;
        }
    },
};
</script>
