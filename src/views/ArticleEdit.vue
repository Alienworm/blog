<template>
  <div class="article-edit">
    <BaseHeader></BaseHeader>
    <div class="article-edit-container">
      <div class="mostly-customized-scrollbar">
        <mavon-editor v-model="article.content" :fullscreen="false" boxShadowStyle="2.5px 2.5px 5px rgba(0, 0, 0, 0.1)"/>
        <BaseFooter></BaseFooter>
      </div>
    </div>
    <BaseLoading ref="Loading" size="128"></BaseLoading>
  </div>
</template>

<script>
  import BaseHeader from "../components/BaseHeader";
  import BaseLoading from "../components/BaseLoading";
  import BaseFooter from "../components/BaseFooter";

  export default {
    name: "ArticleEdit",
    components: {BaseFooter, BaseLoading, BaseHeader},
    data() {
      return {
        currentTheme: localStorage.getItem("theme"),
        article: {content: ''},
      }
    },
    mounted() {
      this.$refs.Loading.stopLoading();
    }
  }
</script>

<style scoped lang="scss">
  .article-edit {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    header {
      z-index: 2;
    }
    .article-edit-container {
      z-index: 1;
      position: absolute;
      left: 0;
      right: 0;
      top: 60px;
      min-height: calc(100vh - 60px);
      .mostly-customized-scrollbar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 60px);
        overflow-x: hidden;

        padding: 40px 40px 0 40px;

        /deep/ .markdown-body {
          margin: 0 auto;
          min-height: calc(100vh - 180px);
          @include set_background_color('card_color');
          .selected {
            @include set_background_color('background_color');
            @include set_box_shadow('inset')
          }
          .v-note-op {
            @include set_background_color('card_color');
            @include set_bottom_divider();
          }
          .v-note-panel {
            .v-note-show {
              border-left:  dashed 2px rgba(0, 0, 0, 0.3);
            }
            .v-note-edit {
              overflow-y: hidden;
              .content-input-wrapper {
                @include set_background_color('card_color');
                textarea {
                  @include set_background_color('card_color');
                }
              }
            }
          }
        }
        /deep/ .v-show-content {
          @include set_background_color('card_color');
          padding: 20px !important;
          border-radius: 20px;
          pre {
            border-radius: 5px;
            @include set_box_shadow('inset');
            @include set_background_color('background_color');
            padding: 10px !important;
            .hljs {
              border-radius: 2.5px;
              padding: 5px;
              @include set_box_shadow('');
              @include set_background_color('card_color');
            }
          }
        }
      }
    }
  }
</style>
