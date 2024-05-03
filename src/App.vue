<script setup lang="tsx">
import { register } from "./index";
import { componentIllustrate } from "./components.config";
import { ref } from "vue";
register();

let componentKey = ref("LiCheckBox");
const switchCom = (val: string) => {
  componentKey.value = val;
  instance = componentIllustrate[componentKey.value]?.instance();
};
let instance = componentIllustrate[componentKey.value]?.instance();
</script>

<template>
  <div class="container">
    <nav class="sidebar">
      <ul>
        <li
          class="tab-item"
          @click="switchCom('LiCheckBox')"
          :class="{ active: componentKey == 'LiCheckBox' }"
        >
          复选框
        </li>
        <li
          class="tab-item"
          :class="{ active: componentKey == 'LiTable' }"
          @click="switchCom('LiTable')"
        >
          表格
        </li>
        <li class="tab-item">其他</li>
      </ul>
    </nav>
    <main class="content">
      <h1>{{ componentIllustrate[componentKey]?.name }}</h1>
      <p>{{ componentIllustrate[componentKey]?.info }}</p>
      <div>
        <div>
          <instance />
        </div>
        <code>
          {{ componentIllustrate[componentKey]?.code }}
        </code>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  flex: 0 0 200px;
  background-color: #f8f9fa;
  padding: 10px 0;
  overflow-y: auto;
  .tab-item {
    width: 100%;
    height: 36px;
    background: #1989fa;
    text-align: center;
    margin-bottom: 10px;
    line-height: 36px;
    opacity: 0.5;
    color: #fff;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.sidebar li a:hover {
  background-color: #ddd;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
