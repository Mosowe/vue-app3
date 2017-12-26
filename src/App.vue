<template>
  <div id="app">
    <router-view></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from './components/footer/footer.vue';

export default {
  created () {},
  components: {
    vfooter
  },
  name: 'app'
};
</script>

<style>
</style>
