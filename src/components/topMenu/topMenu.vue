<template>
  <div class="top">
    <div ref="newsMenus" class="menu-wrapper">
      <ul class="newsMenu" :style="{width: newsCla.length * 65 +'px'}">
        <li class="menuItem" :class="{active: index == menuActive}" v-for="(item, index) in newsCla" @click="chooseMenu(index,item.id)">{{item.name}}</li>
      </ul>
    </div>
    <i class="ion" :class="[changemenu? 'ion-chevron-up': 'ion-chevron-down']" @click="changemenu = !changemenu"></i>
    <transition name="topDown">
      <div class="menuChange" v-show="changemenu">
        <div class="getMenu">
          <div class="title">栏目设置</div>
          <ul class="choose">
            <li v-for="(item) in newsCla" @click="delMenu(item)">{{item.name}}</li>
          </ul>
        </div>
        <div class="lostMenu">
          <div class="title">点击添加栏目</div>
          <ul>
            <li v-for="(item) in newsLost" @click="addMenu(item)">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import dataBridge from '../../common/js/dataBridge';

    export default {
      props: {
        topmenu: null,
        dataType: {
          type: String
        }
      },
      data () {
        return {
          changemenu: false,
          menuActive: 0
        };
      },
      created () {
        this.$nextTick(() => {
          this.topScroll = new BScroll(this.$refs.newsMenus, {
            click: true,
            scrollX: true
          });
        });
      },
      computed: {
        newsCla () {
        let showClass = [];
        if (this.topmenu.length > 0) {
          this.topmenu.forEach((This) => {
            if (This.type === 1) {
              showClass.push(This);
            }
          });
        }
        return showClass;
      },
        newsLost () {
          let newsAdds = [];
          if (this.topmenu.length > 0) {
            this.topmenu.forEach((This) => {
              if (This.type === 0) {
                newsAdds.push(This);
              }
            });
          }
          return newsAdds;
        }
      },
      methods: {
        addMenu (item) {
          item.type = 1;
          this.menuActive = 0;
          dataBridge.$emit('changeType', 'ALL');
        },
        delMenu (item) {
          item.type = 0;
          this.menuActive = 0;
          dataBridge.$emit('changeType', 'ALL');
        },
        chooseMenu (index, id) {
          this.menuActive = index;
          dataBridge.$emit('changeType', id);
        }
      }
    };
</script>

<style lang="less">
  .top{  width: 100%; height: 2rem; background-color: #f33; position: relative; z-index: 101;
    .menu-wrapper{ overflow: hidden; height: 2rem; position: relative;}
    .newsMenu{ padding-right: 2rem;
      .menuItem{ float: left; line-height: 2rem; width: 65px; text-align: center; font-size: 0.8rem; color: #fff;
        &.active{ background-color: #a50404}
      }
    }
    i{ display: block; position: absolute; right: 0; top: 0; z-index: 101; background-color: rgba(255,255,255,0.8); width: 2rem; height: 2rem; line-height: 2rem; text-align: center}
    .menuChange{ transition: 0.15s all linear; overflow: hidden; width: 100%; height: 100%; position: fixed; left: 0; top: 0; z-index: 100; background-color: #eaeaea;
      &.topDown-enter-active,&.topDown-leave-active{ transform: translate3d(0,0,0)}
      &.topDown-enter,&.topDown-leave-to{ transform: translate3d(0,-100%,0)}
      .title{ padding: 0.5rem 1rem; font-size: 0.8rem; color: #333; margin-bottom: 0.5rem;}
      .getMenu{ padding-top: 1rem; overflow: hidden; width: 100%; background-color: #fff;}
      .lostMenu{ padding-top: 1rem;}
      ul{ overflow: hidden; width: 90%; margin: 0 auto 1.5rem auto;}
      li{ float: left; box-sizing: border-box; width: 20%; margin: 2.5%; border: 1px solid #ccc; border-radius: 2px; height: 1.5rem; line-height: 1.5rem; text-align: center}
    }
  }
</style>
