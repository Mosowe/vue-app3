<template>
  <transition name="ratingsWrapper">
    <div class="ratingsWrapper" v-if="openPage">
      <topwrapper :showSelectMenu="false"></topwrapper>
      <div class="content" ref="contents">
        <ratings :ratings="ratings"></ratings>
      </div>
      <input-box></input-box>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import dataBridge from '../../common/js/dataBridge';
  import topwrapper from '../topWrapper/topWrapper.vue';
  import inputBox from '../inputBox/inputBox.vue';
  import ratings from '../ratings/ratings.vue';
  import BScroll from 'better-scroll';

  export default {
    components: {
      topwrapper,
      inputBox,
      ratings
    },
    props: {
        ratings: {}
      },
    data () {
        return {
          openPage: false
        };
      },
    created () {
      dataBridge.$on('open', (data) => {
        this.openPage = data;
        this.$nextTick(() => {
          this.rt = new BScroll(this.$refs.contents, {
            click: true
          });
        });
      });
    },
    methods: {
      dianzan (item) {
//        item.rateType += 1;
      }
    }
  };
</script>

<style lang="less">
  .ratingsWrapper{ overflow: hidden; transition: 0.15s all; position: fixed;; left: 0; top: 0; bottom: 0; z-index: 12; background-color: #fff; width: 100%;
    &.ratingsWrapper-enter-active,&.ratingsWrapper-leave-active{ transform: translate3d(0,0,0,)}
    &.ratingsWrapper-enter,&.ratingsWrapper-leave-to{ transform: translate3d(100%,0,0,)}
    .content{ overflow: hidden; width: 96%; padding: 2%; position: fixed; left: 0; top: 2.5rem; bottom: 2.5rem; }
  }

</style>
