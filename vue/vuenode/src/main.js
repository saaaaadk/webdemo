import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router.js";
import index from "@/store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let app = createApp(App)

app.use(router).use(index).use(ElementPlus)
app.mount('#app')

