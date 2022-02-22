<template>
  <div class="base-side-bar">
    <div class="logo-container">
      <BaseLogo size="140px"></BaseLogo>
    </div>
    <footer>
      <span>Copyright © 2022 Alienworm <a href="http://www.beian.miit.gov.cn/">闽ICP备17031496号</a></span>
      <span>Powered by <a href="https://webify.cloudbase.net/">CloudBase Webify</a></span>
    </footer>
  </div>
</template>

<script>
  import BaseLogo from "./BaseLogo";
  export default {
    name: "BaseSideBar",
    components: {BaseLogo}
  }
</script>

<style scoped lang="scss">
  .base-side-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    @include set_box_shadow('');
    @include set_background_color('card_color');
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 150px;
      @include set_background_color('button_color_1');
    }
    .logo-container {
      position: relative;
      top: 0;
      left: 0;
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    footer {
      position: absolute;
      bottom: 0;
      height: 80px;
      width: 100%;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 10px;
        right: 10px;
        height: 100%;
        @include set_top_divider();
      }
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      span {
        letter-spacing: 0;
        font-size: 12px;
        z-index: 2;
        a {
          letter-spacing: 0;
          @include set_text_color("button_color_1");
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }
</style>
