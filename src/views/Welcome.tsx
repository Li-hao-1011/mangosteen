import { FunctionalComponent, Transition, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/mangosteen.svg";
export const Welcome: FunctionalComponent = () => (
  <div class={s.wrapper}>
    <header class={s.header}>
      <img src={logo} />
      <h1>山竹记账</h1>
    </header>
    <main class={s.main}>
      <RouterView name="main">
        {({
          Component: X,
          route: R,
        }: {
          Component: VNode;
          route: RouteLocationNormalizedLoaded;
        }) => {
          console.log("route", R);
          return (
            <Transition
              enterFromClass={s.slide_fade_enter_from}
              enterActiveClass={s.slide_fade_enter_active}
              leaveToClass={s.slide_fade_leave_to}
              leaveActiveClass={s.slide_fade_leave_active}
            >
              {X}
            </Transition>
          );
        }}
      </RouterView>
    </main>
    <footer class={s.footer}>
      <RouterView name="footer" />
    </footer>
  </div>
);

Welcome.displayName = "Welcome";
