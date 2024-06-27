import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "./style.css";
import {
  create,
  NButton,
  NModal,
  NInput,
  NCard,
  NFormItem,
  NForm,
  NSelect,
} from "naive-ui";

const naive = create({
  components: [NButton, NModal, NInput, NCard, NFormItem, NForm, NSelect],
});

const app = createApp(App);
app.use(naive);
app.use(router);
app.mount("#app");
// createApp(App).use(router).mount("#app");
