import { FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import icon from "../../assets/icons/cloud.svg";
import { RouterLink } from "vue-router";

export const Welcome4: FunctionalComponent = () => (
  <div class={s.card}>
    <img class={s.icon} src={icon} alt="" />
    <h2>
      云备份
      <br />
      再也不怕数据丢失
    </h2>
  </div>
);
Welcome4.displayName = "Welcome4";

export const Welcome4Action: FunctionalComponent = () => (
  <>
    <RouterLink class={s.actions_fake} to="/start">
      跳过
    </RouterLink>
    <RouterLink to="/start">开始记账</RouterLink>
    <RouterLink class={s.actions_fake} to="/start">
      跳过
    </RouterLink>
  </>
);
Welcome4Action.displayName = "Welcome4Action";
