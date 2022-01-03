<template>
  <div id="side-bar">
    <div class="user-avatar-container">
      <div class="user-avatar">
        <div class="avatar">
          <img src="../assets/images/alien.png" alt="logo"/>
        </div>
      </div>
      <BaseDivider></BaseDivider>
    </div>
    <footer>
      <BaseDivider></BaseDivider>
      <div class="blog-info">
        <a href="http://www.beian.miit.gov.cn/">闽ICP备17031496号<br></a>
        <span>Powered by <a href="https://webify.cloudbase.net/" class="height-light">CloudBase</a></span>
      </div>
    </footer>
  </div>
</template>

<script>
  import BaseDivider from "./BaseDivider";
  export default {
    name: "SideBar",
    components: {BaseDivider}
  }
</script>

<style scoped lang="scss">
  #side-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    @include set_background_color('card_color');
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
    .user-avatar-container {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      .user-avatar {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        .avatar {
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 60px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          &:before {
            content: "";
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            border-radius: 50px;
            @include set_background_color('background_color');
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
          }
          img {
            position: relative;
            width: 80px;
            height: 80px;
            transition: all 0.3s;
            &:hover {
              cursor: pointer;
              filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.1));
            }
          }
        }
      }
    }
    footer {
      position: absolute;
      height: 60px;
      width: 100%;
      bottom: 0;
      .blog-info {
        position: absolute;
        top: 0;
        left: 10px;
        height: 60px;
        right: 10px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        span, a {
          font-size: 6px;
          font-weight: normal;
          text-decoration: none;
          text-align: center;
          @include set_text_color("text_color_2");
          .height-light {
            font-weight: bold;
            @include set_text_color("button_color_1");
            text-decoration: none;
          }
        }
        a:hover {
          transition: all 0.3s;
          @include set_text_color("button_color_1");
        }
      }
    }
  }
</style>
