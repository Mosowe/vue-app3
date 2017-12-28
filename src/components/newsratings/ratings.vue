<template>
  <transition name="ratingsWrapper">
    <div class="ratingsWrapper" v-if="openPage">
      <topwrapper :showSelectMenu="false"></topwrapper>
      <div class="content" ref="contents">
        <div style="padding-bottom: 3rem">
          <div class="title">热门跟帖</div>
          <ul class="rateBox">
            <li class="rateItem" v-for="item in ratings">
              <div class="userPic"><img :src="item.avatar"> </div>
              <div class="userContent">
                <div class="userInfo">
                  <h4>{{item.username}}<small>{{item.rateTime}}</small></h4>
                  <span @click="dianzan(item)">{{item.rateType}}<i class="ion ion-thumbsup"></i></span>
                </div>
                <div class="userText">{{item.text}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <input-box></input-box>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import dataBridge from '../../common/js/dataBridge';
  import topwrapper from '../topWrapper/topWrapper.vue';
  import inputBox from '../inputBox/inputBox.vue';
  import BScroll from 'better-scroll';

  export default {
    components: {
      topwrapper,
      inputBox
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
    .title{border-radius: 2px; margin-bottom:1rem;display: inline-block;padding: 0 5px;height: 1.5rem;margin-top: 0.5rem;background-color: #f33;line-height: 1.5rem;font-size: 0.5rem;color: #fff;}
    .rateBox{ overflow: hidden; width: 100%;
      .rateItem{ overflow: hidden; padding: 0.5rem 0; border-bottom: 1px solid rgba(0,0,0,0.2); display: flex;
        .userPic{ flex: 0 0 30px; height: 30px; border-radius: 15px; overflow: hidden; margin-right: 5px;
          img{ display: block; width: 100%; height: 100%;}
        }
        .userContent{ flex: 1;
          .userInfo{ overflow: hidden; margin-bottom: 0.5rem;
            h4{ float: left; font-weight: normal; font-size: 0.8rem; color: #ffc033;
              small{ display: block; font-size: 0.5rem; color: #4a4a4a}
            }
            span{ float: right; font-size: 0.7rem; color: #4a4a4a;  margin-top: 0.4rem;
              i{ margin-left: 5px; color: #9B9B9B}
            }
          }
        }
      }
    }
  }

</style>
