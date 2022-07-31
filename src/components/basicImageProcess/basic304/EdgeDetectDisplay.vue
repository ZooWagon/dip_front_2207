<template>
  <div>
    <h1>3-4-1 边缘检测结果</h1>
    <h3>提交编号: {{ sid }}</h3>
    <h3>提交时间: {{ stime }}</h3>
    <h3>边缘检测类型: {{ para1 }}</h3>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <h3>边缘检测图片如下</h3>
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
  name: "EdgeDetectDisplay",
  data(){
    return{
      sid: '',
      stime: '',
      img1: '',
      img_url1: '',
      img_url2: '',
      para1: ''
    }
  },
  created: function() {
    this.sid=this.$route.query.sid
    this.img1=this.$route.query.img1
    this.stime=this.$route.query.stime
    this.img_url1=axios.defaults.baseURL+ "/get_input_img/" + this.img1
    this.img_url2=axios.defaults.baseURL+ "/get_output_img/" + this.sid
    this.$axios
        .get('/get_line_detect_submission/'+this.sid)
        .then((res) => {
          console.log(res)
          this.para1 = res.data
          if(this.para1===1){
            this.para1='Roberts'
          }else if(this.para1===2){
            this.para1='Laplacian'
          }else if(this.para1===3){
            this.para1='Prewitt'
          }else if(this.para1===4){
            this.para1='Sobel'
          }else if(this.para1===5){
            this.para1='Canny'
          }
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
