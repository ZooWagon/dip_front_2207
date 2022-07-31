<template>
  <div class="clock-display">
    <h1>时钟识别结果</h1>
    <h3>提交编号: {{ sid }}</h3>
    <h3>提交时间: {{ tableData.stime }}</h3>
    <el-row>
      <el-col :span="8">
        <div class="grid-content">
          <h3>提交时钟图片如下</h3>
          <img :src=this.img_url style="width: 90%; height: 90%" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <h3>对时钟指针识别图片如下</h3>
          <img :src=this.img_url_clock style="width: 90%; height: 90%" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <h3>识别后二值化图片如下</h3>
          <img :src=this.img_url_edge style="width: 90%; height: 90%" />
        </div>
      </el-col>
    </el-row>
    <h3>识别时钟得到时间: {{ tableData.iden_time }}</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ClockIdentifyDisplay",
  data(){
    return{
      sid: '',
      img: '',
      img_url: '',
      img_url_clock: '',
      img_url_edge: '',
      tableData: {
        stime: '0',
        iden_time: '0'
      },
    }
  },
  created: function() {
    this.sid=this.$route.query.sid
    this.img=this.$route.query.img1
    this.img_url=axios.defaults.baseURL+ "/get_input_img/" + this.img
    this.img_url_clock=axios.defaults.baseURL+ "/get_clock_img_clock/" + this.sid
    this.img_url_edge=axios.defaults.baseURL+ "/get_clock_img_edge/" + this.sid
    this.$axios
        .get('/get_clock_submission/'+this.sid)
        .then((res) => {
          console.log(res)
          this.tableData = res.data
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
