import Vue from 'vue'
import Router from 'vue-router'

//demo主页
import Demo from '@/components/Demo'

/*-----demo------*/
//长传照骗
import UploadPhotos from '@/components/demo/UploadPhotos'
//滚动跟随
import RollFollow from '@/components/demo/RollFollow'
//sku查询
import SkuSelect from '@/components/demo/sku/SkuSelect'


Vue.use(Router)

export default new Router({
  routes: [
    {
      //路由重定向,防止输入任意的路由,会显示一片空白
      path:'*',
      redirect:'/'
    },
    {
      path: '/',
      redirect:'/demo'
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      children:[
        {
          path : 'uploadPhotos',
          name: 'UploadPhotos',
          component: UploadPhotos
        },
        {
          path : 'rollFollow',
          name: 'RollFollow',
          component: RollFollow
        },
        {
          path : 'skuSelect',
          name: 'SkuSelect',
          component: SkuSelect
        },
      ]
    },
  ]
})
