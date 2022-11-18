import { FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import icon from "../../assets/icons/pig.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Welcome1: FunctionalComponent = () => (
  <WelcomeLayout>
    {{
      icon: () => <img class={s.icon} src={icon} alt="" />,
      title: () => (
        <h2>
          会挣钱
          <br />
          还要会省钱
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.actions_fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/2">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);
Welcome1.displayName = "Welcome1";
