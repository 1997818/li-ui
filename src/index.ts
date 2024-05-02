import { defineCustomElement, type App } from "vue";
import LiTableEle from "./components/li-table/li-table.ce.vue";
import LiCheckboxEle from "./components/li-checkbox/li-checkbox.ce.vue";

const LiTable = defineCustomElement(LiTableEle);
const LiCheckbox = defineCustomElement(LiCheckboxEle);

export function register() {
  customElements.define("li-table", LiTable);
  customElements.define("li-check", LiCheckbox);
}

export default {
  install(app: App) {
    register();
  },
};
