'use strict';
/**
 * 创建一个中央数据处理中心
 * 需要传值的组件中用dataBridge.$emit触发一个自定义事件，并传递参数
 * 在需要接收数据的组件中用bus.$on监听自定义事件(creadted或mounted函数里面)，并在回调函数中处理传递过来的参数
  */

import Vue from 'vue';
export default new Vue();
