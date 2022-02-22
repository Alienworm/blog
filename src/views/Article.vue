<template>
  <div class="article">
    <BaseHeader></BaseHeader>
    <div class="article-container">
      <div class="mostly-customized-scrollbar">
        <div class="article-title-container">
          <div class="article-title">{{article.title}} {{article.title}} {{article.title}}</div>
        </div>
        <div class="article-information-container">
          <div class="article-information">
            <div class="article-information-inner">
              <span><font-awesome-icon :icon="['fa', 'clock']" /> 发布于 {{article.publish_time}}</span>
              <span><font-awesome-icon :icon="['fa', 'clock']" /> 更新于 {{article.update_time}}</span>
              <span><font-awesome-icon :icon="['fa', 'eye']" /> {{article.viwer_count}} 次阅读</span>
            </div>
          </div>
        </div>
        <mavon-editor v-model="article.content"
                      :navigation="false"
                      :editable="false"
                      :subfield="false"
                      :toolbarsFlag="false"
                      defaultOpen="preview"
                      boxShadowStyle="2.5px 2.5px 5px rgba(0, 0, 0, 0.1)"
                      ref=md
        />
        <BaseFooter></BaseFooter>
      </div>
    </div>
    <div class="go-to-top-button" @click="goToTop">
      <svg width="40" height="85" viewBox="0 0 40 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :style="{opacity: hoverRocket ? 1 : 0, transition: 'all 0.2s'}" d="M16.8888 83C17.5388 82.2461 18.1256 81.4535 18.6456 80.6574C19.4975 82.1242 20.5538 83.6121 21.75 85C24.8206 81.4387 27 76.7984 27 74C27 69.0293 23.8659 65 20 65C16.1341 65 13 69.0293 13 74C13 76.0809 14.6244 80.3727 16.8888 83V83ZM17.4972 69.6934C18.1741 69.1012 19.0087 68.75 19.9106 68.75C22.1653 68.75 24 70.6148 24 73.6426C24 75.1508 23.2403 76.4797 21.7253 78.75C21.5088 78.4383 18.6369 73.8539 18.6369 73.8539L16.8047 76.4664C16.6753 76.1988 16.5575 75.9371 16.4525 75.6863C15.5978 73.6477 15.9584 71.0391 17.4972 69.6934V69.6934Z" fill="black"/>
        <path @mouseover="() => {hoverRocket = true;}"
              @mouseout="() => {hoverRocket = false;}"
              d="M15.7361 4.58671C14.3604 7.76758 13.5714 12.0216 13.5714 16.2581L13.5714 43.9038C12.9862 44.3831 12.502 44.9282 12.1429 45.5219L12.1429 25.5484C9.4417 39.759 0 40.7029 0 52.6449L0 52.6452H11.4286V54.1935H0C0 56.759 2.55839 58.8387 5.71429 58.8387H11.4286C11.4286 61.0836 12.3243 61.9355 13.5714 61.9355H17.1429C18.3913 61.9355 19.2857 61.082 19.2857 58.8387H20.7143C20.7143 61.0836 21.61 61.9355 22.8571 61.9355H26.4286C27.6771 61.9355 28.5714 61.082 28.5714 58.8387H34.2857C37.4416 58.8387 40 56.759 40 54.1935H28.5714V52.6452H40V52.6449C40 40.7029 30.5583 39.759 27.8571 25.5484V45.522C27.498 44.9283 27.0138 44.3832 26.4286 43.9039L26.4286 16.2581C26.4286 12.0216 25.6396 7.76758 24.2639 4.58671C23.0219 1.71464 21.4279 -9.53674e-07 20 -9.53674e-07C18.5721 -9.53674e-07 16.9781 1.71464 15.7361 4.58671ZM23.5714 14.7097C23.5714 14.915 23.4962 15.1119 23.3622 15.2571C23.2283 15.4023 23.0466 15.4839 22.8571 15.4839H17.1429C16.9534 15.4839 16.7717 15.4023 16.6378 15.2571C16.5038 15.1119 16.4286 14.915 16.4286 14.7097C16.4286 11.6217 23.5714 11.6185 23.5714 14.7097Z" fill="black"/>
      </svg>
    </div>
    <BaseLoading ref="Loading" size="128"></BaseLoading>
  </div>
</template>

