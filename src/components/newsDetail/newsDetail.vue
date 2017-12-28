<template>
  <transition name="newsDetail">
    <div id="newsDetail-wrapper" v-show="openPage">
      <topwrapper :number="detail.ratings.length"></topwrapper>
      <div class="newsDetail" ref="newsD">
        <div class="newsBox">
          <h2>{{detail.title}}</h2>
          <div class="info">
            <div class="fl">
              <img :src="detail.authorAvatar" class="authorPic" width="40" height="40">
              <div class="author">
                {{detail.author}}<small>{{detail.time}}</small>
              </div>
            </div>
            <div class="fr take">
              <i class="ion ion-android-add"></i>
              订阅
            </div>
          </div>
          <div class="content" v-html="detail.text">
            <!--<div v-for="item in content"><p v-if="!re.test(item)">{{item}}。</p><img v-if="re.test(item)" :src="item"> </div>-->
          </div>
          <div class="likes"><i class="ion ion-heart"></i>&nbsp;&nbsp;{{detail.textLike}}人喜欢</div>
        </div>
      </div>
      <input-box :number="detail.ratings.length" :showc="true"></input-box>
      <ratings :ratings="detail.ratings" ref="ratings"></ratings>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import ratings from '../newsratings/ratings.vue';
  import topwrapper from '../topWrapper/topWrapper.vue';
  import inputBox from '../inputBox/inputBox.vue';
  export default {
     components: {
       ratings,
       topwrapper,
       inputBox
     },
     props: {
        detail: {
          type: Object
        }
      },
     data () {
        return {
          xgtj: {},
          openPage: false
        };
      },
     created () {
//       dataBridge.$on('close', (data) => {
//         this.openPage = data;
//       });
       this.$axios.get('/api/newsAdd').then((res) => {
         res = res.data;
         if (res.errno === 0) {
           this.xgtj = res.data;
         }
       });
     },
      methods: {
        show () {
          this.openPage = true;
          this.$nextTick(() => {
            this._detail = new BScroll(this.$refs.newsD, {
              click: true
            });
          });
        }
      }
    };
</script>

<style lang="less">
#newsDetail-wrapper{ overflow: hidden; width: 100%; height: 100%; position: fixed; left: 0; top: 0; background-color: #fff; z-index: 9999; transition: 0.15s all;
  &.newsDetail-enter-active,&.newsDetail-leave-active{ transform: translate3d(0,0,0)}
  &.newsDetail-enter,&.newsDetail-leave-to{ transform: translate3d(100%,0,0)}
  .newsDetail{ overflow: hidden; position: fixed; left: 0; top: 2.5rem; bottom: 2.5rem; margin: 0 2%; width: 96%;
    .newsBox{ padding-bottom: 3rem;}
    h2{ font-size: 1rem; color: #000; margin: 1rem 0 1.5rem 0}
    .info{ overflow: hidden; width: 100%; margin-bottom: 1rem;
      img{ display: inline-block; border-radius: 50%; margin-right: 5px;}
      .author{ display: inline-block;  font-size: 0.8rem; color: #000; position: relative; top: -8px}
      small{ display: block; font-size: 0.5rem; color: rgba(0,0,0,0.5)}
      .take{ display: block; position: relative; top: 3px; width: 3rem; height: 1.5rem; border: 1px solid rgba(0,0,0,0.6); color: rgba(0,0,0,0.6); font-size: 0.5rem; border-radius: 1rem; text-align: center; line-height: 1.5rem;}
    }
    .content{ text-indent: 24px; font-size: 12px; line-height: 1.5rem; text-align: justify; margin-bottom: 3rem;
      p{ margin-bottom: 1rem;}
      img{ display: block; width: 100%; margin: 1rem 0;}
    }
    .likes{ margin: 0 auto; width: 50%; text-align: center; padding: 0 5%; height: 2rem; line-height: 2rem; background-color: #f33; color: #fff; font-size: 0.8rem; border-radius: 5px;}
  }
}
</style>
