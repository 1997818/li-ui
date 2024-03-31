import { defineCustomElement } from "vue";
import LiTableEle from "./components/li-table/li-table.ce.vue";
import LiCheckboxEle from "./components/li-checkbox/li-checkbox.ce.vue";

export const LiTable = defineCustomElement(LiTableEle);
export const LiCheckbox = defineCustomElement(LiCheckboxEle);

export function register() {
  customElements.define("li-table", LiTable);
  customElements.define("li-checkbox", LiCheckbox);
}
