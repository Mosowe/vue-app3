<template>
  <div id="topwrapper">
    <i class="ion ion-chevron-left fl backpage" @click.prevent="backPage"></i>
    <div class="fr" style="height: 100%;">
      <span class="rateTotal" @click="ratingsShow" v-if="number">{{number}}跟帖</span>
      <more-wrapper  v-if="selectMenu" :selectMenu="selectMenu"></more-wrapper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import dataBridge from '../../common/js/dataBridge';
  import moreWrapper from '../more/more.vue';
  export default {
    components: {
      moreWrapper
    },
    props: {
      number: {
        type: Number,
        default: 0
      },
      selectMenu: {
        type: Array,
        default: null
      }
    },
    methods: {
      backPage () {
        this.$parent.openPage = false;
//        dataBridge.$emit('close', false);
      },
      ratingsShow () {
        dataBridge.$emit('open', true);
      }
    }
  };
</script>

<style lang="less">
  #topwrapper{ width: 100%; padding: 0 5%; height: 2.5rem; line-height: 2.5rem;border-bottom: 1px solid rgba(0,0,0,0.1); box-sizing: border-box;
    .backpage{ width: 2rem; height: 2.5rem; line-height: 2.5rem; font-size: 18px; position: relative; z-index: 11}
    .rateTotal{ border-radius: 2px; margin-right: 5px; display: inline-block;padding: 0 5px; height: 1.5rem; background-color: #f33; line-height: 1.5rem; font-size: 0.5rem; color: #fff}
  }

</style>
