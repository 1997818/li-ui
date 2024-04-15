export interface LiTableConfigItem {
  key: string; // 列的唯一标识
  name: string; // 列标题
  width: number; // 列宽
  type?: TableType; // 列功能类型
  scope?: boolean; // 插槽
  style?: TableStyle; // 列样式,默认居中
  show?: boolean; // 是否显示列
  info?: string; // 提示信息内容
  children?: LiTableConfigItem[];
}

export enum TableType {
  Sort = "sort",
  Select = "select",
  Checked = "checked",
  Filter = "filter",
  Custom = "custom",
  Unset = "unset",
}

export enum TableStyle {
  Center = "center",
  Left = "left",
  Right = "right",
}
