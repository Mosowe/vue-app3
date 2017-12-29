<template>
  <div class="com-ratings">
    <div class="title">{{title}}</div>
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
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      ratings: '',
      title: {
        type: String,
        default: '热门跟帖'
      }
    }
  };
</script>

<style lang="less">
  .com-ratings{ padding-bottom: 3rem;
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
