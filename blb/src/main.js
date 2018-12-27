import Vue from 'vue'
import App from './App.vue'
import router from './router'
import swipercss from 'swiper/dist/css/swiper.min.css'

import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: '	eeb08ff531fa3717727e50091c1252a9', //刚刚开发者申请哪里的key
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation']
});

Vue.config.productionTip = false

new Vue({
  swipercss,
  router,

  render: h => h(App)
}).$mount('#app')
