<template>
    <footer>
      <router-link to="/news"><i class="ion ion-grid"></i>新闻</router-link>
      <router-link to="/movie"><i class="ion ion-social-youtube"></i> 视频</router-link>
      <router-link to="/zhibo"><i class="ion ion-videocamera"></i>直播</router-link>
      <router-link to="/radio"><i class="ion ion-mic-c"></i>电台</router-link>
      <router-link to="/person"><i class="ion ion-person"></i> 个人</router-link>
    </footer>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="less">
  @import "../../common/css.less/funLess";
  footer{overflow: hidden;; width: 100%; display: flex; position: fixed;; left: 0; bottom: 0; padding: 0.4rem 0;.bgc(); text-align: center; z-index: 999;
    a{ flex: 1; font-size: 0.6rem; color: #666; text-decoration: none;
      &.active{ color: red}
    }
    .ion{ display: block; font-size: 1rem; margin-bottom: 0.1rem}
  }
</style>
