<template>
  <div class="Main">
    <el-main>
      <!--视图-->
      <div id="view">
        <el-collapse-transition>
          <router-view></router-view>
        </el-collapse-transition>
      </div>
    </el-main>
  </div>
</template>

<script>
  export default {
    name: "Main"
  }
</script>

<style scoped>

  .Main {
    width: 100%;
  }

  #view {
    height: calc(100vh - 180px);
    overflow: auto;
  }
</style>
