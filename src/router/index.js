import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/Home'
import AirticleList from '@/components/List'

Vue.use(Router)

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
    ]
    }
  ]
})
