<template>
  <!--主框架页面-->
  <Content v-if="isLogin.success"></Content>
  <!--登录组件-->
  <Login v-else="isLogin.success"></Login>
</template>
<script>
  // 引入框架组件
  import Content from './components/common/Content'
  // 引入登录界面组件
  import Login from './components/modules/Login'

  export default {
    name: 'App',
    data() {
      return {
        /**
         * 登录对象
         * */
        isLogin: {success: true, token: ""}
      }
    },
    components: {
      Content,
      Login
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
  body ::-webkit-scrollbar { /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    width: 8px;
    height: 8px;
    background-color: #fff;
  }

  body ::-webkit-scrollbar-track { /*定义滚动条轨道 内阴影+圆角*/
    background-color: #545c64;
    border-radius: 0 0;
  }

  body ::-webkit-scrollbar-thumb { /*定义滑块 内阴影+圆角*/
    background-color: #b3babf;
  }
</style>
