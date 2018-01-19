<template>
  <div class="choiceness">
    <div class="info-img">
      <img :src="enterText" alt="" class="imgSrc" @click="open"/>
      <input type="file" style="opacity:0;" @change="handleFile" class="hinddenInput" name="header-img" accept="image/*">
    </div>
  </div>
</template>
<script>
import Mock from 'mockjs';

export default {
  data(){
    return{
      enterText:''
    }
  },
  mounted(){
    Mock.Random.dataImage('200x100');
  },
methods:{
  open(){
    this.$el.querySelector('.hinddenInput').click();
  },
  handleFile(e){
    let _this = this;
    let $target = e.target || e.srcElement;
    let file = $target.files[0];
    let formdata = new FormData();
    formdata.append('file',file);
    let reader = new FileReader()
    reader.onload = (e)=>{
      
      setTimeout(() => {
        let src = Mock.Random.dataImage('200x100');
        _this.enterText = src;      
      }, 500);
    }
    reader.readAsDataURL(file)
  }
}
}
</script>
<style lang="less" scoped>
.imgSrc{
  display: block;;
  height: 2rem;
  width: 2rem;
  background-color: #000;
}
</style>
