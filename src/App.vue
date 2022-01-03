<template>
  <div id="app" class="invisible-scrollbar">
    <BaseHeader></BaseHeader>
    <SideBar></SideBar>
  </div>
</template>

<script>
  import SideBar from "./components/SideBar";
  import BaseHeader from "./components/BaseHeader";
  export default {
    name: 'App',
    components: {BaseHeader, SideBar},
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica sans-serif;
    letter-spacing: 0.15rem;
    @include set_text_color('text_color_1');
  }

  body {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    @include set_background_color('background_color');
  }

  .visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {
    display: block;
    width: 10px;
    height: 10px;
    overflow: auto;
  }
  .invisible-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Demonstrate a "mostly customized" scrollbar
   * (won't be visible otherwise if width/height is specified) */
  .mostly-customized-scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    @include set_background_color('background_color');
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  /* Add a thumb */
  .mostly-customized-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 5px;
    @include set_background_color('button_color_1');
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    border: 2.5px solid transparent;
    background-clip: padding-box;
  }

  .mostly-customized-scrollbar::-webkit-scrollbar-corner {
    @include set_background_color('background_color');
  }
</style>
