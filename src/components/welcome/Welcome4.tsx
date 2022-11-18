import { defineComponent, FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import icon from "../../assets/icons/cloud.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Welcome4: FunctionalComponent = () => (
  <WelcomeLayout>
    {{
      icon: () => <img class={s.icon} src={icon} alt="" />,
      title: () => (
        <h2>
          云备份
          <br />
          再也不怕数据丢失
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/start">完成</RouterLink>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);
Welcome4.displayName = "Welcome4";
