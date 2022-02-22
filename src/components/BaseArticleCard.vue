<template>
  <BaseCard  v-if="type === 'left'" class="base-article-card">
    <div class="blog-cover-image-container" style="margin: 20px 10px 20px 20px;">
      <div class="blog-cover-image-container-inner">
        <img :src="article.cover_image" :alt="article.title" />
      </div>
    </div>
    <div class="blog-infomation-container" style="margin: 20px 20px 20px 10px;">
      <div class="blog-title-container">
        <div class="blog-title"><span @click="go_to_article">{{article.title}}</span></div>
        <div class="blog-status">
          <span><font-awesome-icon :icon="['fa', 'clock']" /> 发布于 {{article.publish_time}}</span>
          <span><font-awesome-icon :icon="['fa', 'clock']" /> 更新于 {{article.update_time}}</span>
        </div>
      </div>
      <div class="blog-tag-container">
        <span class="blog-viwer-count"><font-awesome-icon :icon="['fa', 'eye']" /> {{article.viwer_count}} 次阅读</span>
        <div v-for="(tag, index) in article.tag_list" :key="index" :style="{backgroundColor: tag.color}" class="blog-tag">
          <span @click="searchArticle(tag.title)">{{tag.title}}</span>
        </div>
      </div>
      <div class="blog-preview-container">
        <span>{{article.abstract}}</span>
      </div>
      <div class="blog-browser-button-container">
        <span></span>
        <BaseButton @click.native="go_to_article">
          <span>查看全文 <font-awesome-icon :icon="['fa', 'long-arrow-alt-right']" /></span>
        </BaseButton>
      </div>
    </div>
  </BaseCard>
  <BaseCard v-else class="base-article-card">
    <div class="blog-infomation-container" style="margin: 20px 10px 20px 20px;">
      <div class="blog-title-container">
        <div class="blog-title"><span @click="go_to_article">{{article.title}}</span></div>
        <div class="blog-status">
          <span><font-awesome-icon :icon="['fa', 'clock']" /> 发布于 {{article.publish_time}}</span>
          <span><font-awesome-icon :icon="['fa', 'clock']" /> 更新于 {{article.update_time}}</span>
        </div>
      </div>
      <div class="blog-tag-container">
        <span class="blog-viwer-count"><font-awesome-icon :icon="['fa', 'eye']" /> {{article.viwer_count}} 次阅读</span>
        <div v-for="(tag, index) in article.tag_list" :key="index" :style="{backgroundColor: tag.color}" class="blog-tag">
          <span @click="searchArticle(tag.title)">{{tag.title}}</span>
        </div>
      </div>
      <div class="blog-preview-container">
        <span>{{article.abstract}}</span>
      </div>
      <div class="blog-browser-button-container">
        <span></span>
        <BaseButton @click.native="go_to_article">
          <span>查看全文 <font-awesome-icon :icon="['fa', 'long-arrow-alt-right']" /></span>
        </BaseButton>
      </div>
    </div>
    <div class="blog-cover-image-container" style="margin: 20px 20px 20px 10px;">
      <div class="blog-cover-image-container-inner">
        <img :src="article.cover_image" :alt="article.title" />
      </div>
    </div>
  </BaseCard>
</template>

<script>
  import BaseCard from "./BaseCard";
  import BaseButton from "./BaseButton";
  import eventBus from "../utils/event-bus";
  export default {
    name: "BaseArticleCard",
    components: {BaseButton, BaseCard},
    props: {
      type: String,
      article: Object
    },
    methods: {
      go_to_article() {
        this.$router.push({ name: 'Article', query: { article_id: this.article.id }});
      },
      searchArticle(keyword) {
        this.$router.push({ name: 'Search', query: { keyword: keyword, type: "tag" }});
        eventBus.$emit("SearchBlog", { keyword: keyword, type: "tag" });
        this.$toast({
          title: "成功",
          type: "success",
          content: "搜索成功"
        });
      },
    }
  }
</script>

