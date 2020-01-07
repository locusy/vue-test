/*
 * @Author: tianzhi
 * @Date: 2020-01-06 18:30:56
 * @LastEditors  : tianzhi
 * @LastEditTime : 2020-01-07 10:08:36
 */

/**
 *  在package.json文件中配置   husky 可以在提交的时候自动执行单元测试
 */
function add(a, b) {
    return a+b+1
}

describe('测试例子', () => {
    it('测试加法', () => {
        expect(add(1,2))
        .toBe(3)
    })
})