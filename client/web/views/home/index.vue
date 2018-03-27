<template lang="pug">
  .home
    .app-header
    .app-body
      aside.app-aside
      .app-main
        el-row(:gutter="30")
          el-col(:span="20")
            el-input(v-model="form.url" placeholder="请输入 Git 地址")
          el-col(:span="4")
            el-button(type="primary" @click.native="clone") 初始化项目
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      form: {
        url: 'https://github.com/FangyuDu/assist',
        branch: null
      }
    }
  },
  methods: {
    clone () {
      let data = this.form
      console.log(data)
      this.$http.post('http://localhost:8080/api/gitclone', data)
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    background-color: #f9f9f9;
    height: 100%;
    display: flex;
    flex-direction: column;
    .app-header {
      height: 60px;
      background-color: #373d41;
      color: #fff;
    }
    .app-body {
      flex: 1;
      display: flex;
      .app-aside {
        width: 100px;
      }
      .app-main {
        padding: 30px;
        width: 0;
        flex: 1;
      }
    }
  }
</style>