<script>
  import BaseHeader from "../components/BaseHeader";
  import { getArticle } from "../api/blog";
  import BaseLoading from "../components/BaseLoading";
  import {gsap} from "gsap/all";
  import BaseFooter from "../components/BaseFooter";
  export default {
    name: "Article",
    components: {BaseFooter, BaseLoading, BaseHeader},
    data() {
      return {
        currentTheme: localStorage.getItem("theme"),
        article_id: this.$route.query.article_id,
        article: {},
        articleContainerDiv: {},
        timeLine: gsap.timeline(),
        hoverRocket: true
      }
    },
    async mounted() {
      await this.getArticle();
      this.$nextTick(() => {
        this.articleContainerDiv = this.$el.getElementsByClassName("mostly-customized-scrollbar")[0];
        if ((this.articleContainerDiv.scrollHeight > this.articleContainerDiv.clientHeight) || (this.articleContainerDiv.offsetHeight > this.articleContainerDiv.clientHeight))
          this.hasScrollbar = true;
      });
    },
    methods: {
      async getArticle() {
        this.$refs.Loading.startLoading();
        setTimeout(async () => {
          const result = await getArticle({"article_id": this.article_id});
          this.article = result['article'];
          this.$refs.Loading.stopLoading();
          this.timeLine.add(
            gsap.fromTo(this.$el.getElementsByTagName("header")[0], { y: "-100%", autoAlpha: 0}, { y: 0, autoAlpha: 1})
          ).add(
            gsap.fromTo(this.$el.getElementsByClassName("article-container")[0], { autoAlpha: 0}, { autoAlpha: 1})
          ).add(
            gsap.fromTo(this.$el.getElementsByClassName("go-to-top-button")[0],
              { y: "100%", autoAlpha: 0},
              { y: 0, autoAlpha: 1}).eventCallback("onComplete", () => { this.hoverRocket = false; })
          );
        }, 0);
      },
      goToTop() {
        const currentY = this.articleContainerDiv.scrollTop;
        this.scrollAnimation(currentY, 0)
      },
      scrollAnimation(currentY, targetY) {
        let needScrollTop = targetY - currentY;
        let _currentY = currentY;
        setTimeout(() => {
          // 一次调用滑动帧数，每次调用会不一样
          const dist = Math.ceil(needScrollTop / 10);
          _currentY += dist;
          this.articleContainerDiv.scrollTo(_currentY, currentY)
          // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
          if (needScrollTop > 10 || needScrollTop < -10)
            this.scrollAnimation(_currentY, targetY);
          else
            this.articleContainerDiv.scrollTo(_currentY, targetY);
        }, 10)
      }
    }
  }
</script>

<style scoped lang="scss">
 .article {
   position: relative;
   width: 100vw;
   min-height: 100vh;
   header {
     z-index: 2;
   }
   .article-container {
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

       padding-top: 40px;

       /deep/ .markdown-body {
         max-width: 800px !important;
         margin: 0 auto;
         @include set_background_color('card_color');
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

       .article-title-container {
         position: relative;
         font-size: 32px;
         font-weight: bold;
         min-height: 32px;
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         .article-title {
           position: relative;
           width: 800px;
           word-break: break-word;
           text-align: center;
         }
         margin-bottom: 40px;
       }
       .article-information-container {
         position: relative;
         height: 16px;
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         .article-information {
           position: relative;
           width: 800px;
           font-size: 12px;
           font-weight: 400;
           display: flex;
           align-items: center;
           justify-content: center;
           .article-information-inner {
             @include set_top_divider();
             span {
               margin: 20px;
               display: inline-block;
               white-space: nowrap;
               letter-spacing: 0;
               @include set_text_color('text_color_2');
               svg {
                 position: relative;
                 path {
                   @include set_fill_color('button_color_1');
                 }
               }
             }
           }
         }
         margin-bottom: 20px;
       }
     }
   }
   .go-to-top-button {
     position: fixed;
     bottom: 40px;
     right: 40px;
     font-size: 40px;
     z-index: 999;
     @include set_filter_shadow();
     svg {
       cursor: pointer;
       path {
         @include set_fill_color('button_color_1');
       }
       &:hover {
         animation: floating 2s linear infinite;
         filter: drop-shadow(2.5px 2.5px 5px rgba(0, 0, 0, 0.2));
       }
     }
   }
 }

 @keyframes floating {
   0% {
     transform: translateY(0);
   }
   25% {
     transform: translateY(-5px);
   }
   50% {
     transform: translateY(0);
   }
   75% {
     transform: translateY(5px);
   }
   100% {
     transform: translateY(0px);
   }
 }
</style>
