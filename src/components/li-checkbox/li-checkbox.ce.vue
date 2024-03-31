<template>
  <label
    class="li-checkbox"
    :class="{
      is_checked: checked,
      is_indeterminate: indeterminate && !checked,
    }"
  >
    <span class="checkbox_input">
      <span @click="chengeChecked" class="checkbox_inner"></span>
      <input type="checkbox" aria-hidden="false" />
    </span>
    <span
      v-if="props.label"
      class="checkbox_label"
      :class="{ is_checked: checked || indeterminate }"
      >{{ props.label }}</span
    >
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  indeterminate: boolean;
  checked: boolean;
  label: string;
}>();
</script>

<script lang="ts">
export default {
  data() {
    const { checked, indeterminate } = this.$props;
    return {
      checked,
      indeterminate,
    };
  },
  mounted() {},
  methods: {
    chengeChecked() {
      this.checked = !this.checked;
      this.$emit("change", this.checked);
    },
  },
};
</script>

<style lang="scss" src="./li-checkbox.scss" scoped></style>
