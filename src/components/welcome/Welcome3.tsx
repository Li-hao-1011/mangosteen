import { defineComponent } from "vue";
import s from "./Welcome1.module.scss";
import icon from "../../assets/icons/chart.svg";
import { RouterLink } from "vue-router";
export const Welcome3 = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={icon} alt="" />
          <h2>
            数据可视化
            <br />
            收支一目了然
          </h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/4">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
