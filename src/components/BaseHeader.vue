<template>
  <header>
    <div class="blog-logo" @click="goToHome">
      <img src="../assets/alien.png" alt="alien" />
    </div>
    <BaseButton class="theme-switch" @click.native="switchTheme">
      <span>
        <font-awesome-icon v-if="currentTheme === 'light'" :icon="['fas', 'moon']" />
        <font-awesome-icon v-else :icon="['fas', 'sun']" />
      </span>
    </BaseButton>
    <div class="search-continaer">
      <BaseInputField class="search-input" placeholder="请输入关键字" v-model="keyword"></BaseInputField>
      <BaseButton class="search-button" @click.native="searchArticle">
        <font-awesome-icon :icon="['fas', 'search']" />
      </BaseButton>
    </div>
  </header>
</template>

<script>
  import Vue from "vue";
  import BaseButton from "./BaseButton";
  import eventBus from "../utils/event-bus";
  import BaseInputField from "./BaseInputField";
  export default {
    name: "BaseHeader",
    components: {BaseInputField, BaseButton},
    data() {
      return {
        currentTheme: localStorage.getItem("theme"),
        keyword: "",
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
      searchArticle() {
        this.$router.push({ name: 'Search', query: { keyword: this.keyword, type: 'normal' }});
        eventBus.$emit("SearchBlog", { keyword: this.keyword, type: 'normal' });
        this.$toast({
          title: "成功",
          type: "success",
          content: "搜索成功"
        });
      },
      goToHome() {
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    @include set_background_color('card_color');
    @include set_box_shadow('');
    padding-left: 340px;
    padding-right: 40px;
    .blog-logo {
      position: absolute;
      top: 10px;
      left: 40px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      img {
        position: relative;
        width: 40px;
        height: 40px;
        @include set_filter_shadow();
        transition: all 0.3s;
        &:hover {
          filter: drop-shadow(2.5px 2.5px 5px rgba(0, 0, 0, 0.2));
          transform: scale(1.1);
        }
      }
    }
    .theme-switch {
      position: absolute;
      top: 10px;
      right: 40px;
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .search-continaer {
      position: absolute;
      top: 10px;
      right: 120px;
      width: 300px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /deep/ .base-input-field {
        label {
          input {
            width: 255px;
            height: 40px;
            border-radius: 20px 5px 5px 20px;
            @include set_background_color('background_color');
            @include set_box_shadow('inset');
          }
        }
      }
      .search-input {
        position: relative;
      }
      .search-button {
        position: relative;
        width: 40px;
        height: 100%;
        border-radius: 5px 20px 20px 5px;
        @include set_box_shadow('inset');
      }
    }
  }
</style>
