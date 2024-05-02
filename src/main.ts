import { createApp } from "vue";
import liwz from "liwz-ui";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
app.use(liwz);
