<template>
  <transition name="ratingsWrapper">
    <div class="ratingsWrapper" v-show="rateShow">
      <div class="title">热门跟帖</div>
      <ul class="rateBox">
        <li class="rateItem" v-for="item in ratings">
          <div class="userPic"><img :src="item.avatar"> </div>
          <div class="userContent">
            <div class="userInfo">
              <h4>{{item.username}}<small>{{item.rateTime}}</small></h4>
              <span>{{item.rateType}}<i class="ion ion-android-hand"></i></span>
            </div>
            <div class="userText">{{item.text}}</div>
          </div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        ratings: {
          type: Object
        }
      },
      data () {
        return {
          rateShow: false
        };
      },
      methods: {
        show () {
          this.rateShow = true;
        }
      }
    };
</script>

<style lang="less">
.ratingsWrapper{ overflow: hidden; transition: 0.15s all; position: fixed;; left: 0; top: 0; bottom: 0; z-index: 12; background-color: #fff; width: 100%;
  &.ratingsWrapper-enter-active,&.ratingsWrapper-leave-active{ transform: translate3d(0,0,0,)}
  &.ratingsWrapper-enter,&.ratingsWrapper-leave-to{ transform: translate3d(100%,0,0,)}
}
</style>
