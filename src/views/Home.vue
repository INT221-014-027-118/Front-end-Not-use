<template>
    <div class="flex flex-col sm:h-screen justify-center my-20 sm:my-20 md:m-0">
        <div class="w-4/5 mx-auto">
            <div class="flex flex-col items-stretch md:flex-row">
                <item-type
                    v-for="type in types"
                    :key="type.typeId"
                    :type="type"
                    :forTest="
                        itemType[
                            itemType.findIndex((item) => {
                                return item.itmeName === type.typeName;
                            })
                        ]
                    "
                ></item-type>
            </div>
        </div>
        <div class="mx-auto max-w-5xl grid my-5 md:mt-16 gap-9 grid-cols-1 md:grid-cols-2">
            <router-link
                to="/form"
                class="px-9 py-4 ring-2 flex items-center ring-offset-2 ring-green-500 ring-offset-green-500 rounded-lg shadow-2xl bg-green-100 dark:bg-green-900 hover:bg-green-200 transition duration-200 transform dark:hover:bg-green-700"
            >
                <div>
                    <span class="material-icons pr-2">
                        add
                    </span>
                </div>
                Add Product
                
            </router-link>
            <router-link
                to="/products"
                class="px-9 py-4 ring-2 flex items-center ring-offset-2 ring-blue-500 ring-offset-blue-500 rounded-lg shadow-2xl bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 transition duration-200 transform dark:hover:bg-blue-700"
                ><div>
                    <span class="material-icons pr-2">
                        list
                    </span>
                </div>
                All Products
            </router-link>
        </div>
    </div>
</template>

<script>
import ItemType from "@/components/ItemType.vue";
import headset from "@/assets/headset.svg";
import keyboard from "@/assets/keyboard.svg";
import mouse from "@/assets/mouse.svg";

export default {
    name: "Home",
    components: {
        ItemType,
    },
    data() {
        return {
            itemType: [
                {
                    itmeName: "headset",
                    image: headset,
                    icon: "headset_mic",
                },
                {
                    itmeName: "keyboard",
                    image: keyboard,
                    icon: "keyboard",
                },
                {
                    itmeName: "mouse",
                    image: mouse,
                    icon: "mouse",
                },
            ],

            types: [],
        };
    },
    methods: {
        async getType() {
            await fetch("http://localhost:9091/type/list")
                .then((res) => res.json())
                .then((data) => {
                    this.types = data;
                })
                .catch((error) => console.log(error));
        },
    },
    async created() {
        await this.getType();
    },
};
</script>
