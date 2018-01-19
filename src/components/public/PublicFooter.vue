<template>
  <div class="pub_foot_wrap" v-if="isPublicFoot">
      <ul>
          <router-link tag="li" v-for="(item,index) in footList" :key="index" :to="item.router">{{item.name}}</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  footList:[
      {
          router:'/home',
          name:'主页'
      },
      {
          router:'/list',
          name:'列表'
      },
      {
          router:'/shoppingCar',
          name:'购物车'
      },
      {
          router:'/mine',
          name:'我的'
      },
  ]
}
</script>


