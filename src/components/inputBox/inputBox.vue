<template>
  <div class="writeRate"  >
    <label class="writebox" @focus="inputfocus">
      <i class="ion ion-ios-compose-outline"></i>
      <input type="text" placeholder="写跟帖"/>
    </label>
    <div class="smaill rt"><i class="ion ion-happy-outline"></i></div>
    <div class="rate" v-if="showc"><i class="ion ion-chatbox-working"></i><em>{{number}}</em></div>
    <div class="take rt" v-if="showc"><i class="ion ion-android-star-outline"></i></div>
    <div class="share rt" v-if="showc"><i class="ion ion-android-share-alt"></i></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      number: {
        type: Number
      },
      showc: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      inputfocus () {
        alert(0);
      }
    }
  };
</script>

<style lang="less">
  .writeRate{ overflow: hidden; box-shadow:0 0 10px rgba(0,0,0,0.5); width: 95%; padding: 0.5rem 2.5%; display: flex; height: 2rem; position: fixed; left: 0; bottom: 0; background-color: #fff; color: rgba(0,0,0,0.6);
    .writebox{ flex: 1; height: 1.5rem; line-height: 1.5rem; border-bottom: 1px solid rgba(0,0,0,0.2);
      input{ outline: none; border: none; background: none}
      i{ font-size: 1rem; line-height: 1.5rem;}
    }
    .rt{ flex: 0 0 15px; font-size: 1rem; margin: 0 2px; height: 1.5rem; line-height: 1.5rem;
      i{ vertical-align: middle}
    }
    .rate{ min-width: 30px; font-size: 1rem; margin: 0 2px; height: 1.5rem; line-height: 1.5rem;
      em{ color: #f33; font-size: 0.5rem; margin-left: 5px;}
      i{ vertical-align: middle}
    }
  }
</style>
