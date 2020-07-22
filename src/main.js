import Vue from 'vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

Vue.use(VueAxios,axios);
axios.defaults.baseURL = '/api';  
axios.defaults.timeout = 8000; 
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = "/login";
    // window.location.href = '/#/login';
    // 这里的this取不到，所以不可以用this.$route.push
  }else{
    alert(res.msg);
  }

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
