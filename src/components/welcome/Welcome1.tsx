import { FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import icon from "../../assets/icons/pig.svg";
import { RouterLink } from "vue-router";

export const Welcome1: FunctionalComponent = () => (
  <div class={s.card}>
    <img class={s.icon} src={icon} alt="" />
    <h2>
      会挣钱
      <br />
      还要会省钱
    </h2>
  </div>
);
Welcome1.displayName = "Welcome1";

export const Welcome1Action: FunctionalComponent = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to="/start">
      跳过
    </RouterLink>
    <RouterLink to="/welcome/2">下一页</RouterLink>
    <RouterLink to="/start">跳过</RouterLink>
  </div>
);
Welcome1Action.displayName = "Welcome1Action";
