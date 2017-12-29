<template>
    <div id="moreBox" @click.stop="" >
      <i class="ion ion-more more" @click="moreToggle"></i>
      <div class="bg" v-show="moreShow" @click="moreToggle"></div>
      <transition name="moreWrapper">
          <div class="moreWrapper" id="moreWrapper" v-show="moreShow">
            <span class="moreItem" v-for="item in selectMenu"><i class="ion" :class="item.icon"></i>{{item.text}}</span>
          </div>
      </transition>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      selectMenu: {
        type: Array,
        default: null
      }
    },
    data () {
      return {
        moreShow: false
      };
    },
    created () {
    },
    computed: {
    },
    methods: {
      moreToggle () {
        const mbox = document.getElementById('moreBox');
        const box = document.getElementById('moreWrapper');
        const boxHeigth = window.getComputedStyle(box).height;
        let MboxHeight = mbox.offsetHeight;
        let mtop = mbox.offsetTop;
        if (boxHeigth > mtop) {
          box.style.top = (mtop + MboxHeight) + 'px';
        } else {
          box.style.top = (mtop - boxHeigth) + 'px';
        }
        this.moreShow = !this.moreShow;
      }
    }
  };
</script>

<style lang="less">
#moreBox{ display: inline-block; width: 18px; height: 100%;
  .bg{ overflow: hidden; width: 100%; height: 100%; position: fixed; left: 0; top: 0; z-index: 12;  }
  .more{ transform: rotate(90deg); vertical-align: middle; color: rgba(0,0,0,0.6); font-size: 18px;}
  .moreWrapper{width: 40%; transition: 0.15s all;padding: 1rem 0; background-color: #fff; box-shadow: 0 0 3px rgba(0,0,0,0.1); overflow: hidden; z-index: 13; position:fixed; right: 0;
    &.moreWrapper-enter-active,&.moreWrapper-leave-active{ transform: translate3d(0,0,0)}
    &.moreWrapper-enter,&.moreWrapper-leave-to{ transform: translate3d(100%,0,0)}
    .moreItem{ display: block; width: 90%; padding-left: 10%; font-size: 0.6rem; line-height: 2rem;}
    .ion{ margin-right: 5px;}
  }
}
</style>
