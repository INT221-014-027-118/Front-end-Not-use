<template>
    <div class="mt-20 lg:mt-24" v-show="!isLoad">
        <form @submit.prevent="submitForm">
            <div class="relative grid max-w-6xl px-8 pt-4 pb-10 mx-auto bg-white rounded shadow-md dark:bg-gray-700 sm:grid-cols-2">
                <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ L ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                <div>
                    <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                        <label class="label-css" for="brand">Brand *</label>
                        <select class="input-css" id="brandAdd" v-model="brandAdd" required :class="{ 'ring ring-red-400': invalid_brand }">
                            <option value="" disabled selected>[ Select Brand ]</option>
                            <option v-for="brand in brands" :key="brand.brandId" :value="brand.brandName" class="text-lg ">{{ brand.brandName }}</option>
                        </select>
                        <span v-if="invalid_brand" class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 ">Please select Brand</span>
                    </div>

                    <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
                        <label class="label-css" for="">Name *</label>
                        <input v-model.trim="name" class="input-css" id="" type="text" placeholder="product name" required :class="{ 'ring ring-red-400': invalid_name }" />
                        <span v-if="invalid_name" class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 ">Please input name</span>
                    </div>

                    <div class="flex flex-col md:flex-row lg:w-full">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative">
                            <label class="label-css" for="price">Price *</label>
                            <input v-model="price" step="0.01" class="input-css" id="price" type="number" placeholder="" min="1" max="99999" required :class="{ 'ring ring-red-400': invalid_price }" />
                            <span v-if="invalid_price" class="absolute -bottom-1 left-9 p-3 font-mono text-red-500 ">Please select Brand</span>
                        </div>

                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="label-css" for="grid-state">Type *</label>
                            <div class="relative ">
                                <select class="input-css" id="type" v-model="type" required :class="{ 'ring ring-red-400': invalid_type }">
                                    <option value="" disabled selected>[ Select Type ]</option>
                                    <option v-for="type in types" :key="type.id" :value="type.typeName">{{ type.typeName }}</option>
                                </select>
                                <span v-if="invalid_type" class="absolute -bottom-1 left-5 p-3 font-mono text-red-500 ">Please select type</span>
                            </div>
                        </div>
                    </div>

                    <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                        <label class="label-css" for="description">Description</label>
                        <textarea class="input-css h-40" id="description" v-model="description" type="text" placeholder="" />
                    </div>

                    <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                        <label class="label-css" for="previewImage">color *</label>
                        <div class="input-css " :class="{ 'ring ring-red-400': invalid_Color }">
                            <div class="flex flex-wrap">
                                <div v-for="(color, index) in colors" :key="color.colorId">
                                    <base-color :color="color" @active-color="active($event, index)" />
                                </div>
                            </div>
                        </div>
                        <span v-if="invalid_Color" class="absolute p-3 font-mono text-red-500 left-7 -bottom-3 ">Please select product color</span>
                    </div>

                    <input @click="validating" type="submit" value="Add Product" class="absolute z-10 rounded shadow-md cursor-pointer btn bottom-4 right-4" />
                </div>

                <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Right ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

                <div>
                    <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
                        <label class="label-css" for="previewImage">Launch date *</label>
                        <input type="date" class="input-css" v-model="launchDate" required :class="{ 'ring ring-red-400': invalid_date }" />
                        <span v-if="invalid_date" class="absolute p-3 font-mono text-red-500 left-7 -bottom-1">Please input date</span>
                    </div>

                    <div class="px-3 mb-6 lg:w-full md:mb-0">
                        <label class="label-css">Warranty</label>
                        <div class="flex flex-col md:flex-row input-css">
                            <div class="flex items-center mr-7">
                                <input type="radio" id="0" name="warranty" v-model="warranty" value="0" class="w-4 h-5 mr-2" />
                                <label for="0">none</label>
                            </div>
                            <div class="flex items-center mr-7">
                                <input type="radio" id="1" name="warranty" v-model="warranty" value="1" class="w-4 h-5 mr-2" />
                                <label for="1">1 year</label>
                            </div>
                            <div class="flex items-center mr-7">
                                <input type="radio" id="2" name="warranty" v-model="warranty" value="2" class="w-4 h-5 mr-2" />
                                <label for="2">2 year</label>
                            </div>
                        </div>
                    </div>

                    <div class="px-3 mb-6 lg:w-full md:mb-0 relative" :class="{ hidden: activeClose }">
                        <label class="label-css" for="description">File *</label>
                        <input class="input-css" id="file" v-on:change="onFileChange($event)" type="file" :class="{ 'ring ring-red-400': invalid_img }" />
                        <span v-if="invalid_img" class="absolute p-3 font-mono text-red-500 left-7 -bottom-1 ">Please choose image</span>
                    </div>

                    <div class="px-3 mb-6 lg:w-full md:mb-0" :class="{ hidden: !activeClose }">
                        <label class="label-css" for="previewImage">Preview</label>
                        <div class="relative input-css">
                            <span class="absolute p-1 text-white bg-blue-700 rounded-full cursor-pointer material-icons top-2 right-2" @click="removeImage()">close</span>
                            <img :src="previewImage" alt="Preview Image" class="max-h-80" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div v-show="isLoad" class="h-screen w-full flex items-center justify-center">
        <i class="material-icons text-4xl animate-spin" v-show="isLoad"> autorenew </i>
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
            types: [],
            type: "",
            description: "",
            url: "http://localhost:9091/product",
            previewImage: null,
            activeClose: false,
            colors: [],
            colorsAdd: [],
            invalid_brand: false,
            invalid_name: false,
            invalid_price: false,
            invalid_type: false,
            invalid_Color: false,
            invalid_date: false,
            invalid_img: false,
            productIds: [],
            isLoad: Boolean,
        };
    },
    props: {
        itemId: Number,
    },
    methods: {
        validating() {
            this.invalid_brand = this.brandAdd === "" ? true : false;
            this.invalid_name = this.name === "" ? true : false;
            this.invalid_price = this.price === 0 ? true : false;
            this.invalid_type = this.type === "" ? true : false;
            this.invalid_Color = this.colorsAdd.length === 0 ? true : false;
            this.invalid_date = this.launchDate === "" ? true : false;
            this.invalid_img = this.previewImage === null ? true : false;
            setTimeout(() => {
                this.invalid_brand = false;
            }, 5000);
            setTimeout(() => {
                this.invalid_name = false;
            }, 5000);
            setTimeout(() => {
                this.invalid_price = false;
            }, 5000);
            setTimeout(() => {
                this.invalid_type = false;
            }, 5000);
            setTimeout(() => {
                this.invalid_Color = false;
            }, 5000);
            setTimeout(() => {
                this.invalid_date = false;
            }, 5000);
            setTimeout(() => {
                this.invalid_img = false;
            }, 5000);
        },

        submitForm() {
            if (this.brandAdd !== "" && this.name !== "" && this.price !== 0 && this.type !== "" && this.colorsAdd.length !== 0 && this.launchDate !== "" && this.previewImage !== null) {
                let newId =
                    this.productIds.sort((a, b) => {
                        if (a > b) return -1;
                        if (a < b) return 1;
                        return 0;
                    })[0] + 1;
                let Id = this.itemId ? this.itemId : newId;
                let body = JSON.stringify({
                    productId: Number(Id),
                    productName: this.name,
                    brand: this.brands.find((brand) => {
                        return brand.brandName == this.brandAdd;
                    }),
                    type: this.types.find((type) => {
                        return type.typeName == this.type;
                    }),
                    price: Number(this.price),
                    colors: this.colorsAdd,
                    description: this.description,
                    warranty: Number(this.warranty),
                    launchDate: this.launchDate,
                    imageUrl: "imageUrl.test",
                });
                if (this.itemId) {
                    this.editProduct(body);
                    setTimeout(() => {
                        this.restart();
                    }, 1000);
                    // this.$router.push("/");
                    // console.log(body);
                } else {
                    this.addProduct(body);
                    setTimeout(() => {
                        this.restart();
                    }, 1000);
                    // this.$router.push("/");
                    // console.log(body);
                }
            }
        },

        restart() {
            this.brandAdd = "";
            this.name = "";
            this.price = 0;
            this.warranty = 0;
            this.launchDate = "";
            this.type = "";
            this.description = "";
            this.colors.forEach((color) => (color["active"] = false));
            this.previewImage = null;
            this.activeClose = !this.activeClose;
        },

        addProduct(body) {
            fetch(`${this.url}/add`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: body,
            }).catch((error) => console.log(error));
        },
        editProduct(body) {
            fetch(`${this.url}/update`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: body,
            }).catch((error) => console.log(error));
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
            if (this.itemId != null) {
                fetch(`${this.url}/${this.itemId}`)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        this.brandAdd = data.brand.brandName;
                        this.type = data.type.typeName;
                        this.name = data.productName;
                        this.price = data.price;
                        this.description = data.description;
                        this.warranty = data.warranty;
                        this.launchDate = data.launchDate;
                        for (let i = 0; i < this.colors.length; i++) {
                            if (
                                data.colors.some((color) => {
                                    return color.colorId === this.colors[i].colorId;
                                })
                            ) {
                                this.active((this.colors[i].active = true), i);
                            }
                        }
                    })
                    .catch((error) => console.log(error));
            } else {
                this.restart();
                this.isLoad = false;
            }
        },
    },
    async created() {
        await fetch("http://localhost:9091/product/list")
            .then((res) => res.json())
            .then(
                (data) =>
                    (this.productIds = data.map((pid) => {
                        return pid.productId;
                    }))
            )
            .catch((error) => console.log(error));

        await fetch("http://localhost:9091/color/list")
            .then((res) => {
                this.isLoad = true;
                return res.json();
            })
            .then((data) => (this.colors = data))
            .then(() => {
                this.colors.forEach((color) => (color["active"] = false));
            })
            .catch((error) => console.log(error));

        await fetch("http://localhost:9091/brand/list")
            .then((res) => res.json())
            .then((data) => (this.brands = data))
            .catch((error) => console.log(error));

        await fetch("http://localhost:9091/type/list")
            .then((res) => {
                this.isLoad = false;
                return res.json();
            })
            .then((data) => (this.types = data))
            .catch((error) => console.log(error));

        await this.getDataToEdit();
    },
};
</script>

<style scoped>
.input-css {
    @apply w-full border border-gray-500 focus:outline-none rounded focus:bg-gray-50 dark:focus:bg-gray-500 py-3 px-5 mb-3 bg-gray-100 dark:bg-gray-600;
}

.label-css {
    @apply block uppercase tracking-wide text-xs font-bold mb-2;
}

.btn {
    @apply bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4;
}
</style>
