<template>
    <div id="movieList">
      <video-player  class="vjs-custom-skin"
                     ref="videoPlayer"
                     :options="playerOptions"
                     :playsinline="true">
      </video-player>
      <!--<ul class="listbox">-->
        <!--<li v-if="movieList.length === 0">暂无数据</li>-->
        <!--<li class="list-item" v-for="item in movieList">-->
          <!--<video :src="item.url" controls="controls" width="100%" height="180"></video>-->
          <!--<div class="title"></div>-->
          <!--<div class="info">-->
            <!--<div class="author">-->
              <!--<img src="">-->
              <!--<span></span>-->
            <!--</div>-->
            <!--<div class="ohter">-->
              <!--<div class="rate"></div>-->
              <!--<div class="handle"></div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        // videojs options
        playerOptions: {
          language: 'zh-CN',
          sources: [{
            type: 'video/mp4',
            src: '../../../src/common/movie/gx_001.mp4'  // 播放地址
          }],
          height: 180,
          poster: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3043828141,2728137630&fm=173&s=BAB0F1A4CC052E531E89018E0300A082&w=600&h=261&img.JPEG'
        }
      };
    }
//    props: {
//      data: {}
//    },
//    created () {
//    },
//    computed: {
//      movieList () {
//        let list = [];
//        if (this.data.length > 0) {
//          console.log(this.data);
//          list = this.data;
//        }
//        return list;
//      }
//    }
  };
</script>

<style lang="less">
</style>
