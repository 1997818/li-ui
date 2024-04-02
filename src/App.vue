<script setup lang="ts">
import {
  type LiTableConfigItem,
  TableType,
  TableStyle,
} from "./components/li-table/li-table.config";
import { register } from "./index";

register();
const table: LiTableConfigItem[] = [
  {
    name: "",
    key: "check",
    type: TableType.Checked,
    width: 50,
  },
  {
    name: "日期",
    key: "date",
    width: 100,
  },
  {
    name: "姓名",
    key: "name",
    width: 100,
  },
  {
    name: "地址",
    key: "address",
    width: 200,
  },
];
const tableData: any[] = [
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    checked: true,
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    checked: false,
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    checked: false,
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    checked: false,
  },
];
</script>

<script lang="ts">
export default {
  data() {},
  methods: {
    changeRowCheck(val: any) {},
  },
};
</script>

<template>
  <div>
    <li-table
      :tableConfig="table"
      :tableData="tableData"
      @changeRowCheck="changeRowCheck($event.detail[0])"
    ></li-table>
    <li-check label="复选框A"></li-check>
  </div>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
