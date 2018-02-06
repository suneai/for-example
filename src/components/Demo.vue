<template>
  <div class="demo_wrap">
      <!-- <PublicTop></PublicTop> -->
      <!-- <div>{{'Tue Jan 31 2017 08:00:00 GMT+0800' | time}}</div> -->
      <!-- <SkuSelect></SkuSelect> -->
      <!-- <router-view/> -->
  </div>
</template>

<script>
import PublicTop from "./public/PublicTop";
import SkuSelect from "./demo/sku/SkuSelect";



export default {
  components:{PublicTop,SkuSelect},
  data(){
    return{
      msg:'store'
    }
  },
  filters:{
    time(target_time , current_time ,){


      let target = new Date(target_time).getTime();
      let current = new Date().getTime();
      let difference = current - target;
      if(difference < 0){
        console.log('目标时间不能大于当前时间节点!');
      }
      
      
      let days = Math.floor(difference/(24*60*60*1000));

      let hoursTemp = difference%(24*60*60*1000);
      let hours = Math.floor(hoursTemp/(60*60*1000));

      let minTemp = hoursTemp%(60*60*1000);
      let min = Math.floor(minTemp/(60*1000));

      let secondsTemp = minTemp%(60*1000);
      let seconds = Math.floor(secondsTemp/1000);

      console.log(" 相差 "+days+"天 "+hours+"小时 "+min+" 分钟"+seconds+" 秒")
      return " 相差 "+days+"天 "+hours+"小时 "+min+" 分钟"+seconds+" 秒"

    }
  }
}
</script>


<style lang="less" scoped>
.demo_wrap{
  padding-top: 1rem;
  font-size: 0.36rem;
}
</style>
