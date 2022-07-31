<template>
  <div class="record-container">
    <h3 align="center">提交记录</h3>
    <el-table
        :data="recordTableData"
        height="500"
        style="width: 100%"
        :row-class-name="tableRowClassName"
    >
      <el-table-column label="提交ID" prop="sid" />
      <el-table-column label="类型" prop="stype" />
      <el-table-column label="提交时间" prop="stime" />
      <el-table-column label="当前状态" prop="status" />
      <el-table-column
          fixed="right"
          label="操作"
          width="100"
      >
        <template #default="scope">
          <el-button type="text" size="small" @click="checkResult(scope.row)">查看结果</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import submissionType from "../store/submissionType";
export default {
  name: "Record",
  data() {
    return {
      recordTableData: [],
      tcode2name: submissionType.tcode2name,
      tcode2url: submissionType.tcode2url
    }
  },
  mounted: function() {
    this.GetRecord()
  },
  methods: {
    GetRecord() {
      this.$axios
          .get('/get_record')
          .then((res) => {
            this.recordTableData = res.data
            var i
            for (i = 0; i < this.recordTableData.length; i++) {
              var r = this.recordTableData[i]
              r.tcode=r.stype
              r.stype=this.tcode2name[r.tcode]
            }
          })
          .catch(function(error) {
            console.log(error)
          })
    },
    checkResult(row) {
      if (row.status === '处理中') {
        this.$alert('提交正在运行，不能查看结果。请稍等并刷新页面重试。', '提示', {
          confirmButtonText: '确定',
          callback: (action) => {
          }
        })
        return
      }
      this.$router.replace({
        path: this.tcode2url[row.tcode],
        query: { sid: row.sid, stime: row.stime, img1: row.img1, img2: row.img2 }
      })
      // if (row.stype === '时钟识别') {
      //   this.$router.replace({
      //     path: '/record/clock_identify_display',
      //     query: { sid: row.sid, stime: row.stime, img1: row.img1, img2: row.img2 }
      //   })
      // } else if (row.stype === '风格迁移') {
      //   this.$router.replace({
      //     path: '/record/style_transfer_display',
      //     query: { sid: row.sid, stime: row.stime, img1: row.img1, img2: row.img2 }
      //   })
      // }
    },
    tableRowClassName({ row, rowIndex }) {
      var re = ''
      if (row.status === '错误') {
        re = 'failure-row'
      }
      if (row.status === '已完成') {
        re = 'success-row'
      }
      if (row.status === '处理中') {
        re = 'running-row'
      }
      return re
    }
    // StartTimeFormat(row, column) {
    //   var date = row[column.property]
    //   if (date === undefined) {
    //     return ''
    //   }
    //   return moment(date).format('YYYY-MM-DD HH:mm:ss')
    // }
  }
}
</script>

<style>
.el-table .failure-row {
  background: lightpink;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table .running-row {
  background: oldlace;
}
</style>
