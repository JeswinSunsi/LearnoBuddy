import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
