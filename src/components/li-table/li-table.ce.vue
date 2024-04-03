<script setup lang="tsx">
import { defineEmits, type Ref, ref, reactive, onMounted, toRefs } from "vue";
import { getCurrentInstance } from "vue";

import type { LiTableConfigItem } from "./li-table.config";
import { TableType } from "./li-table.config";

const props = defineProps<{
  tableConfig: LiTableConfigItem[];
  tableData: any[];
}>();

const emits = defineEmits(["changeRowCheck"]);
let allChecked = ref(props.tableData.every((item) => item.checked === true)); // 全选
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

    default:
      thDom = item.name;
      break;
  }
  return thDom;
};
let tableData = props.tableData;
const checkedRefs = ref<any>([]);
const changeRowCheck = (val: boolean, i: number) => {
  checkedRow[i] = val;
  const tableData = props.tableData.map((item, i) => {
    item.checked = checkedRow[i];
    return item;
  });

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
                  ref="checkedRefs"
                  v-if="option.type == TableType.Checked"
                  :checked="checkedRow[index]"
                  @change="changeRowCheck($event.detail[0], index)"
                >
                </li-check>
                <template v-else> {{ data[option.key] }}</template>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="sass" src="./li-table.scss" scoped></style>
