<template>
  <div>
    <h1>3-5-1 添加噪声结果</h1>
    <h3>提交编号: {{ sid }}</h3>
    <h3>提交时间: {{ stime }}</h3>
    <h3>噪声类型: {{ para1 }}</h3>
    <div v-if="para1==='高斯噪声'">
      <h3>均值: {{ para2 }}</h3>
      <h3>方差: {{ para3 }}</h3>
    </div>
    <div v-if="para1==='椒盐噪声'">
      <h3>椒噪声阈值: {{ para2 }}</h3>
      <h3>盐噪声阈值: {{ para3 }}</h3>
    </div>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <h3>添加噪声图片如下</h3>
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
  name: "AddNoiseDisplay",
  data(){
    return{
      sid: '',
      stime: '',
      img1: '',
      img_url1: '',
      img_url2: '',
      para1: '',
      para2: '',
      para3: ''
    }
  },
  created: function() {
    this.sid=this.$route.query.sid
    this.img1=this.$route.query.img1
    this.stime=this.$route.query.stime
    this.img_url1=axios.defaults.baseURL+ "/get_input_img/" + this.img1
    this.img_url2=axios.defaults.baseURL+ "/get_output_img/" + this.sid
    this.$axios
        .get('/get_add_noise_submission/'+this.sid)
        .then((res) => {
          console.log(res)
          this.para1 = res.data.para1
          this.para2 = res.data.para2
          this.para3 = res.data.para3
          if(this.para1==='1'){
            this.para1='高斯噪声'
          }else if(this.para1==='2'){
            this.para1='椒盐噪声'
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
