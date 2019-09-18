import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import store from '@/store/index'
import tabBar from '@/components/tabBar'
import shopp1 from '@/components/shopp1'
import shopp2 from '@/components/shopp2'
import banner1 from '@/components/banner1'
import myList from '@/components/myList'
import headerBack from '@/components/headerBack'

Vue.config.productionTip = false

Vue.use(Mint);
Vue.component('tabBar',tabBar);
Vue.component('shopp1',shopp1);
Vue.component('shopp2',shopp2);
Vue.component('banner1',banner1);
Vue.component('myList',myList);
Vue.component('headerBack',headerBack);
const URL = 'http://zhaoping.langfang1088.com/';
Vue.prototype.$post = (url, data = new FormData()) =>{
  return new Promise((resolve,reject) =>{
    axios.post(URL+url,data).then(res =>{
      resolve(res);
    })
  })
}

//拦截token
router.beforeEach((to, from, next) => {
  if(localStorage.getItem("token")){  
    next();
  }else{
    if(to.path == "/login" || to.path == "/sign" || to.path == "/register" || to.path == "/forget"){
      next();
    }else{
      next({
        path:"/login",
        // query:{redirect: to.path}
      });
    }
  }
})

//跳转页面 scrollTo为0
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
