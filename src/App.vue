<template>
  <div id="app">
    <router-view/>
    <MySvg></MySvg>
  </div>
</template>

<script>
import MySvg from "./components/svg/TestSvg";
import PublicFooter from "./components/public/PublicFooter";
export default {
  name: 'app',
  components:{MySvg}
}
</script>

<style lang="less">

@import "./assets/less/reset.less";

</style>

