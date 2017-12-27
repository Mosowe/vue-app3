<template>
  <transition name="newsDetail">
    <div id="newsDetail-wrapper" v-show="showDel">
      <div id="topwrapper">
        <i class="ion ion-chevron-left fl backpage" @click="backPage"></i>
        <div class="fr">
          <span class="rateTotal" @click="ratingsShow">{{detail.authorTake}}跟帖</span>
          <i class="ion ion-more more" @click="moreShow = !moreShow"></i>
          <transition name="moreWrapper">
            <div class="moreWrapper" v-show="moreShow" @click.stop="moreShow = !moreShow">
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
          <div class="content">
            <div v-for="item in content"><p v-if="!re.test(item)">{{item}}。</p><img v-if="re.test(item)" :src="item"> </div>
          </div>
          <div class="likes"><i class="ion ion-heart"></i>&nbsp;&nbsp;{{detail.textLike}}人喜欢</div>
        </div>
      </div>
      <ratings :ratings="detail.ratings" ref="ratings"></ratings>
      <div class="writeRate"  >
        <label class="writebox">
          <i class="ion ion-ios-compose-outline"></i>
          <input type="text" placeholder="写跟帖"/>
        </label>
        <div class="smaill rt"><i class="ion ion-happy-outline"></i></div>
        <div class="rate"><i class="ion ion-chatbox-working"></i><em>{{detail.rateTotal}}</em></div>
        <div class="take rt"><i class="ion ion-android-star-outline"></i></div>
        <div class="share rt"><i class="ion ion-android-share-alt"></i></div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import ratings from '../ratings/ratings.vue';
   export default {
     components: {
       ratings
     },
      props: {
        detail: {
          type: Object
        }
      },
      data () {
        return {
          xgtj: {},
          showDel: false,
          moreShow: false,
          re: /^http/   // 判断text中是否有图片链接
        };
      },
     created () {
       this.$axios.get('/api/newsAdd').then((res) => {
         res = res.data;
         if (res.errno === 0) {
           this.xgtj = res.data;
         }
       });
     },
      methods: {
        show () {
          this.showDel = true;
          this.$nextTick(() => {
            this._detail = new BScroll(this.$refs.newsD, {
              click: true
            });
          });
        },
        backPage () {
          this.showDel = false;
          this.moreShow = false;
        },
        ratingsShow () {
          this.$refs.ratings.show();
        }
      },
      computed: {
        content () {
          const text = (this.detail.text || '').split('\n');
          return text;
        }
      }
    };
</script>

<style lang="less">
#topwrapper{ width: 90%; padding: 0 5%; height: 2.5rem;border-bottom: 1px solid rgba(0,0,0,0.1);
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
#newsDetail-wrapper{ overflow: hidden; width: 100%; height: 100%; position: fixed; left: 0; top: 0; background-color: #fff; z-index: 9999; transition: 0.15s all;
  &.newsDetail-enter-active,&.newsDetail-leave-active{ transform: translate3d(0,0,0)}
  &.newsDetail-enter,&.newsDetail-leave-to{ transform: translate3d(100%,0,0)}
  .newsDetail{ overflow: hidden; position: fixed; left: 0; top: 2.5rem; bottom: 2.5rem; padding: 0 1rem;
    .newsBox{ padding-bottom: 3rem;}
    h2{ font-size: 1rem; color: #000; margin: 1rem 0 1.5rem 0}
    .info{ overflow: hidden; width: 100%; margin-bottom: 1rem;
      img{ display: inline-block; border-radius: 50%; margin-right: 5px;}
      .author{ display: inline-block;  font-size: 0.8rem; color: #000; position: relative; top: -8px}
      small{ display: block; font-size: 0.5rem; color: rgba(0,0,0,0.5)}
      .take{ display: block; position: relative; top: 3px; width: 3rem; height: 1.5rem; border: 1px solid rgba(0,0,0,0.6); color: rgba(0,0,0,0.6); font-size: 0.5rem; border-radius: 1rem; text-align: center; line-height: 1.5rem;}
    }
    .content{ text-indent: 24px; font-size: 12px; text-align: justify;
      p{ margin-bottom: 1rem; line-height: 1.5rem;}
      img{ display: block; width: 100%; margin: 1rem 0;}
    }
    .likes{ margin: 0 auto; width: 50%; text-align: center; padding: 0 5%; height: 2rem; line-height: 2rem; background-color: #f33; color: #fff; font-size: 0.8rem; border-radius: 5px;}
  }
}
.writeRate{ overflow: hidden; box-shadow:0 0 10px rgba(0,0,0,0.5); width: 95%; padding: 0.5rem 2.5%; display: flex; height: 2rem; position: fixed; left: 0; bottom: 0; background-color: #fff; color: rgba(0,0,0,0.6);
  .writebox{ flex: 1; height: 1.5rem; line-height: 1.5rem; border-bottom: 1px solid rgba(0,0,0,0.2);
    input{ outline: none; border: none; background: none}
    i{ font-size: 1rem; line-height: 1.5rem;}
  }
  .rt{ flex: 0 0 15px; font-size: 1rem; margin: 0 2px; height: 1.5rem; line-height: 1.5rem;
    i{ vertical-align: middle}
  }
  .rate{ min-width: 30px; font-size: 1rem; margin: 0 2px; height: 1.5rem; line-height: 1.5rem;
    em{ color: #f33; font-size: 0.5rem; margin-left: 5px;}
    i{ vertical-align: middle}
  }
}
</style>
