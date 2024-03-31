<template>
  <label>
    <span
      class="checkbox_input"
      :class="{
        is_checked: ckecked,
        is_indeterminate: props.indeterminate && !ckecked,
      }"
    >
      <span @click="chengeChecked" class="checkbox_inner"></span>
      <input type="checkbox" aria-hidden="false" />
    </span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{ indeterminate: boolean }>();
const ckecked = defineModel<string>();
const chengeChecked = () => {
  // ckecked.value = !ckecked.value;
};
</script>

<script lang="ts">
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$props);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
input {
  opacity: 0;
  outline: none;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
  z-index: -1;
}
.checkbox_input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
.is_checked,
.is_indeterminate {
  .checkbox_inner {
    background-color: #409eff;
    border-color: #409eff;
  }
}
.is_indeterminate {
  .checkbox_inner {
    &:before {
      content: "";
      position: absolute;
      display: block;
      background-color: #fff;
      height: 2px;
      transform: scale(0.5);
      left: 0;
      right: 0;
      top: 5px;
    }
  }
}
.is_checked {
  .checkbox_inner {
    &:after {
      transform: rotate(45deg) scaleY(1);
      box-sizing: content-box;
    }
  }
}
.checkbox_inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  &:after {
    transform: rotate(45deg) scaleY(1);
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform 0.15s ease-in 0.05s;
    transform-origin: center;
  }
}
</style>
