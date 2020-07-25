<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import jsonp from 'jsonp' 
export default {
  name: 'App',
  data(){
    return{
    }
  },
  computed:{

  },

  components: {
    
  },
  mounted(){
    this.getUserInfo();
    this.getCartCount();

  },
  methods:{
    getUserInfo(){
      this.axios.get('/user').then((res)=>{
        this.$store.dispatch("saveUserName", res.username)
        // 异步的执行，所以渲染不上，使用computed方法
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style>
@import url('./assets/scss/reset.scss');
</style>
