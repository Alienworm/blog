<template>
  <transition name="toast" appear>
    <BaseCard class="base-toast" v-show="isShow">
      <div v-if="type === 'normal'" class="normal">
        <font-awesome-icon :icon="['fas', 'info-circle']" /> {{title}}
      </div>
      <div v-if="type === 'success'" class="success">
        <font-awesome-icon :icon="['fas', 'check-circle']" /> {{title}}
      </div>
      <div v-if="type === 'warring'" class="warring">
        <font-awesome-icon :icon="['fas', 'exclamation-triangle']" /> {{title}}
      </div>
      <div v-if="type === 'error'" class="error">
        <font-awesome-icon :icon="['fas', 'exclamation-circle']" /> {{title}}
      </div>
      <p v-if="content !== ''">{{content}}</p>
    </BaseCard>
  </transition>
</template>

<script>
import BaseCard from "../BaseCard";
export default {
  name: "BaseToast",
  components: { BaseCard },
};
</script>

<style scoped lang="scss">
.base-toast {
  position: relative;
  top: 16px;
  left: calc(100vw - 320px - 16px);
  margin-bottom: 16px;
  width: 320px;
  min-height: 48px;
  box-shadow: rgba(0, 0, 0, 0.2);
  div {
    position: relative;
    height: 48px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    font-weight: 500;
  }
  .normal {
    svg {
      path {
        @include set_fill_color("text_color_1");
      }
    }
  }
  .success {
    svg {
      path {
        @include set_fill_color("button_color_1");
      }
    }
  }
  .warring {
    svg {
      path {
        @include set_fill_color("warring_color");
      }
    }
  }
  .error {
    svg {
      path {
        @include set_fill_color("error_color");
      }
    }
  }
  p {
    position: relative;
    line-height: 32px;
    @include set_text_color('text_color_2');
    padding: 0 16px 16px 40px;
  }
}

.toast-enter-active {
  animation: toast 0.3s forwards ease;
}
.toast-leave-active {
  animation: toast 0.3s forwards ease reverse;
}

@keyframes toast {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
