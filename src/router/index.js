/*
 * @Author: tianzhi
 * @Date: 2020-01-06 17:42:35
 * @LastEditors: tianzhi
 * @LastEditTime: 2020-01-07 21:01:33
 */
import Vue from 'vue'
import Router from 'vue-router'
import Apple from '@/components/Apple'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Apple',
      component: Apple
    }
  ]
})
