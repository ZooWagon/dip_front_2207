import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import Home from "../components/Home";
import Model from "../components/Model";
import WelCome from "../components/WelCome";
import ClockIdentify from "../components/clockIdentify/ClockIdentify";
import Record from "../components/Record";
import ClockIdentifyDisplay from "../components/clockIdentify/ClockIdentifyDisplay";
import StyleTransfer from "../components/styleTransfer/StyleTransfer";
import StyleTransferDisplay from "../components/styleTransfer/StyleTransferDisplay";
import ThreeChannel from "../components/basicImageProcess/basic301/ThreeChannel";
import ThreeChannelDisplay from "../components/basicImageProcess/basic301/ThreeChannelDisplay";
import BGR2GRAY from "../components/basicImageProcess/basic301/BGR2GRAY";
import BGR2GRAYDisplay from "../components/basicImageProcess/basic301/BGR2GRAYDisplay";
import Binarization from "../components/basicImageProcess/basic301/Binarization";
import BinarizationDisplay from "../components/basicImageProcess/basic301/BinarizationDisplay";
import Resize from "../components/basicImageProcess/basic302/Resize";
import ResizeDisplay from "../components/basicImageProcess/basic302/ResizeDisplay";
import Translation from "../components/basicImageProcess/basic302/Translation";
import TranslationDisplay from "../components/basicImageProcess/basic302/TranslationDisplay";
import MirrorFlip from "../components/basicImageProcess/basic302/MirrorFlip";
import MirrorFlipDisplay from "../components/basicImageProcess/basic302/MirrorFlipDisplay";
import Zoom from "../components/basicImageProcess/basic302/Zoom";
import ZoomDisplay from "../components/basicImageProcess/basic302/ZoomDisplay";
import Rotate from "../components/basicImageProcess/basic302/Rotate";
import RotateDisplay from "../components/basicImageProcess/basic302/RotateDisplay";
import WarpAffine from "../components/basicImageProcess/basic302/WarpAffine";
import WarpAffineDisplay from "../components/basicImageProcess/basic302/WarpAffineDisplay";
import RegionGrow from "../components/basicImageProcess/basic303/RegionGrow";
import RegionGrowDisplay from "../components/basicImageProcess/basic303/RegionGrowDisplay";
import SplitAndMerge from "../components/basicImageProcess/basic303/SplitAndMerge";
import SplitAndMergeDisplay from "../components/basicImageProcess/basic303/SplitAndMergeDisplay";
import EdgeDetect from "../components/basicImageProcess/basic304/EdgeDetect";
import EdgeDetectDisplay from "../components/basicImageProcess/basic304/EdgeDetectDisplay";
import HoughLine from "../components/basicImageProcess/basic304/HoughLine";
import HoughLineDisplay from "../components/basicImageProcess/basic304/HoughLineDisplay";
import AddNoise from "../components/basicImageProcess/basic305/AddNoise";
import AddNoiseDisplay from "../components/basicImageProcess/basic305/AddNoiseDisplay";
import RemoveNoise from "../components/basicImageProcess/basic305/RemoveNoise";
import RemoveNoiseDisplay from "../components/basicImageProcess/basic305/RemoveNoiseDisplay";
import HighpassFilter from "../components/basicImageProcess/basic306/HighpassFilter";
import HighpassFilterDisplay from "../components/basicImageProcess/basic306/HighpassFilterDisplay";
import Differentiation from "../components/basicImageProcess/basic306/Differentiation";
import DifferentiationDisplay from "../components/basicImageProcess/basic306/DifferentiationDisplay";
import AntishapedMask from "../components/basicImageProcess/basic306/AntishapedMask";
import AntishapedMaskDisplay from "../components/basicImageProcess/basic306/AntishapedMaskDisplay";

Vue.use(VueRouter)

