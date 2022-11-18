import { defineComponent, FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import icon from "../../assets/icons/chart.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Welcome3: FunctionalComponent = () => (
  <WelcomeLayout>
    {{
      icon: () => <img class={s.icon} src={icon} alt="" />,
      title: () => (
        <h2>
          数据可视化
          <br />
          收支一目了然
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/4">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);
Welcome3.displayName = "Welcome3";
