<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>

import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
export default {
  name: 'App',
  components:{Header,Footer},
  mounted() {
    //派发请求商品分类请求
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>

</style>
