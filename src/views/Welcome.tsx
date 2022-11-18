import { FunctionalComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/mangosteen.svg";
export const Welcome: FunctionalComponent = () => (
  <div class={s.wrapper}>
    <header class={s.header}>
      <img src={logo} />
      <h1>山竹记账</h1>
    </header>
    <div class={s.contaner}>
      <main class={s.main}>
        <RouterView name="main" />
      </main>
      <footer class={s.footer}>
        <RouterView name="footer" />
      </footer>
    </div>
  </div>
);

Welcome.displayName = "Welcome";
