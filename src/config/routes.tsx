import { RouteRecordRaw } from "vue-router";
import { Welcome1 } from "../components/welcome/Welcome1";
import { Welcome2 } from "../components/welcome/Welcome2";
import { Welcome3 } from "../components/welcome/Welcome3";
import { Welcome4 } from "../components/welcome/Welcome4";
import { A } from "../views/A";
import { B } from "../views/B";
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
        component: Welcome1,
      },
      {
        path: "2",
        component: Welcome2,
      },
      {
        path: "3",
        component: Welcome3,
      },
      {
        path: "4",
        component: Welcome4,
      },
    ],
  },
];
