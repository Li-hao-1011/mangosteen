import { defineComponent } from "vue";

export const App = defineComponent({
  setup(props, ctx) {
    return () => <h1>Hi</h1>;
  },
});
