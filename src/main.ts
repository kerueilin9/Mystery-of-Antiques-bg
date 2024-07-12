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
  NForm,
  NFormItem,
  NFormItemRow,
  NFormItemCol,
  NSelect,
  NMessageProvider,
  NSpace,
  NRadio,
  NRadioGroup,
  NGi,
  NGrid,
  NCheckbox,
  NCheckboxGroup,
  NIcon,
  NTab,
  NTabs,
  NTabPane,
  NDivider,
  useMessage,
} from "naive-ui";

const naive = create({
  components: [
    NButton,
    NModal,
    NInput,
    NCard,
    NForm,
    NFormItem,
    NFormItemRow,
    NFormItemCol,
    NSelect,
    NMessageProvider,
    NSpace,
    NRadio,
    NRadioGroup,
    NGi,
    NCheckbox,
    NCheckboxGroup,
    NGrid,
    NIcon,
    NTab,
    NTabs,
    NTabPane,
    NDivider,
    useMessage,
  ],
});

const app = createApp(App);
app.use(naive);
app.use(router);
app.mount("#app");
