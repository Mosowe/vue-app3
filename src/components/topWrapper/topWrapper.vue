<template>
  <div id="topwrapper">
    <i class="ion ion-chevron-left fl backpage" @click.prevent="backPage"></i>
    <div class="fr">
      <span class="rateTotal" @click="ratingsShow" v-if="number">{{number}}跟帖</span>
      <i class="ion ion-more more" @click="moreShow = !moreShow" v-if="showSelectMenu"></i>
      <transition name="moreWrapper">
        <div class="moreWrapper" v-show="moreShow" @click.stop="moreShow = !moreShow" v-if="showSelectMenu">
          <div class="content" @click.stop="">
            <span class="moreItem"><i class="ion ion-android-star-outline"></i>收藏</span>
            <span class="moreItem"><i class="ion ion-document"></i>正文字号</span>
            <span class="moreItem"><i class="ion ion-android-share-alt"></i>分享</span>
            <span class="moreItem"><i class="ion ion-ios-moon-outline"></i>夜间模式</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import dataBridge from '../../common/js/dataBridge';
  export default {
    props: {
      number: {
        type: Number,
        default: 0
      },
      showSelectMenu: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        moreShow: false
      };
    },
    methods: {
      backPage () {
        this.$parent.openPage = false;
//        dataBridge.$emit('close', false);
      },
      ratingsShow () {
        dataBridge.$emit('open', true);
      }
    }
  };
</script>

<style lang="less">
  #topwrapper{ width: 100%; padding: 0 5%; height: 2.5rem;border-bottom: 1px solid rgba(0,0,0,0.1); box-sizing: border-box;
    .backpage{ width: 2rem; height: 2.5rem; line-height: 2.5rem; font-size: 18px; position: relative; z-index: 11}
    .rateTotal{ border-radius: 2px; display: inline-block;padding: 0 5px; height: 1.5rem; margin-top: 0.5rem; background-color: #f33; line-height: 1.5rem; font-size: 0.5rem; color: #fff}
    .more{ margin-left: 5px; width: 1.5rem; height: 1.5rem; text-align: right; line-height: 1.5rem; font-size: 18px;}
    .moreWrapper{ transition: 0.15s all; overflow: hidden; width: 100%; z-index: 10; position: fixed; left: 0; top: 0; height: 100%;
      &.moreWrapper-enter-active,&.moreWrapper-leave-active{ transform: translate3d(0,0,0)}
      &.moreWrapper-enter,&.moreWrapper-leave-to{ transform: translate3d(100%,0,0)}
      .content{ overflow: hidden; width: 40%;padding: 1rem 0; background-color: #fff; box-shadow: 0 0 3px rgba(0,0,0,0.1); position: absolute; right: 0; top: 2.5rem;}
      .moreItem{ display: block; width: 90%; padding-left: 10%; font-size: 0.6rem; line-height: 2rem;}
      .ion{ margin-right: 5px;}
    }
  }

</style>
