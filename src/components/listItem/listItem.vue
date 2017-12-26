<template>
    <div id="list-wrapper" ref="wrapper">
      <div>
        <div class="listItem" v-for="item in showlist">
        <div class="list1" v-if="item.images.length===1">
          <div class="img"><img :src="item.images[0]"></div>
          <div class="content">
            <div class="title" :style="{height: item.images.length ? '3rem':'auto'}">{{item.title}}</div>
            <div class="info">
              <div class="time fl">{{item.time}}</div>
              <div class="rate fr">{{item.rateTotal}}&nbsp;跟帖<em class="zd" v-if="item.type === 1">置顶</em></div>
            </div>
          </div>
        </div>
        <div class="list2" v-else>
          <div class="title">{{item.title}}</div>
          <div class="imgs" v-if="item.images.length>1"><img :src="img" v-for="(img,index) in item.images" height="50" v-if="index<=2"> </div>
          <div class="info">
            <div class="time fl">{{item.time}}</div>
            <div class="rate fr">{{item.rateTotal}}&nbsp;跟帖<em class="zd" v-if="item.type === 1">置顶</em></div>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
    export default {
      data () {
        return {
          information: []
        };
      },
      props: {
        info: {
          type: String
        }
      },
      created () {
        this.loadData();
//        this.$axios.get('/api/news').then((res) => {
//          res = res.data;
//          if (res.errno === 0) {
//            this.information = res.data;
//          }
//        });
      },
      computed: {
        showlist () {
          let list = [];
          if (this.info === 'ALL') {
//            list = this.information;
            this.information.forEach((item) => { // 置顶
              if (item.type === 1) {
                list.push(item);
              }
            });
            this.information.forEach((item) => { // 其他
              if (item.type !== 1) {
                list.push(item);
              }
            });
          } else {
          this.information.forEach((item) => {
            if (item.classes === this.info) {
              list.push(item);
            }
          });
          }
          return list;
        }
      },
      methods: {
        loadData () {
          this.$axios.get('/api/news').then((res) => {
            res = res.data;
            if (res.errno === 0) {
              this.information = res.data;
            }
            this.$nextTick(() => {
              if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.wrapper, {
                  click: true
                });
                this.scroll.on('touchEnd', (pos) => {
                  // 下拉动作
                  if (pos.y > 50) {
                    console.log('下拉刷新');
                    this.loadData();
                  }
//                   上拉加载
                  if (pos.y <= (this.scroll.maxScrollY + 100)) {
                    console.log('上拉加载');
//                    this.$axios.get('/api/newsAdd').then((res) => {
//                      res = res.data;
//                      if (res.errno === 0) {
//                        res.data.forEach((item) => {
//                          this.information.push(item);
//                        });
//                      }
//                    });
//                    console.log(this.information);
                  }
                });
              } else {
                this.scroll.refresh();
              }
            });
          });
        }
      }
    };
</script>

<style lang="less">
#list-wrapper{ overflow: hidden; width: 100%;  position: fixed; left: 0; top: 2rem; bottom: 3rem;
  .listItem{ overflow: hidden; width: 96%; padding:0.5rem 2%; border-bottom: 1px solid rgba(0,0,0,0.1);
    .title{ font-size: 1rem; color: #333; line-height: 1.5rem; overflow: hidden; margin-bottom: 0.5rem}
    .info{ overflow: hidden; width: 100%; font-size: 0.5rem; color: rgba(0,0,0,0.5);}
    .zd{ color: #fff; background-color: #999; display: inline-block; padding: 0.1rem 0.2rem; margin-left: 5px; border-radius: 2px;}
    .list1{ display: flex;
      .img{ flex: 0 0 100px; height: 70px; margin-right: 10px;
        img{ display: block; width: 100%; height: 100%;}
      }
      .content{ flex:1; overflow: hidden;}
    }
    .list2{
      .imgs{ width: 100%; height: 70px; margin-bottom: 10px;
        img{ width: 33.33333%; box-sizing: border-box; padding: 0 3px; height: 100%;}
      }
    }

  }
}
</style>
