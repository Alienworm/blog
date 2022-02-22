<template>
  <div class="base-input-field">
    <label>
      <slot name="label"></slot>
      <input :type="type" :placeholder="placeholder" :value="value" @input="onInput"/>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInputField",
  props: {
    value: [String, Number],
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "请输入数据" },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.base-input-field {
  label {
    position: relative;
    span {
      position: relative;
      width: 100%;
      @include set_text_color('text_color_1');
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
    input {
      transition: all 0.3s;
      position: relative;
      width: 100%;
      height: 48px;
      padding: 0 16px;
      outline: none;
      border: none;
      font-weight: 400;
      border-radius: 8px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      @include set_text_color("text_color_1");
      @include set_background_color("background_color");
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
}

input::-webkit-input-placeholder {
  @include set_text_color("text_color_2");
}
</style>
