import { defineComponent, PropType } from "vue";
import s from "./StartPage.module.scss";
export const StartPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <div class={s.wrapper}>StartPage</div>;
  },
});
