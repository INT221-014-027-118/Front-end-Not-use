<template>
    <router-view class="z-40 h-screen w-full bg-gray-100 dark:bg-gray-800" @deleted-item="deleteItem" />
    <div class="mt-16 md:mt-20 mb-52 md:mb-24" v-if="brandsObjs.length > 0">
        <div class="h-full items-center mx-auto max-w-6xl bg-blue-100 dark:bg-gray-700 rounded-md mb-8 relative" v-for="brand in brandsObjs" :key="brand.brand">
            <div class="text-center bg-blue-300 dark:bg-blue-800 px-2 py-3 text-xl font-mono tracking-wider rounded-md sticky top-16 md:top-20 z-30">
                {{ brand.brand }}
            </div>
            <div class="container p-2 mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <base-item :product="item" v-for="item in brand.items" :key="item.productId" @deleted-item="deleteItem" />
            </div>
        </div>
    </div>
    
    <div v-else class="h-screen w-full flex items-center justify-center">
        <i class="material-icons text-4xl animate-spin" v-show="isLoad"> autorenew </i>
        <div class="text-4xl font-mono tracking-wide font-bold" v-show="!isLoad">Product Out</div>
    </div> 
    
</template>

<script>
import BaseItem from "@/components/BaseItem.vue";

export default {
    name: "Product",
    components: {
        BaseItem,
    },
    props: {
        type: String,
    },
    data() {
        return {
            items: [],
            brandsObjs: [],
            isLoad: Boolean,
        };
    },
    methods: {
        deleteItem(product) {
            let brandDeleted = this.brandsObjs.findIndex((item) => {
                return item.brand == product.brand.brandName;
            });
            let itemDeleted = this.brandsObjs[brandDeleted].items.findIndex((item) => {
                return item.productId === product.productId;
            });
            this.brandsObjs[brandDeleted].items.splice(itemDeleted, 1);
            if (this.brandsObjs[brandDeleted].items.length == 0) {
                this.brandsObjs.splice(brandDeleted, 1);
            }
        },
        async getProducts() {
            await fetch("http://localhost:9091/product/list")
                .then((res) => {
                    this.isLoad = true;
                    return res.json()})
                .then((data) => {
                    this.items = data.sort((a, b) => {
                        if (a.brand.brandName > b.brand.brandName) return 1;
                        if (a.brand.brandName < b.brand.brandName) return -1;
                        return 0;
                    });
                })
                .then(() => {
                    if (this.type) {
                        this.items = this.items.filter((item) => {
                            return item.type.typeName === this.type;
                        });
                    }
                })
                .catch((error) => console.log(error));
            this.isLoad = false;
        },
        sortProduct() {
            let brandsShow = [];
            let brands = this.items.map((item) => item.brand);
            let brandsId = new Set(
                this.items.map((item) => {
                    return item.brand.brandId;
                })
            );
            brandsId = Array.from(brandsId);
            brandsId.forEach((brand) => {
                brandsShow.push(brands.find((brandObj) => brandObj.brandId === brand));
            });
            brandsShow.forEach((brand) => {
                this.brandsObjs.push({
                    brand: brand.brandName,
                    items: this.items.filter((item) => {
                        return item.brand.brandId === brand.brandId;
                    }),
                });
            });
            this.isLoad = false;
        },
    },
    async created() {
        await this.getProducts();
        this.sortProduct();
    },
};
</script>
