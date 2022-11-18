import { FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import icon from "../../assets/icons/chart.svg";
import { RouterLink } from "vue-router";

export const Welcome3: FunctionalComponent = () => (
  <div class={s.card}>
    <img class={s.icon} src={icon} alt="" />
    <h2>
      数据可视化
      <br />
      收支一目了然
    </h2>
  </div>
);
Welcome3.displayName = "Welcome3";

export const Welcome3Action: FunctionalComponent = () => (
  <>
    <RouterLink class={s.actions_fake} to="/start">
      跳过
    </RouterLink>
    <RouterLink to="/welcome/4">下一页</RouterLink>
    <RouterLink to="/start">跳过</RouterLink>
  </>
);
Welcome3Action.displayName = "Welcome3Action";
