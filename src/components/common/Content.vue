<template>
  <div class="Content">
    <el-container>
      <el-aside width="200px">
        <!-- 左側導航菜单 -->
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-container>
          <!-- 头部导航栏 -->
          <Header></Header>
          <!-- 主要区域容器 -->
          <Main></Main>
          <!-- 底栏容器 -->
          <Footer></Footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // 左側導航菜单
  import Aside from '../navs/Aside'
  // 头部导航栏
  import Header from '../navs/Header'
  // 主要区域容器
  import Main from '../navs/Main'
  // 底栏容器
  import Footer from '../navs/Footer'

  export default {
    name: "Content",
    data() {
      return {}
    },
    methods: {},
    components: {
      Aside,
      Header,
      Main,
      Footer
    }
  }
</script>

<style>

  /*头部导航栏*/
  .el-header {
    padding: 0px;
  }

  /*左側導航菜单*/
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  /*主要区域容器*/
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0;
  }

  /*底栏容器*/
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /*身体区*/
  .Content {
    padding: 120px 0px 60px 200px;
  }

  /*头部导航区*/
  header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    left: 200px;
  }

  /*左侧菜单栏*/
  aside {
    /**固定定位*/
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    z-index: 999;
  }

  /**脚部*/
  footer {
    display: block;
    position: fixed;
    /**兼容*/
    width: -moz-calc(100% - 265px);
    width: -webkit-calc(100% - 265px);
    width: calc(100% - 265px);
    width: 100%;
    height: 30px;
    bottom: 0;
    left: 200px;
    right: 0;
    z-index: 998;
  }
</style>