const routes = [
  {
    path: '/model',
    name: 'model',
    component: Model,
    children: [
      {
        path:'/home',
        name:'home',
        component: Home
      },
      {
        path:'/record',
        name:'record',
        component: Record
      },
      {
        path:'/clock_identify',
        name:'ClockIdentify',
        component: ClockIdentify
      },
      {
        path: '/record/clock_identify_display',
        name: 'ClockIdentifyDisplay',
        component: ClockIdentifyDisplay
      },
      {
        path:'/style_transfer',
        name:'StyleTransfer',
        component: StyleTransfer
      },
      {
        path:'/record/style_transfer_display',
        name:'StyleTransferDisplay',
        component: StyleTransferDisplay
      },
      {
        path: '/basic301/three_channel',
        name: 'ThreeChannel',
        component: ThreeChannel
      },
      {
        path: '/basic301/three_channel_display',
        name: 'ThreeChannelDisplay',
        component: ThreeChannelDisplay
      },
      {
        path: '/basic301/bgr2gray',
        name: 'BGR2GRAY',
        component: BGR2GRAY
      },
      {
        path: '/basic301/bgr2gray_display',
        name: 'BGR2GRAYDisplay',
        component: BGR2GRAYDisplay
      },
      {
        path: '/basic301/binarization',
        name: 'Binarization',
        component: Binarization
      },
      {
        path: '/basic301/binarization_display',
        name: 'BinarizationDisplay',
        component: BinarizationDisplay
      },
      {
        path: '/basic302/resize',
        name: 'Resize',
        component: Resize
      },
      {
        path: '/basic302/resize_display',
        name: 'ResizeDisplay',
        component: ResizeDisplay
      },
      {
        path: '/basic302/translation',
        name: 'Translation',
        component: Translation
      },
      {
        path: '/basic302/translation_display',
        name: 'TranslationDisplay',
        component: TranslationDisplay
      },
      {
        path: '/basic302/mirror_flip',
        name: 'MirrorFlip',
        component: MirrorFlip
      },
      {
        path: '/basic302/mirror_flip_display',
        name: 'MirrorFlipDisplay',
        component: MirrorFlipDisplay
      },
      {
        path: '/basic302/zoom',
        name: 'Zoom',
        component: Zoom
      },
      {
        path: '/basic302/zoom_display',
        name: 'ZoomDisplay',
        component: ZoomDisplay
      },
      {
        path: '/basic302/rotate',
        name: 'Rotate',
        component: Rotate
      },
      {
        path: '/basic302/rotate_display',
        name: 'RotateDisplay',
        component: RotateDisplay
      },
      {
        path: '/basic302/warp_affine',
        name: 'WarpAffine',
        component: WarpAffine
      },
      {
        path: '/basic302/warp_affine_display',
        name: 'WarpAffineDisplay',
        component: WarpAffineDisplay
      },
      {
        path: '/basic303/region_grow',
        name: 'RegionGrow',
        component: RegionGrow
      },
      {
        path: '/basic303/region_grow_display',
        name: 'RegionGrowDisplay',
        component: RegionGrowDisplay
      },
      {
        path: '/basic303/split_and_merge',
        name: 'SplitAndMerge',
        component: SplitAndMerge
      },
      {
        path: '/basic303/split_and_merge_display',
        name: 'SplitAndMergeDisplay',
        component: SplitAndMergeDisplay
      },
      {
        path: '/basic304/edge_detect',
        name: 'LineDetect',
        component: EdgeDetect
      },
      {
        path: '/basic304/edge_detect_display',
        name: 'LineDetectDisplay',
        component: EdgeDetectDisplay
      },
      {
        path: '/basic304/hough_line',
        name: 'HoughLine',
        component: HoughLine
      },
      {
        path: '/basic304/hough_line_display',
        name: 'HoughLineDisplay',
        component: HoughLineDisplay
      },
      {
        path: '/basic305/add_noise',
        name: 'AddNoise',
        component: AddNoise
      },
      {
        path: '/basic305/add_noise_display',
        name: 'AddNoiseDisplay',
        component: AddNoiseDisplay
      },
      {
        path: '/basic305/remove_noise',
        name: 'RemoveNoise',
        component: RemoveNoise
      },
      {
        path: '/basic305/remove_noise_display',
        name: 'RemoveNoiseDisplay',
        component: RemoveNoiseDisplay
      },
      {
        path: '/basic306/highpass_filter',
        name: 'HighpassFilter',
        component: HighpassFilter
      },
      {
        path: '/basic306/highpass_filter_display',
        name: 'HighpassFilterDisplay',
        component: HighpassFilterDisplay
      },
      {
        path: '/basic306/differentiation',
        name: 'Differentiation',
        component: Differentiation
      },
      {
        path: '/basic306/differentiation_display',
        name: 'DifferentiationDisplay',
        component: DifferentiationDisplay
      },
      {
        path: '/basic306/antishaped_mask',
        name: 'AntishapedMask',
        component: AntishapedMask
      },
      {
        path: '/basic306/antishaped_mask_display',
        name: 'AntishapedMaskDisplay',
        component: AntishapedMaskDisplay
      },
      {
        path:'/helloworld',
        name:'hello',
        component: HelloWorld
      }
    ]
  },
  {
    path: '/',
    name: '',
    component: WelCome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
