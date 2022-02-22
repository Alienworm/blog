import Vue from "vue";
import BaseToast from "./BaseToast.vue";

const BaseToastConstructor = Vue.extend(BaseToast);

function showBaseToast ({ title, content = "", type = "normal", duration = 5000 }) {
  const baseToastDom = new BaseToastConstructor({
    el: document.createElement("div"),
    data () {
      return {
        isShow: true,
        title: title,
        content: content,
        type: type,
      };
    },
  });
  // 添加节点
  document.getElementsByClassName("toast-area")[0].appendChild(baseToastDom.$el);
  // 过渡时间
  setTimeout(() => {
    baseToastDom.isShow = false
  }, duration);
}

function registryBaseToast () {
  Vue.prototype.$toast = showBaseToast;
}

export default registryBaseToast;