<style scoped lang="scss">
 .base-article-card {
   /deep/ .base-card-container {
     display: flex;
     align-items: center;
     justify-content: space-between;
     .blog-cover-image-container {
       position: relative;
       width: 260px;
       height: 260px;
       border-radius: 10px;
       @include set_box_shadow('inset');
       @include set_background_color('background_color');
       .blog-cover-image-container-inner {
         position: absolute;
         top: 10px;
         left: 10px;
         right: 10px;
         bottom: 10px;
         border-radius: 5px;
         @include set_background_color('card_color');
         @include set_box_shadow('');
         display: flex;
         align-items: center;
         justify-content: center;
         overflow: hidden;
         img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           @include set_filter_shadow();
           transition: all 0.3s;
           cursor: pointer;
           &:hover {
             transform: scale(1.1);
           }
         }
       }
     }
     .blog-infomation-container {
       position: relative;
       width: calc(100% - 300px);
       height: calc(100% - 40px);
       display: flex;
       justify-content: space-between;
       flex-direction: column;
       .blog-title-container {
         position: relative;
         width: 100%;
         height: 40px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         .blog-title {
           position: relative;
           font-size: 32px;
           width: calc(100% - 110px);
           letter-spacing: 0.1rem;
           font-weight: bold;
           margin-right: 20px;
           text-overflow: ellipsis;
           overflow: hidden;
           white-space: nowrap;
           word-break: break-all;
           span {
             cursor: pointer;
           }
         }
         .blog-status {
           position: relative;
           font-size: 12px;
           font-weight: 400;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           span {
             display: inline-block;
             white-space: nowrap;
             letter-spacing: 0;
             @include set_text_color('text_color_2');
             svg {
               path {
                 @include set_fill_color('button_color_1');
               }
             }
           }
         }
       }
       .blog-tag-container {
         position: relative;
         width: 100%;
         height: 20px;
         display: flex;
         align-items: center;
         .blog-viwer-count {
           position: relative;
           margin-right: 20px;
           height: 20px;
           font-size: 12px;
           font-weight: 400;
           line-height: 20px;
           display: inline-block;
           white-space: nowrap;
           letter-spacing: 0;
           @include set_text_color('text_color_2');
           svg {
             path {
               @include set_fill_color('button_color_1');
             }
           }
         }
         .blog-tag {
           position: relative;
           margin-right: 20px;
           height: 20px;
           border-radius: 10px 5px 5px 10px;
           @include set_box_shadow('inset');
           padding: 0 5px 0 15px;
           display: flex;
           align-items: center;
           cursor: pointer;
           transition: all 0.3s;
           &:hover {
             filter: brightness(0.8);
           }
           span {
             font-size: 12px;
             letter-spacing: 0.1rem;
             filter: drop-shadow(2.5px 2.5px 5px rgba(0, 0, 0, 0.1));
             color: #FFFFFF;
           }
           &:before {
             content: '';
             position: absolute;
             left: 5px;
             top: calc(15px / 2);
             width: 5px;
             height: 5px;
             border-radius: 2.5px;
             @include set_box_shadow('');
             background-color: #FFFFFF;
           }
         }
       }
       .blog-preview-container {
         position: relative;
         width: 100%;
         height: 85px;
         display: flex;
         overflow: hidden;
         display: -webkit-box;
         -webkit-box-orient: vertical;
         -webkit-line-clamp: 3;
         span {
           font-size: 20px;
           font-weight: 300;
           @include set_text_color('text_color_3');
         }
       }
       .blog-browser-button-container {
         position: relative;
         padding-top: 20px;
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         @include set_top_divider();
         button {
           height: 30px;
           padding: 0 30px;
           border-radius: 20px;
           span {
             filter: drop-shadow(2.5px 2.5px 5px rgba(0, 0, 0, 0.1));
             @include set_text_color("text_color_1");
             svg {
               path {
                 @include set_background_color("text_color_1");
               }
             }
           }
         }
       }
     }
   }
 }
</style>
