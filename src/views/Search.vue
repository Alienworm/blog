<template>
  <div class="search">
    <BaseHeader></BaseHeader>
    <div class="search-container">
      <div class="mostly-customized-scrollbar">
        <BaseArticleCard v-for="(article, index) in articleList" :key="index" :article="article" :type="index % 2 === 0 ? 'left' : 'right'"></BaseArticleCard>
        <BaseFooter></BaseFooter>
      </div>
    </div>
    <BaseLoading ref="Loading" size="128"></BaseLoading>
  </div>
</template>

<script>
  import BaseHeader from "../components/BaseHeader";
  import BaseLoading from "../components/BaseLoading";
  import BaseArticleCard from "../components/BaseArticleCard";
  import {gsap} from "gsap/all";
  import eventBus from "../utils/event-bus";
  import {getArticleList} from "../api/blog";
  import BaseFooter from "../components/BaseFooter";
  export default {
    name: "SearchResult",
    components: {BaseFooter, BaseArticleCard, BaseLoading, BaseHeader},
    data() {
      return {
        articleList: [],
        query: this.$route.query,
        timeLine: gsap.timeline(),
      }
    },
    mounted() {
      this.getBlogList();
      this.$nextTick(() => {
        eventBus.$emit("SearchBlog", this.query);
      });
    },
    methods: {
      async getBlogList() {
        eventBus.$on("SearchBlog", async (data) => {
          this.$refs.Loading.startLoading();
          this.articleList = [];
          if (data !== '') {
            const result = await getArticleList({"page": 1, "page_size": 5, keyword: data.keyword, type: data.type});
            this.articleList = result['article_list'];
          } else {
            const result = await getArticleList({"page": 1, "page_size": 5, keyword: '', type: data.type});
            this.articleList = result['article_list'];
          }
          this.$refs.Loading.stopLoading();
          this.timeLine.add(
            gsap.fromTo(this.$el.getElementsByTagName("header")[0], { y: "-100%", autoAlpha: 0}, { y: 0, autoAlpha: 1})
          ).add(
            gsap.fromTo(this.$el.getElementsByClassName("search-container")[0], { autoAlpha: 0}, { autoAlpha: 1})
          );
        });
      },
    }
  }
</script>

<style scoped lang="scss">
  .search {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    header {
      z-index: 2;
    }
    .search-container {
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
        .base-article-card {
          position: relative;
          height: 300px;
          width: 100%;
          margin-bottom: 40px;
        }
        :nth-last-child(2) {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
