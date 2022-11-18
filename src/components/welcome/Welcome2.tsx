import { defineComponent } from "vue";
import s from "./Welcome1.module.scss";
import icon from "../../assets/icons/clock.svg";
import { RouterLink } from "vue-router";
export const Welcome2 = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={icon} alt="" />
          <h2>
            每日提醒
            <br />
            不会遗漏每一步账单
          </h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/3">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
