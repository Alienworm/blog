<template>
  <button :style="{backgroundColor: color}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["color", "textColor"]
};
</script>

<style scoped lang="scss">
button {
  transition: all 0.2s;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  @include set_background_color("button_color_1");
  &:hover {
    filter: brightness(0.8);
  }
  span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    @include set_text_color("card_color");
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  input {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}
</style>
