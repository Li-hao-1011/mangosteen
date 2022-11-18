import { defineComponent } from "vue";
import s from "./Welcome1.module.scss";
import pig from "../../assets/icons/pig.svg";
import { RouterLink } from "vue-router";
export const Welcome1 = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={pig} alt="" />
          <h2>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/2">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
