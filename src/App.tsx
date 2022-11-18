import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "./App.scss";

export const App = defineComponent({
  setup(props, ctx) {
    return () => (
      <div class="page">
        <RouterView />
      </div>
    );
  },
});
