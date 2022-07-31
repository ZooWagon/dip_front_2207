<template>
  <div>
    <h1>3-2-6 仿射变换结果</h1>
    <h3>提交编号: {{ sid }}</h3>
    <h3>提交时间: {{ stime }}</h3>
    <el-row>
      <el-col :span="12">
        <h3>第一个点原坐标: {{ para1 }}</h3>
        <h3>第二个点原坐标: {{ para2 }}</h3>
        <h3>第三个点原坐标: {{ para3 }}</h3>
      </el-col>
      <el-col :span="12">
        <h3>第一个点新坐标: {{ para4 }}</h3>
        <h3>第二个点新坐标: {{ para5 }}</h3>
        <h3>第三个点新坐标: {{ para6 }}</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <h3>旋转缩放后图片如下</h3>
          <img :src=this.img_url2 style="width: 95%; height: 95%" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <h3>提交图片如下</h3>
          <img :src=this.img_url1 style="width: 95%; height: 95%" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WarpAffineDisplay",
  data(){
    return{
      sid: '',
      stime: '',
      img1: '',
      img_url1: '',
      img_url2: '',
      para1: '',
      para2: '',
      para3: '',
      para4: '',
      para5: '',
      para6: ''
    }
  },
  created: function() {
    this.sid=this.$route.query.sid
    this.img1=this.$route.query.img1
    this.stime=this.$route.query.stime
    this.img_url1=axios.defaults.baseURL+ "/get_input_img/" + this.img1
    this.img_url2=axios.defaults.baseURL+ "/get_output_img/" + this.sid
    this.$axios
        .get('/get_warp_affine_submission/'+this.sid)
        .then((res) => {
          console.log(res)
          this.para1 = res.data.para1
          this.para2 = res.data.para2
          this.para3 = res.data.para3
          this.para4 = res.data.para4
          this.para5 = res.data.para5
          this.para6 = res.data.para6
        })
        .catch(function(error) {
          console.log(error)
        })
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
