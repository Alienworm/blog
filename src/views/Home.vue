<template>
  <div class="home">
    <BaseHeader></BaseHeader>
    <BaseSideBar></BaseSideBar>
    <div class="home-container">
      <div class="mostly-customized-scrollbar">
        <BaseArticleCard v-for="(article, index) in articleList" :key="index" :article="article" :type="index % 2 === 0 ? 'left' : 'right'"></BaseArticleCard>
      </div>
    </div>
    <BaseLoading ref="Loading" size="128"></BaseLoading>
  </div>
</template>

<script>
  import BaseSideBar from "../components/BaseSideBar";
  import BaseHeader from "../components/BaseHeader";
  import BaseArticleCard from "../components/BaseArticleCard";
  import eventBus from "../utils/event-bus";
  import { getArticleList } from "../api/blog";
  import BaseLoading from "../components/BaseLoading";
  import {gsap} from "gsap/all";
  export default {
    name: "Home",
    components: {BaseLoading, BaseArticleCard, BaseHeader, BaseSideBar},
    data() {
      return {
        articleList: [],
        searchContent: '',
        timeLine: gsap.timeline(),
      }
    },
    mounted() {
      this.getBlogList();
      this.$nextTick(() => {
        eventBus.$emit("SearchBlog", {keyword: '', type: 'normal'});
      });
    },
    methods: {
      async getBlogList() {
        eventBus.$on("SearchBlog", async (data) => {
          this.$refs.Loading.startLoading();
          this.articleList = [];
          setTimeout(async () => {
            if (data !== '') {
              const result = await getArticleList({"page": 1, "page_size": 5, keyword: data.keyword, type: data.type});
              this.articleList = result['article_list'];
            } else {
              const result = await getArticleList({"page": 1, "page_size": 5, keyword: '', type: data.type});
              this.articleList = result['article_list'];
            }
            this.$refs.Loading.stopLoading();
            this.timeLine.add(
              gsap.fromTo(this.$el.getElementsByClassName("base-side-bar")[0], { x: "-50%", autoAlpha: 0}, { x: 0, autoAlpha: 1})
            ).add(
              gsap.fromTo(this.$el.getElementsByTagName("header")[0], { y: "-100%", autoAlpha: 0}, { y: 0, autoAlpha: 1})
            ).add(
              gsap.fromTo(this.$el.getElementsByClassName("home-container")[0], { autoAlpha: 0}, { autoAlpha: 1})
            );
          }, 0);
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    header {
      z-index: 2;
    }
    .base-side-bar {
      z-index: 3;
    }
    .home-container {
      position: absolute;
      left: 300px;
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
        padding: 40px;
        .base-article-card {
          position: relative;
          height: 300px;
          width: 100%;
          margin-bottom: 40px;
        }
        :nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
