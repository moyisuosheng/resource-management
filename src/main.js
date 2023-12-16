import { createApp } from "vue";
import App from "./App.vue";
/**
 * 引入router
 */
import router from "./router";

import "./style.css";

createApp(App)
/**
 * 在整个应用中使用router
 */
.use(router)
.mount("#app");
