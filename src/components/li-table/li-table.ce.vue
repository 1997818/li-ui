<script setup lang="tsx">
import { defineEmits, ref, reactive, render, createVNode } from "vue";
import type { LiTableConfigItem } from "./li-table.config";
import { TableType } from "./li-table.config";
import liSelect from "../li-select/li-select.ce.vue";

const liSelectVNode = createVNode(liSelect);
const props = defineProps<{
  tableConfig: LiTableConfigItem[];
  tableData: any[];
  sortKey: {
    key: string;
    order: "desc" | "asc";
  };
}>();
let sortKey = ref(props.sortKey);

const emits = defineEmits(["changeRowCheck", "sortCheck"]);
let allChecked = ref(
  props.tableData.length
    ? props.tableData.every((item) => item.checked === true)
    : false
); // 全选
let indeterminate = ref(
  props.tableData.some((item) => item.checked === true && !allChecked.value)
); // 半选
let checkedRow: Array<boolean | "disable"> = reactive(
  props.tableData.map((item) => item.checked)
);

const Colgroup = () => {
  return (
    <colgroup>
      {props.tableConfig.map((item) => {
        return <col width={item.width} />;
      })}
    </colgroup>
  );
};
// 表头th渲染
const thEle = (props: { item: LiTableConfigItem }) => {
  const { item } = props;
  let thDom: any;
  switch (item.type) {
    case TableType.Checked:
      thDom = (
        <li-check
          onChange={setAllRowCheck}
          checked={allChecked}
          indeterminate={indeterminate.value}
        ></li-check>
      );
      break;
    case TableType.Sort:
      thDom = (
        <div onClick={() => changeSort(item)}>
          {item.name}
          <span class={"caret-wrapper"}>
            <i
              class={
                sortKey.value.key == item.key && sortKey.value.order == "asc"
                  ? "sort-caret ascending ascending-active"
                  : "sort-caret ascending"
              }
            ></i>
            <i
              class={
                sortKey.value.key == item.key && sortKey.value.order == "desc"
                  ? "sort-caret descending descending-active"
                  : "sort-caret descending"
              }
            ></i>
          </span>
        </div>
      );
      break;
    case TableType.Filter:
      thDom = (
        <div onClick={($event) => openSelect($event)}>
          {item.name}
          <span class={"caret-wrapper"}>
            <i class={"select sort-caret descending"}></i>
          </span>
        </div>
      );
      break;
    default:
      thDom = item.name;
      break;
  }
  return thDom;
};
let tableData = props.tableData;
const changeRowCheck = (val: boolean, i: number) => {
  checkedRow[i] = val;
  const tableData = props.tableData.map((item, i) => {
    item.checked = checkedRow[i];
    return item;
  });

  const isAllChecked = checkedRow.every((item) => item);
  const unChecked = checkedRow.every((item) => !item);
  const someChecked = checkedRow.some((item) => item);
  // 是否全选
  if (isAllChecked) {
    allChecked.value = true;
  }
  // 是否全不选
  if (unChecked) {
    allChecked.value = false;
  }
  // 是否半选
  if (someChecked && !isAllChecked) {
    allChecked.value = false;
    indeterminate.value = true;
  }
  emits("changeRowCheck", tableData);
};

const setAllRowCheck = () => {
  !allChecked.value;
  indeterminate.value = false;
  checkedRow.forEach((item, i) => {
    if (item != "disable") {
      checkedRow[i] = allChecked.value;
    }
  });
  const tableData = props.tableData.map((item, i) => {
    item.checked = checkedRow[i];
    return item;
  });
  emits("changeRowCheck", tableData);
};

const changeSort = (val: LiTableConfigItem) => {
  if (sortKey.value.key == val.key) {
    sortKey.value.order = sortKey.value.order == "asc" ? "desc" : "asc";
  } else {
    sortKey.value.key = val.key;
    sortKey.value.order = "desc";
  }
  emits("sortCheck", { key: sortKey.value.key, order: sortKey.value.order });
};

const openSelect = (val: any) => {
  const clickX = val.clientX;
  const clickY = val.clientY;
  const clickPageX = val.pageX;
  const clickPageY = val.pageY;
  liSelectVNode.props = { clickX, clickY };
  const container = document.createElement("div");
  render(liSelectVNode, container);
};
</script>

<script lang="tsx">
export default {};
</script>

<template>
  <div class="li-table">
    <div class="li-table-heard">
      <table cellspacing="0" cellpadding="0" border="0" class="table">
        <Colgroup></Colgroup>
        <thead>
          <tr>
            <th v-for="item in tableConfig" :key="item.key">
              <div class="center" :class="item.style">
                <thEle :item="item"></thEle>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="li-table-body">
      <table cellspacing="0" cellpadding="0" border="0" class="table">
        <Colgroup></Colgroup>
        <tbody>
          <tr v-for="(data, index) in tableData" :key="index">
            <td v-for="option in tableConfig" :key="option.key">
              <div class="center" :class="option.style">
                <li-check
                  v-if="option.type == TableType.Checked"
                  :checked="checkedRow[index]"
                  @change="changeRowCheck($event.detail[0], index)"
                >
                </li-check>
                <template v-else>
                  {{ data[option.key] }}
                </template>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" src="./li-table.scss"></style>
