import type { PluginOption } from "vite";
import fs from "fs";
import path from "path";
export default function vitePluginTemplate(): PluginOption {
  return {
    // 插件名称
    name: "vite-plugin-vue-cvue",
    apply: "serve",
    enforce: "pre",
    handleHotUpdate({ file, server }) {
      // 打印更新的文件路径
      // console.log(`File ${file} has been updated`);
    },

    async transform(code, id) {
      // console.log(RegExp.apply() id.r());
      // const reg = /.*\/src\/components\/.*li-/;

      // // console.log(reg.test("C:/Users/13243/Desktop/src/components/li-xxx.vue"));
      // console.log(id);

      // if (reg.test(id)) {
      //   console.log(reg.test(id));
      //   const ceVueFilePath = id.replace(".ts", ".ce.vue");
      //   fs.writeFileSync(ceVueFilePath, "");
      // }

      // 只处理 src 目录下的文件
      // if (id.includes("/src/")) {
      //   // 如果是文件夹
      //   if (fs.statSync(id).isDirectory()) {
      //     // 获取文件夹下的文件列表
      //     const files = fs.readdirSync(id);
      //     console.log(files);

      //     // for (const file of files) {
      //     //   // 如果文件夹下有文件夹,则创建 .ce.vue 文件
      //     //   const filePath = path.join(id, file);
      //     //   if (fs.statSync(filePath).isDirectory()) {
      //     //     const ceVueFilePath = path.join(filePath, `123.ce.vue`);
      //     //     if (!fs.existsSync(ceVueFilePath)) {
      //     //       fs.writeFileSync(ceVueFilePath, "");
      //     //     }
      //     //   }
      //     // }
      //   }
      // }
      return null; // 返回 null 表示不修改源代码
    },
  };
}
