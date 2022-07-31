<template>
  <div>
    <h3>简介</h3>
    <div class="introduction">
      &emsp;&emsp;数字图像处理是指将图像信号转换成数字信号并利用计算机对其进行处理的过程，主要包含图像变换、图像增强、图像分割、提取特征等等基本技术，本项目在实现这些基本技术的同时，还将这些技术落实到了两个具体场景之中。
      <br>&emsp;&emsp;第一，与卷积神经网络集合相结合，实现了图像风格迁移的功能。
      <br>&emsp;&emsp;第二，通过滤波、边缘提取、直线检测等等基本技术的组合实现了时钟识别的功能。
    </div>
    <h3>使用须知</h3>
    <div class="introduction">
      &emsp;&emsp;在左侧栏选择要使用的功能，上传图片并选择参数，然后到 提交记录 中查看结果。
      <br>&emsp;&emsp;本平台未设置用户，因此提交的图片和运行结果所有使用者均可见。
    </div>
    <h3>下载样例图片和python代码</h3>
      <el-button type="primary" plain size="small">
        <a :href=download_pic_py_zip_url>下载</a>
      </el-button>
    <h3>开发人员</h3>
    <div class="introduction">
      周孜为 10195101479@stu.ecnu.edu.cn
      <br>晏登科 10195101475@stu.ecnu.edu.cn
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      download_pic_py_zip_url: axios.defaults.baseURL + '/download_pic_py_zip'
    }
  },
  methods:{
    download_pic_py_zip(){
      axios({
        method: 'GET',
        url: '/download_pic_py_zip',
        responseType: 'blob'
      }).then(response => {
        if (response.data.type === 'application/octet-stream') {
          // 获取http头部的文件名信息，若无需重命名文件，将下面这行删去
          const fileName = response.headers['content-disposition'].split('=')[1]
          /* 兼容ie内核，360浏览器的兼容模式 */
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            const blob = new Blob([response.data], { type: 'application/zip' })
            window.navigator.msSaveOrOpenBlob(blob, fileName)
          } else {
            /* 火狐谷歌的文件下载方式 */
            const blob = new Blob([response.data], { type: 'application/zip' })
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a') // 创建a标签
            link.href = url
            link.download = fileName // 文件重命名，若无需重命名，将该行删去
            link.click()
            URL.revokeObjectURL(url) // 释放内存
          }
          resolve(response)
        } else {
          const reader = new FileReader()
          reader.onload = function(event) {
            const msg = JSON.parse(reader.result).data
            _this.$errorMsg(message) // 将错误信息显示出来
          }
          reader.readAsText(response.data)
        }
      }).catch(error => _this.$errorMsg(error) )
    }
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
.introduction {
  font-family: "Times New Roman", "华文细黑";
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  margin: 30px 60px;
  margin-top: 10px;
  margin-right: 150px;
  margin-bottom: 10px;
  margin-left: 150px;
}
</style>
