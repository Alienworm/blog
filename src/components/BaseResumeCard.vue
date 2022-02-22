<template>
  <div class="base-resume-card">
    <div class="base-resume-card-header">
      <span><font-awesome-icon :icon="titleIcon" /> {{ title }}</span>
    </div>
    <div class="base-resume-card-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseResumeCard",
    props: {
      title: String,
      titleIcon: String,
    }
  }
</script>

<style scoped lang="scss">
  .base-resume-card {
    margin-bottom: 40px;
    .base-resume-card-header {
      position: relative;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 20px 20px 5px 5px;
      @include set_background_color('card_color');
      @include set_box_shadow('');
      span {
        font-size: 20px;
        line-height: 20px;
        svg {
          path {
            @include set_fill_color('button_color_1');
          }
        }
      }
      margin-bottom: 10px;
    }
    .base-resume-card-container {
      position: relative;
      width: 100%;
      min-height: 40px;
      padding: 10px;
      border-radius: 5px 5px 20px 20px;
      @include set_background_color('card_color');
      @include set_box_shadow('');
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 794px) {
    .base-resume-card {
      margin-bottom: 20px;
      .base-resume-card-header {
        position: relative;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 10px 10px 2.5px 2.5px;
        @include set_background_color('card_color');
        @include set_box_shadow('');
        span {
          font-size: 16px;
          line-height: 30px;
          svg {
            path {
              @include set_fill_color('button_color_1');
            }
          }
        }
        margin-bottom: 10px;
      }
      .base-resume-card-container {
        position: relative;
        width: 100%;
        min-height: 40px;
        padding: 10px;
        border-radius: 2.5px 2.5px 10px 10px;
        @include set_background_color('card_color');
        @include set_box_shadow('');
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
