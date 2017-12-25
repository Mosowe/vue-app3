<template>
    <div id="news">
      <div class="top">
        <div ref="newsMenu" class="menu-wrapper">
          <ul class="newsMenu">
            <li class="menuItem" v-for="item in newsCla" :data-id="item.id">{{item.name}}</li>
          </ul>
        </div>

        <i class="ion ion-chevron-down" @click="changemenu = !changemenu"></i>
        <div class="menuChange" v-show="changemenu">
          <div class="title">栏目设置</div>
          <ul class="choose">
            <li class="menuItem" v-for="item in newsCla" :data-id="item.id">{{item.name}}</li>
          </ul>
          <div class="title">添加栏目</div>
          <ul>
            <li class="menuItem" v-for="item in newsAdd">{{item.name}}</li>
          </ul>
        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
    export default {
      data () {
        return {
          newsClass: {
            type: Array,
            default: []
          },
          changemenu: false
        };
      },
      created () {
        this.$axios.get('/api/newsClass').then((response) => {
          response = response.data;
          if (response.errno === 0) {
            this.newsClass = response.data;
            this.$nextTick(() => {
              this.topScroll = new BScroll(this.$refs.newsMenu, {
                click: true
              });
            });
          }
          });
      },
      computed: {
        newsCla () {
          let showClass = [];
          if (this.newsClass.length > 0) {
            this.newsClass.forEach((This) => {
              if (This.type === 1) {
                showClass.push(This);
              }
            });
          }
          return showClass;
        },
        newsAdd () {
          let newsAdds = [];
          if (this.newsClass.length > 0) {
            this.newsClass.forEach((This) => {
              if (This.type === 0) {
                newsAdds.push(This);
              }
            });
          }
          return newsAdds;
        }
      }
    };
</script>

<style lang="less">
  #news{ overflow: hidden; width: 100%; position: relative;
    .top{ overflow: hidden;  width: 100%; height: 1.5rem; background-color: #fff; position: relative;
      .menu-wrapper{ overflow: hidden; position: relative}
      .newsMenu { overflow: hidden;
        .menuItem{ float: left; line-height: 1.5rem; padding: 0 1rem; font-size: 0.8rem; color: #666}
      }
      i{ display: block; position: absolute; right: 0; top: 0; z-index: 5; background-color: #fff; width: 1.5rem; height: 1.5rem; line-height: 1.5rem; text-align: center}
    }
  }
</style>
