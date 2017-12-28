<template>
    <div id="news">
      <top-menu :topmenu="newsClass"></top-menu>
      <listitem :dataList="newsList" :dataType="newsType"></listitem>
    </div>
</template>

<script type="text/ecmascript-6">
  import listitem from '../listItem/listItem.vue';
  import topMenu from '../topMenu/topMenu.vue';
  export default {
    components: {
      listitem,
      topMenu
    },
    data () {
      return {
        newsList: {},
        newsClass: {
          type: Array,
          default: []
        },
        newsType: 'ALL'
      };
    },
    created () {
      this.$axios.get('/api/newsClass').then((response) => {
        response = response.data;
        if (response.errno === 0) {
          this.newsClass = response.data;
        }
      });
      this.$axios.get('/api/news').then((res) => {
        res = res.data;
        if (res.errno === 0) {
          this.newsList = res.data;
        }
      });
    },
    methods: {
//      change (id) {
//        this.newsType = id;
//      }
    }
  };
</script>

<style lang="less">
  #news{ overflow: hidden; width: 100%; position: relative;}
</style>
