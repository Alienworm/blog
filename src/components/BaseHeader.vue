<template>
  <header>
    <BaseButton class="theme" @click.native="switchTheme">
        <span>
          <font-awesome-icon v-if="currentTheme === 'light'" :icon="['fas', 'moon']" />
          <font-awesome-icon v-else :icon="['fas', 'sun']" />
        </span>
    </BaseButton>
    <div class="title">Alienworm</div>
  </header>
</template>

<script>
  import Vue from "vue";
  import BaseButton from "./BaseButton";
  import eventBus from "../utils/event-bus";
  export default {
    name: "BaseHeader",
    components: {BaseButton},
    data() {
      return {
        currentTheme: localStorage.getItem("theme"),
      }
    },
    methods: {
      // 主题切换
      switchTheme() {
        this.currentTheme = this.currentTheme === "light" ? "dark": "light";
        localStorage.setItem("theme", this.currentTheme);
        Vue.prototype.switchTheme(this.currentTheme);
        eventBus.$emit("themeChange", this.currentTheme);
      },
    }
  }
</script>

<style scoped lang="scss">
 header {
   position: fixed;
   top: 0;
   left: 0;
   padding-left: 320px;
   padding-right: 20px;
   width: 100vw;
   height: 60px;
   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
   @include set_background_color('card_color');
   display: flex;
   align-items: center;
   button {
     padding: 0;
     width: 30px;
     height: 30px;
     border-radius: 15px;
     margin-right: 20px;
   }
   .title {
     font-weight: bold;
   }
 }
</style>
