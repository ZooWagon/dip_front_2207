<template>
  <div>
    <h1>3-1-1 三通道分离结果</h1>
    <h3>提交编号: {{ sid }}</h3>
    <h3>提交时间: {{ stime }}</h3>
    <el-row>
      <el-col :span="8">
        <div class="grid-content">
          <h3>R通道如下</h3>
          <img :src=this.img_url1 style="width: 95%; height: 95%" />
          <!--          <img :src=this.img_url1 style="width: 320px; height: 180px" />-->
          <!--          <img :src=getImg(this.img_url1) :style=this.img_sty1 />-->
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <h3>G通道如下</h3>
          <img :src=this.img_url2 style="width: 95%; height: 95%" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <h3>B通道如下</h3>
          <img :src=this.img_url3 style="width: 95%; height: 95%" />
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
        <h3>提交图片如下</h3>
        <img :src=this.img_url4 style="width: 100%; height: 100%" />
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ThreeChannelDisplay",
  data(){
    return{
      sid: '',
      stime: '',
      img1: '',
      img_url1: '',
      img_url2: '',
      img_url3: '',
      img_url4: ''
    }
  },
  created: function() {
    this.sid=this.$route.query.sid
    this.img1=this.$route.query.img1
    this.stime=this.$route.query.stime
    this.img_url1=axios.defaults.baseURL+ "/get_output_img_three_channel_r/" + this.sid
    this.img_url2=axios.defaults.baseURL+ "/get_output_img_three_channel_g/" + this.sid
    this.img_url3=axios.defaults.baseURL+ "/get_output_img_three_channel_b/" + this.sid
    this.img_url4=axios.defaults.baseURL+ "/get_input_img/" + this.img1
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
