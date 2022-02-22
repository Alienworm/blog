<template>
  <div class="base-logo" :style="{width: size, height: size, borderRadius: size}">
    <div class="base-logo-inner" :style="{width: 'calc(' + size + ' - 20px)', height: 'calc(' + size + ' - 20px)', borderRadius: 'calc(' + size + ' - 20px)'}">
      <img src="../assets/alien.png" alt="alien" />
    </div>
    <h1 :style="{top: 'calc(' + size + ' * 1.5 + 20px)'}">Alienworm</h1>
  </div>
</template>

<script>
  export default {
    name: "BaseLogo",
    props: { size: String },
  }
</script>

<style scoped lang="scss">
  .base-logo {
    @include set_background_color('background_color');
    @include set_box_shadow('inset');
    display: flex;
    align-items: center;
    justify-content: center;
    .base-logo-inner {
      @include set_background_color('card_color');
      @include set_box_shadow('');
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        position: relative;
        width: 80px;
        height: 80px;
        @include set_filter_shadow();
      }
    }
    h1 {
      position: absolute;
    }
  }
</style>
