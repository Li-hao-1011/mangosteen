import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { App } from "./App";
import { routes } from "./config/routes";
import { history } from "./shared/history";

const router = createRouter({
  history,
  routes,
});
createApp(App).use(router).mount("#app");
