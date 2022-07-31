<template>
  <div>
    <h1>风格迁移结果</h1>
    <h3>提交编号: {{ sid }}</h3>
    <h3>提交时间: {{ stime }}</h3>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <h3>提交风格图片如下</h3>
          <img :src=this.img_url1 style="width: 90%; height: 90%" />
<!--          <img :src=this.img_url1 style="width: 320px; height: 180px" />-->
<!--          <img :src=getImg(this.img_url1) :style=this.img_sty1 />-->
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <h3>提交内容图片如下</h3>
          <img :src=this.img_url2 style="width: 90%; height: 90%" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <div>
          <h3> </h3>
        </div>
      </el-col>
      <el-col :span="18">
        <h3>风格迁移图片如下</h3>
        <img :src=this.img_url3 style="width: 100%; height: 100%" />
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StyleTransferDisplay",
  data(){
    return{
      sid: '',
      stime: '',
      img1: '',
      img2: '',
      img_url1: '',
      img_url2: '',
      img_url3: ''
    }
  },
  created: function() {
    this.sid=this.$route.query.sid
    this.img1=this.$route.query.img1
    this.img2=this.$route.query.img2
    this.stime=this.$route.query.stime
    this.img_url1=axios.defaults.baseURL+ "/get_input_img/" + this.img1
    this.img_url2=axios.defaults.baseURL+ "/get_input_img/" + this.img2
    this.img_url3=axios.defaults.baseURL+ "/get_output_img/" + this.sid
  }
}
</script>

<style scoped>
h1 {
  font-family: "微软雅黑";
  font-size: 24px;
}
h3 {
  font-family: "微软雅黑";
  font-size: 18px;
  margin: 10px 0 10px;
}
.el-tip {
  font-family: "微软雅黑";
  font-size: 14px;
  color: #929497;
  margin: 10px 0 10px;
}
</style>
