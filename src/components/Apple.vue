<!--
 * @Author: tianzhi
 * @Date: 2020-01-06 17:42:35
 * @LastEditors  : tianzhi
 * @LastEditTime : 2020-01-07 21:26:25
 -->
<template>
  <div class="hello">
    <h1 id="tester">{{message}}</h1>
    <button @click="changeMsg">点击按钮</button>
  </div>
</template>

<script>
export default {
  name: 'Apple',
  data() {
    return {
      message: 'Welcome'
    }
  },
  created() {
    this.message = "I am new!!!"
  },
  methods: {
    changeMsg() {
      this.message = "msg改变了"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
  display: block;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background: #000;
}
</style>
