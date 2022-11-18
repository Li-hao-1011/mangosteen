import { RouteRecordRaw } from "vue-router";
import { Welcome1, Welcome1Action } from "../components/welcome/Welcome1";
import { Welcome2, Welcome2Action } from "../components/welcome/Welcome2";
import { Welcome3, Welcome3Action } from "../components/welcome/Welcome3";
import { Welcome4, Welcome4Action } from "../components/welcome/Welcome4";
import { A } from "../views/A";
import { B } from "../views/B";
import { StartPage } from "../views/StartPage";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: A },
  { path: "/b", component: B },
  {
    path: "/welcome",
    redirect: "/welcome/1",
    component: Welcome,
    children: [
      {
        path: "1",
        components: { main: Welcome1, footer: Welcome1Action },
      },
      {
        path: "2",
        components: { main: Welcome2, footer: Welcome2Action },
      },
      {
        path: "3",
        components: { main: Welcome3, footer: Welcome3Action },
      },
      {
        path: "4",
        components: { main: Welcome4, footer: Welcome4Action },
      },
    ],
  },
  {
    path: "/start",
    component: StartPage,
  },
];
