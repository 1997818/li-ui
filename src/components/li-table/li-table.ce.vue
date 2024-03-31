<script setup lang="tsx">
import { defineComponent, ref } from "vue";
import type { LiTableConfigItem } from "./li-table.config";
import { TableType } from "./li-table.config";

const props = defineProps<{
  tableConfig: LiTableConfigItem[];
  tableData: any[];
}>();
let indeterminate = ref(false);
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
      thDom = <li-check indeterminate={indeterminate.value}></li-check>;
      break;

    default:
      thDom = item.name;
      break;
  }
  return thDom;
};
let tableData = props.tableData;
</script>

<script lang="tsx">
export default defineComponent({
  data() {
    return { a: true };
  },
  mounted() {},
  methods: {
    changeRowCheck(val: boolean) {},
  },
});
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
          <tr v-for="(data, index) in props.tableData" :key="index">
            <td v-for="option in tableConfig" :key="option.key">
              <div class="center" :class="option.style">
                <li-check
                  v-if="option.type == TableType.Checked"
                  v-model="tableData[index].checked"
                  @change="changeRowCheck($event.detail[0])"
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
