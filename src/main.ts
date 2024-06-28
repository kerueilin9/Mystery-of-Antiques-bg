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
  NMessageProvider,
  NSpace,
  NRadio,
  NRadioGroup,
  useMessage,
} from "naive-ui";

const naive = create({
  components: [
    NButton,
    NModal,
    NInput,
    NCard,
    NFormItem,
    NForm,
    NSelect,
    NMessageProvider,
    NSpace,
    NRadio,
    NRadioGroup,
    useMessage,
  ],
});

const app = createApp(App);
app.use(naive);
app.use(router);
app.mount("#app");
