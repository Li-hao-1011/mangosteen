import { defineComponent, FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import icon from "../../assets/icons/clock.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Welcome2: FunctionalComponent = () => (
  <WelcomeLayout>
    {{
      icon: () => <img class={s.icon} src={icon} alt="" />,
      title: () => (
        <h2>
          每日提醒
          <br />
          不会遗漏每一步账单
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/3">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);
Welcome2.displayName = "Welcome2";
