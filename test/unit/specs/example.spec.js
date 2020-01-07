/*
 * @Author: tianzhi
 * @Date: 2020-01-06 18:30:56
 * @LastEditors  : tianzhi
 * @LastEditTime : 2020-01-07 11:13:46
 */

/**
 * e2e tests：端对端的测试 功能测试
 * integration tests：集成测试  系统的各个部分在一起合作的如何－将各个代码块集成在一起
 * unit tests：单元测试 是指对软件中的最小可测试单元进行检查和验证。 
 */

/**
 *  https://github.com/typicode/husky
 *  在package.json文件中配置   husky 可以在提交的时候自动执行单元测试：
 *  npm install husky --save-dev
 *  "husky": {
 *       "hooks": {
 *           "pre-commit": "npm run unit"
 *       }
 *   },
 * 
 */

/**
 * 
 * @param {string} a 
 * @param {string} b 
 */
function add(a, b) {
    if(Number(a) == a) {
        a = Number(a)
    }
    if(Number(b) == b) {
        b= Number(b)
    }
    return a + b
}


/**
 * @param {*} describe 定义一个测试套件
 * @param {*} it 定义一个测试用例
 * @param {*} expect 断言的判断条件
 * @param {*} toBe 断言的比较结果
 */

describe('测试例子数字相加', () => {
    it('测试加法', () => {
        expect(add(1, 2)).toBe(3)
    })
})

describe('测试字符串相加', () => {
    it('测试字符串', () => {
        expect(add('1', 2)).toBe(3)
    })
})