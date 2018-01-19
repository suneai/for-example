<template>
  <div class="addComment-wrap">
      <div class="top">
          <div class="cancel" @click="cancel">取消</div>
          <div class="text">{{istitel}}</div>
          <div class="confirm" @click="confirm">确定</div>
      </div>
      <div class="add_content">
          <div class="write">
              <textarea v-model="isText" name="" id="" cols="30" rows="10" placeholder="请输入内容"></textarea>
          </div>
          <div class="add-wrap">
              <ul class="photo-box" v-if="imgArr.length >0">
                <li class="photo" v-for="(a,i) in imgArr" :key='i'>
                    <img :src="a.image_url" alt=""/>
                    <span class="del" @click="delImage(i)">
                      <svg width="0.24rem" height="0.24rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <!-- Generator: Sketch 48.1 (47250) - http://www.bohemiancoding.com/sketch -->
                          <title>discussion_ic_delete copy 5</title>
                          <desc>Created with Sketch.</desc>
                          <defs></defs>
                          <g id="write3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-457.000000, -1053.000000)">
                              <g id="images" transform="translate(30.000000, 578.000000)">
                                  <g id="VCG21gic15077551" transform="translate(235.000000, 471.000000)">
                                      <g id="push_ic_delete" transform="translate(188.000000, 0.000000)">
                                          <g id="Group-2">
                                              <g id="Group" transform="translate(4.000000, 4.000000)" fill="#000000" opacity="0.5">
                                                  <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                                              </g>
                                              <g id="Group-4" transform="translate(16.000000, 16.000000) scale(1, -1) rotate(45.000000) translate(-16.000000, -16.000000) translate(5.000000, 5.000000)" fill="#FFFFFF">
                                                  <rect id="Rectangle-2" x="10" y="-4.61852778e-14" width="2" height="22" rx="1"></rect>
                                                  <rect id="Rectangle-2-Copy" transform="translate(11.000000, 11.000000) scale(-1, -1) rotate(90.000000) translate(-11.000000, -11.000000) " x="10" y="-4.61852778e-14" width="2" height="22" rx="1"></rect>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                    </span>
                </li>
              </ul>
              <div class="is" v-if='isadd'>
                <input @change="uploadImg($event)" style="opacity:0;" type="file" accept="image/*" class="hinddenInput" name="header-img" multiple />
                <span @click='open'>
                  <svg width="1.60rem" height="1.60rem" viewBox="0 0 160 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <!-- Generator: Sketch 48.1 (47250) - http://www.bohemiancoding.com/sketch -->
                      <title>discussion_ic_add</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="write3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-530.000000, -1089.000000)">
                          <g id="discussion_ic_add" transform="translate(530.000000, 1089.000000)">
                              <rect id="Rectangle-18" stroke="#CCCCCC" stroke-width="1" x="0.5" y="0.5" width="159" height="159" rx="4"></rect>
                              <rect id="Rectangle-3" fill="#777777" fill-rule="evenodd" transform="translate(80.000000, 80.000000) rotate(90.000000) translate(-80.000000, -80.000000) " x="56" y="79" width="48" height="2" rx="1"></rect>
                              <rect id="Rectangle-3" fill="#777777" fill-rule="evenodd" x="56" y="79" width="48" height="2" rx="1"></rect>
                          </g>
                      </g>
                  </svg>
                </span>
              </div>
          </div>
      </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      istitel:'',
      isadd: true,
      isFileList: [],
      imgArr: [],
      imgHash:[],
      imgNumLimit: 9, //最多上传的图片张数
      is_hash: "", //上传阿里以后返回的哈希值
      isText: "" //textarea里面的文本
    };
  },
  created() {
    let type = JSON.parse(
        window.sessionStorage.getItem("entity_type")
      );
      if(type == 1){
        this.istitel = "发文章";
      }
      if(type == 2){
        this.istitel = "发活动";
      }
      if(type == 3){
        this.istitel = "发话题";
      }
      if(type == 4){
        this.istitel = "发评论";
      }
      if(type == 5){
        this.istitel = "发点赞";
      }
      if(type == 6){
        this.istitel = "发动态";
      }
  },
  methods: {
    uploadImg(e) {
      let tag = e.target || e.srcElement;
      let file = tag.files;
      let imgNum = file.length;
      let _this = this;
      if (this.imgArr.length + imgNum >= this.imgNumLimit) {
        _this.isadd = false;
      }
      if (this.imgArr.length + imgNum > this.imgNumLimit) {
        _this.isadd = true;
        _this.$toast({
          message: "一次最多上传" + _this.imgNumLimit + "张图片！",
          position: "cneter",
          duration: "1000"
        });
        return;
      }
      let param = new FormData(); //创建form对象
      for (let i = 0; i < file.length; i++) {
        param.append("file" + i, file[i], file[i].name); //通过append向form对象添加数据
         //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      }
      
      this.$potajax.post('upload_image',param,res=>{
        let Obj = Object.values(res.result);
        Obj.forEach(item => {
          this.imgHash.push(item.image_hash);
        });
        Obj.forEach(item => {
            this.imgArr.push(item)
        });
      },err=>{
        console.warn(err)
      })
      
    },
    open() {
      this.$el.querySelector(".hinddenInput").click();
    },
    delImage(index) {
      this.isadd = true;
      this.imgArr.splice(index,1);
      this.imgHash.splice(index,1);
    },
    confirm() {
      this.is_hash = this.imgHash.join(",");
      let entity_type = JSON.parse(
        window.sessionStorage.getItem("entity_type")
      );
      let entity_id = JSON.parse(window.sessionStorage.getItem("entity_id"));
      if ((entity_type && entity_id && this.isText) || this.is_hash) {
        this.$api.post(
          "content/addmoment",
          {
            entity_type: entity_type,
            entity_id: entity_id,
            contents: this.isText,
            image: this.is_hash
          },
          res => {
            if (res.code == "00006") {
              window.sessionStorage.setItem('addComment_data',JSON.stringify(res.data));
              this.$router.go(-1);
            }
          }
        );
      } else {
        this.$toast({
          message: "您还没输入任何内容!",
          position: "center",
          duration: 2000
        });
      }
    },
    cancel() {
      this.imgArr = [];
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.addComment-wrap {
  height: 100%;
  background-color: #fff;
  .top {
    width: 100%;
    height: 1rem;
    position: relative;
    border-bottom: 0.01rem solid #f1f1f1;
    .cancel {
      display: inline-block;
      position: absolute;
      left: 0.3rem;
      font-size: 0.28rem;
      line-height: 1rem;
      top: 0;
      z-index: 999;
      color: #777;
    }
    .text {
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 1rem;
      text-align: center;
      font-size: 0.36rem;
      line-height: 1rem;
      top: 0;
      z-index: 99;
    }
    .confirm {
      display: inline-block;
      position: absolute;
      right: 0.3rem;
      font-size: 0.28rem;
      line-height: 1rem;
      z-index: 999;
      top: 0;
      color: #197bce;
    }
  }
  .add_content {
    // height: 7.5rem;
    width: 7.5rem;
    .write {
      height: 4.3rem;
      margin-top: 0.4rem;
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.3rem;
      textarea {
        resize: none;
        width: 100%;
        height: 100%;
        border: 0 none;
        outline: 0 none;
        font-size: 0.3rem;
        line-height: 0.3rem;
        color: #000;
      }
      ::-webkit-input-placeholder {
        line-height: 0.24rem;
        font-size: 0.24rem;
        color: #999;
      }
      :-ms-input-placeholder {
        line-height: 0.24rem;
        font-size: 0.24rem;
        color: #999;
      }
    }
    .add-wrap {
      height: 7.5rem;
      width: 100%;
      box-sizing: border-box;
      padding: 0.3rem;
      position: relative;
      .photo-box {
        // display: inline-block;
        .photo {
          position: relative;
          float: left;
          width: 2.2rem;
          height: 2.2rem;
          margin-right: 0.1rem;
          margin-bottom: 0.1rem;
          // border: 0.01rem solid #ccc;
          overflow: hidden;
          img {
            display: block;
            width: 2.2rem;
            height: 2.2rem;
            position: absolute;
            left: 0;
            top: 0;
          }
          span {
            display: block;
            width: 0.24rem;
            height: 0.24rem;
            position: absolute;
            z-index: 99;
            right: 0.04rem;
            top: 0.04rem;
          }
        }
      }
      .is {
        display: inline-block;
        height: 2.2rem;
        width: 2.2rem;
        position: relative;
        input {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: block;
          height: 1.6rem;
          width: 1.6rem;
          line-height: 1.6rem;
          text-align: center;
          border: 0 none;
          outline: 0 none;
          background-color: transparent;
        }
        span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: block;
          height: 1.6rem;
          width: 1.6rem;
          line-height: 1.6rem;
          text-align: center;
          font-size: 1rem;
          color: #999;
          border: 0.01rem solid #ccc;
          outline: 0 none;
          background-color: transparent;
          z-index: 999;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
