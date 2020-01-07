/*
 * @Author: tianzhi
 * @Date: 2020-01-06 17:42:35
 * @LastEditors  : tianzhi
 * @LastEditTime : 2020-01-06 19:07:25
 */
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('#tester').textContent)
    //   .toEqual('Welcome')
    expect(vm).toEqual(vm)
  })
})
