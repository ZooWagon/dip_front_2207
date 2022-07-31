<template>

  <div>
    <el-container class="home_container">
      <el-header height="100px">
        <div class="home_title">数字图像处理平台</div>
      </el-header>
      <el-container>
        <el-aside width="200px">

          <el-menu default-active="1" class="el-menu-vertical-demo" router :unique-opened="true">
            <el-menu-item index="/home">
              <template slot="title">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/record">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">提交记录</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/style_transfer">
              <template slot="title">
                <i class="el-icon-s-promotion"></i>
                <span slot="title">1 风格迁移</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/clock_identify">
              <template slot="title">
                <i class="el-icon-time"></i>
                <span slot="title">2 时钟识别</span>
              </template>
            </el-menu-item>

            <el-submenu index="/basic" >
              <template slot="title">
                <i class="el-icon-picture"></i>
                <span slot="title">3 基本图像处理</span>
              </template>

              <el-submenu index="/basic301">
                <template slot="title">
                  3-1 图像色彩
                </template>
                <el-menu-item index="/basic301/three_channel">
                  3-1-1 三通道分离
                </el-menu-item>
                <el-menu-item index="/basic301/bgr2gray">
                  3-1-2 灰度化
                </el-menu-item>
                <el-menu-item index="/basic301/binarization">
                  3-1-3 二值化
                </el-menu-item>
              </el-submenu>

              <el-submenu index="/basic302">
                <template slot="title">
                  3-2 仿射变换
                </template>
                <el-menu-item index="/basic302/resize">
                  3-2-1 重设尺寸
                </el-menu-item>
                <el-menu-item index="/basic302/translation">
                  3-2-2 图片平移
                </el-menu-item>
                <el-menu-item index="/basic302/mirror_flip">
                  3-2-3 镜像翻转
                </el-menu-item>
                <el-menu-item index="/basic302/zoom">
                  3-2-4 图片缩放
                </el-menu-item>
                <el-menu-item index="/basic302/rotate">
                  3-2-5 旋转缩放
                </el-menu-item>
                <el-menu-item index="/basic302/warp_affine">
                  3-2-6 仿射变换
                </el-menu-item>
              </el-submenu>

              <el-submenu index="/basic303">
                <template slot="title">
                  3-3 图像分割
                </template>
                <el-menu-item index="/basic303/region_grow">
                  3-3-1 区域生长法
                </el-menu-item>
                <el-menu-item index="/basic303/split_and_merge">
                  3-3-2 分裂合并法
                </el-menu-item>
              </el-submenu>

              <el-submenu index="/basic304">
                <template slot="title">
                  3-4 边缘/直线检测
                </template>
                <el-menu-item index="/basic304/edge_detect">
                  3-4-1 边缘检测
                </el-menu-item>
                <el-menu-item index="/basic304/hough_line">
                  3-4-2 霍夫直线检测
                </el-menu-item>
              </el-submenu>

              <el-submenu index="/basic305">
                <template slot="title">
                  3-5 添加/去除噪声
                </template>
                <el-menu-item index="/basic305/add_noise">
                  3-5-1 添加噪声
                </el-menu-item>
                <el-menu-item index="/basic305/remove_noise">
                  3-5-2 去除噪声
                </el-menu-item>
              </el-submenu>

              <el-submenu index="/basic306">
                <template slot="title">
                  3-6 图像锐化
                </template>
                <el-menu-item index="/basic306/highpass_filter">
                  3-6-1 高通滤波
                </el-menu-item>
                <el-menu-item index="/basic306/differentiation">
                  3-6-2 微分法
                </el-menu-item>
                <el-menu-item index="/basic306/antishaped_mask">
                  3-6-3 反掩码锐化法
                </el-menu-item>
              </el-submenu>

            </el-submenu>

<!--            <el-menu-item index="/helloworld">-->
<!--              <template slot="title">-->
<!--                <i class="el-icon-office-building"></i>-->
<!--                <span slot="title">泥嚎</span>-->
<!--              </template>-->
<!--            </el-menu-item>-->
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
<!--            <h2>model</h2>-->
            <router-view></router-view>
<!--            <keep-alive>-->
<!--              <router-view v-if="this.$route.meta.keepAlive"></router-view>-->
<!--            </keep-alive>-->
<!--            <router-view v-if="!this.$route.meta.keepAlive"></router-view>-->
          </el-main>
        </el-container>

      </el-container>
    </el-container>
  </div>
</template>
<script>
import {getRequest} from '../utils/api'
import {postRequest} from '../utils/api'
export default{
  mounted: function() {

  },
  methods: {

  },

  data(){
    return {
    }
  }
}
</script>
<style>
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.el-header {
  background-color: #00BFFF;
  color: #333;
  text-align: center;
  align-items: center;
  line-height: 100px;

}

.el-aside {
  background-color: #ECECEC;
}

.el-main {
  background-color: #fff;
  color: #000;
  text-align: center;
}

.home_title {
  color: #FFFAF0;
  font-size: 35px;
  display: inline;
}
</style>
