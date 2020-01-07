/*
 * @Author: tianzhi
 * @Date: 2020-01-06 17:42:35
 * @LastEditors  : tianzhi
 * @LastEditTime : 2020-01-07 21:28:01
 */
import Vue from 'vue'
import Apple from '@/components/Apple'
import {mount} from '@vue/test-utils'
// require('jsdom-global')()

describe('Apple.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Apple)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('#tester').textContent)
    //   .toEqual('Welcome')
    expect(vm).toEqual(vm)
  })

  it('测试created生命周期', () => {
    expect(typeof Apple.created).toEqual('function')
  })

  it('测试data', () => {
    expect(typeof Apple.data).toEqual('function')

    const defaultData = Apple.data()
    expect(defaultData.message).toEqual('Welcome')
  })

  it('测试mounted之后', () => {
    const vm = new Vue(Apple).$mount()
    expect(vm.message).toEqual('I am new!!!')
  })

  /**
   * 和写vue 没啥本质区别，只不过我们用测试的角度去写代码，vue提供了专门针对测试的 @vue/test-utils
   */
  it('按钮点击后', () => {
    const wrapper = mount(Apple)
    wrapper.find('button').trigger('click') 
    expect(wrapper.vm.message).toBe('msg改变了')
    // 测试html渲染结果 
    // expect(wrapper.find('a').html()).toBe('<a>点击按钮</a>')
  })
    
})
