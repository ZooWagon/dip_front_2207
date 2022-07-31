<template>
  <div class="clock">
    <h1>3-1-1 三通道分离</h1>
    <div>
      <el-upload
          ref="pic-upload"
          :action="upload_img_addr"
          name="file"
          multiple
          :on-success="handleSuccessPic"
          :before-upload="beforeUploadPic"
          list-type="picture"
          :limit = "1"
      >
        <el-button size="small" type="primary">上传图片</el-button>
        <template #tip>
          <div class="el-tip">
            请上传一张JPG或PNG图片
          </div>
        </template>
      </el-upload>
      <div align="center">
        <el-button
            type="primary"
            round
            @click="submit_para"
        >
          提交
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ThreeChannel',
  data(){
    return{
      paraPacket: {
        sid: '',
        stime: '1970-1-1 00:00:00',
        stype: '3011',
        img1: 'img1', img2: '',
        para1: '', para2: '', para3: '', para4: '', para5: '', para6: '', para7: '', para8: '',
        status: '处理中'
      },
      upload_img_addr: axios.defaults.baseURL+"/upload_image"
    }
  },
  methods: {
    handleSuccessPic(response, file) {
      console.log('handleSuccessPic')
      console.log(response)
      console.log(file)
      if (response.status !== 200) {
        this.$alert('图片上传失败！请重试或联系开发者。', '提示', {
          confirmButtonText: '确定',
          callback: () => {
          }
        })
        return
      }else{
        this.paraPacket.img1=response.info
        console.log(this.paraPacket)
      }
      console.log('handleSuccessPic end')
    },
    async beforeUploadPic(file) {
      // :before-upload="beforeUploadPic"
      console.log('beforeUploadPic')
      console.log(file)
      if (!this.checkPicFormat(file)) {
        console.log('format error')
        this.$message.error('请上传JPG/PNG图片。')
        return Promise.reject()
      }
    },
    checkPicFormat(file) {
      // check format
      var isFormat = true
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        isFormat = false
      }
      return isFormat
    },
    async submit_para() {
      await this.get_sid()
      await this.post_para()
    },
    async get_sid() {
      // get sid and put into paraPacket
      await this.$axios
          .get('/get_sid')
          .then((res) => {
            console.log(res)
            this.paraPacket.sid = res.data
          })
          .catch(function(error) {
            console.log(error)
          })
    },
    async post_para() {
      console.log('post para')
      console.log(this.paraPacket)
      var isSuccess = false
      // post parameter
      await this.$axios
          .post('/three_channel',this.paraPacket)
          .then((res) => {
            console.log(res)
            if (res.data.status === 200) {
              isSuccess = true
              this.$alert('提交成功。处理编号为：' + this.paraPacket.sid + "。请从 提交记录 栏查看结果。", '提示', {
                confirmButtonText: '确定',
                callback: (action) => {
                }
              })
            } else {
              this.$alert('提交失败！处理编号为：' + this.paraPacket.sid, '提示', {
                confirmButtonText: '确定',
                callback: (action) => {
                }
              })
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      if (isSuccess) {
        this.$router.replace({ path: '/home' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
