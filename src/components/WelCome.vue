<template>
  <div>
    <el-container class="home_container">
      <el-header height="100px">
        <div class="home_title">数字图像处理平台</div>
      </el-header>
      <el-main>
        <div align="center">
          <h1>欢迎</h1>
          <el-button
              type="primary"
              round
              @click="enter"
          >
            开始使用
          </el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "WelCome",
  methods:{
    enter(){
      this.$router.replace({path: "/home"});
    }
  }
}
</script>

<style scoped>

</style>
