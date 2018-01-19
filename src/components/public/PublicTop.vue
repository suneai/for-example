
// tab切换,防止路由刷新以后index的值改变
<template>
    <header class="top_header">
        <nav class="top_nav">
            <div class="nav_content">
                <div class="text_content" v-for="(item,index) in nav_list" :key="index" @click="tabChange(item,index)" :class='{active:index===index}'>
                    <a href="javascript:;">{{item.title}}</a>
                </div>
                <div class="nav_bar" :style="tab_bar_position | barChange">
                    <span class="up_bar"></span>
                    <span class="down_bar"></span>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  data(){
    return{
      tab_bar_position:0,
      nav_list:[
        {
          router:'UploadPhotos',
          title:'上传照片'
        },
        {
          router:'RollFollow',
          title:'滚动跟随'
        },
        {
          router:'SkuSelect',
          title:'sku查询'
        },
      ]
    }
  },
  filters:{
    barChange(index){
      return "left : " + index*1.26 + "rem";
    }
  },
  methods:{
    tabChange(item,index){
      this.tab_bar_position = index;
      this.$router.push({name:item.router});
    }
  }
}
</script>

<style lang="less" scoped>
.top_header{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .top_nav{
    width: 7.5rem;
    height: 0.64rem;
    background-color: #fff;
    position: relative;
    .nav_content{
      width: 1.26rem*9+0.2rem;
      height: 100%;
      clear: both;
      overflow-x: auto;
      &.active{
        .text_content{
          >a{
            color: #70c36f;
          }
        }
      }
      .text_content{
        width: 1.26rem;
        height: 100%;
        float: left;
        >a{
          width: 100%;
          height: 100%;
          display: block;
          color: #363636;
          text-align: center;
          font: 0.2rem/0.64rem 'microsoft yahei';
        }
      }
      .nav_bar{
        width: 1.26rem;
        height: 0.02rem;
        position: absolute;
        bottom: 0;
        left: 0;
        >span{
          width: 0.63rem;
          height: 0.02rem;
          display: block;
          background-color: #70c36f;
          position: absolute;
          z-index: 22;
          top: 0;
          &.up_bar{
            left: 0;
          }
          &.down_bar{
            right: 0;
          }
        }
      }
    }
  }
}


</style>
