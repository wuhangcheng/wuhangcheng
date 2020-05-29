import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router/router.js"
import store from './store/store.js'
import Vant from 'vant';
import 'vant/lib/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Vant);
Vue.use(Vuex)
Vue.use(ElementUI)


Vue.config.productionTip = false
router.beforeEach(function(to,from,next){
  if(store.state.userInfo||to.path==='/login'){
    console.log(store.state.userInfo)
    next();
  }
  else {
    next({path:'/login'})
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

