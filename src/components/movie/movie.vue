<template>
    <div id="movie">
      <top-menu :topmenu="newsClass"></top-menu>
      <movie-list></movie-list>
    </div>
</template>

<script type="text/ecmascript-6">
  import topMenu from '../topMenu/topMenu.vue';
  import movieList from '../movieList/movieList.vue';
    export default {
      components: {
        topMenu,
        movieList
      },
      data () {
        return {
          movie: {
            type: Object
          },
          newsClass: {
            type: Object
          }
        };
      },
      created () {
        this.$axios.get('/api/movie').then((res) => {
          res = res.data;
          if (res.errno === 0) {
            this.movie = res.data;
          }
        });
        this.$axios.get('/api/newsClass').then((res) => {
          res = res.data;
          if (res.errno === 0) {
            this.newsClass = res.data;
          }
        });
      }
    };
</script>

<style lang="less">

</style>
