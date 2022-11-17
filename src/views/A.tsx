import { defineComponent } from "vue";

export const A = defineComponent({
  setup(props, ctx) {
    return () => <h1>A</h1>;
  },
});
