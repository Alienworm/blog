<template>
  <div class="base-divider"></div>
</template>

<script>
  export default {
    name: "BaseDivider"
  }
</script>

<style scoped lang="scss">
 .base-divider {
   position: relative;
   left: 10px;
   width: calc(100% - 20px);
   border-top: dashed 2px;
   @include set_border_color("text_color_1");
   opacity: 0.2;
 }
</style>
