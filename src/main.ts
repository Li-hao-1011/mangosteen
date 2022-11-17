import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { App } from "./App";
import { A } from "./views/A";
import { B } from "./views/B";

const routes = [
  { path: "/", component: A },
  { path: "/b", component: B },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
