import { defineComponent } from "vue";
import { RouterView } from "vue-router";
export const Welcome = defineComponent({
  setup: () => {
    return () => <RouterView></RouterView>;
  },
});
