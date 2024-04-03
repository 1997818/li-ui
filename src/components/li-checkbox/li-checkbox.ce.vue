<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  indeterminate: boolean;
  checked: boolean;
  label: string;
}>();
const emits = defineEmits(["change"]);
let checkedRef = ref(props.checked);

let indeterminate = props.indeterminate;
const chengeChecked = () => {
  checkedRef.value = !checkedRef.value;
  emits("change", checkedRef);
};
defineExpose({
  checkedRef,
});
</script>

<template>
  <label
    class="li-checkbox"
    :class="{
      is_checked: checkedRef,
      is_indeterminate: indeterminate && !checkedRef,
    }"
  >
    <span class="checkbox_input">
      <span @click="chengeChecked" class="checkbox_inner"></span>
      <input type="checkbox" aria-hidden="false" />
    </span>
    <span
      v-if="props.label"
      class="checkbox_label"
      :class="{ is_checked: checkedRef || indeterminate }"
      >{{ props.label }}</span
    >
  </label>
</template>

<style lang="scss" src="./li-checkbox.scss" scoped></style>
