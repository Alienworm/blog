<template>
  <footer>
    <span>Copyright © 2022 Alienworm <a href="http://www.beian.miit.gov.cn/">闽ICP备17031496号</a></span>
    <span>Powered by <a href="https://webify.cloudbase.net/">CloudBase Webify</a></span>
  </footer>
</template>

<script>
  export default {
    name: "BaseFooter"
  }
</script>

<style scoped lang="scss">
  footer {
    position: relative;
    height: 80px;
    width: 100%;
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
</style>
