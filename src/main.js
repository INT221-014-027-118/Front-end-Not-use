import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseColor from './components/BaseColor.vue'
import ListItems from '@/components/ListItem.vue'
import Item from '@/components/Item.vue'

// createApp(App).use(router).mount('#app')

const app = createApp(App);

app.use(router);
app.component('list-items',ListItems)
app.component('base-color',BaseColor)
app.component('item',Item)
app.mount('#app')