<template>
  <div class="base-card">
    <header v-if="withHeader">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <ul>
        <slot name="button-list"></slot>
      </ul>
    </header>
    <div class="base-card-container" :style="{height: withHeader ? 'calc(100% - 56px)' : '100%'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: { withHeader: { type: Boolean, default: false }, },
};
</script>

<style scoped lang="scss">
.base-card {
  header {
    position: relative;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      @include set_text_color("text_color_1");
      svg {
        margin-right: 8px;
      }
      span {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
    ul {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      button {
        position: relative;
        height: 32px;
        font-size: 0.8rem;
        padding: 0 24px;
        margin-left: 16px;
        border-radius: 16px;
      }
      .base-input-field {
        position: relative;
        margin-left: 16px;
        span {
          height: 0;
          margin: 0;
          padding: 0;
        }
        input {
          position: relative;
          height: 32px;
          @include set_background_color("card_color");
        }
      }
    }
  }
  .base-card-container {
    position: relative;
    width: 100%;
    border-radius: 8px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
    @include set_background_color("card_color");
    overflow: hidden;
  }
}
</style>
