import { FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import icon from "../../assets/icons/clock.svg";
import { RouterLink } from "vue-router";

export const Welcome2: FunctionalComponent = () => (
  <div class={s.card}>
    <img class={s.icon} src={icon} alt="" />
    <h2>
      每日提醒
      <br />
      不会遗漏每一步账单
    </h2>
  </div>
);
Welcome2.displayName = "Welcome2";

export const Welcome2Action: FunctionalComponent = () => (
  <>
    <RouterLink class={s.actions_fake} to="/start">
      跳过
    </RouterLink>
    <RouterLink to="/welcome/3">下一页</RouterLink>
    <RouterLink to="/start">跳过</RouterLink>
  </>
);
Welcome2Action.displayName = "Welcome2Action";
