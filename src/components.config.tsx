import { TableType, type LiTableConfigItem } from "./components/li-table/li-table.config";

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
    width: 250,
  },
  {
    name: "年龄",
    key: "age",
    width: 100,
    type: TableType.Sort,
  },
  {
    name: "性别",
    key: "sex",
    width: 100,
    type: TableType.Filter,
  },
];

let tableData: any[] = [
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    checked: true,
    age: 20,
    sex: "男",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    checked: false,
    age: 22,
    sex: "男",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    checked: false,
    age: 19,
    sex: "女",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    checked: false,
    age: 25,
    sex: "女",
  },
];
tableData = tableData.sort((a, b) => {
  return a.age - b.age;
});

const sortKey = {
  key: "age",
  order: "asc",
};
export const componentIllustrate: { [key: string]: ComponentIllustrate } = {
  LiCheckBox: {
    name: "复选框",
    info: "一组备选项中进行多选",
    instance: ()=>{return <li-check label="复选框A"></li-check>},
    code: '<li-check label="复选框A"></li-check>',
  },
  LiTable: {
    name: "表格",
    info: "用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。",
    instance: ()=>{return <li-table tableConfig={table} tableData={tableData}  sortKey={sortKey}></li-table>},
    code: `<li-table
    :tableConfig="table"
    :tableData="tableData"
    :sortKey="sortKey"
  ></li-table>`,
  },
};

interface ComponentIllustrate {
  name: string;
  info: string;
  instance: Function;
  code: string;
}
