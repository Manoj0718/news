import {
    createApp
} from "vue";
import App from "./App.vue";
import "./tailwind.css";
import store from "./store";
import router from "./router";
import PhosphorVue from "phosphor-vue";



createApp(App).use(router).use(store).use(PhosphorVue).mount("#app");