import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/Home'
import AirticleList from '@/components/List'
import ReadArticle from '@/components/readArticle'

Vue.use(Router)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
        path:'list',
        name:'List',
        component:AirticleList,
        },
        {
          path:'list/readArticle',
          name:'readArticle',
          component:ReadArticle,
          },
    ]
    }
  ]
})
