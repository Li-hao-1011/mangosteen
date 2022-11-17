import { defineComponent } from "vue";
export const B = defineComponent({
  setup: (props, context) => {
    return () => <div>B</div>;
  },
});
