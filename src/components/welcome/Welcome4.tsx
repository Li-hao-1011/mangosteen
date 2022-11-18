import { defineComponent } from "vue";
import s from "./Welcome1.module.scss";
import icon from "../../assets/icons/cloud.svg";
import { RouterLink } from "vue-router";
export const Welcome4 = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={icon} alt="" />
          <h2>
            云备份
            <br />
            再也不怕数据丢失
          </h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/start">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
