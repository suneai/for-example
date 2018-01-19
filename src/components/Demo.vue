<template>
  <div class="demo_wrap">
      <PublicTop></PublicTop>
      <!-- <SkuSelect></SkuSelect> -->
      <!-- <router-view/> -->
  </div>
</template>

<script>
import PublicTop from "./public/PublicTop";
import SkuSelect from "./demo/sku/SkuSelect";
export default {
  components:{PublicTop,SkuSelect}
}
</script>


<style lang="less" scoped>
.demo_wrap{
  padding-top: 1rem;
}
</style>
