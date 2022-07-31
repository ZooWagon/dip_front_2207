const tcode2name =
{
    1: '1 风格迁移', 2: '2 时钟识别',
    3011: '3-1-1 三通道分离', 3012: '3-1-2 灰度化', 3013:'3-1-3 二值化',
    3021: '3-2-1 重设尺寸', 3022: '3-2-2 图片平移', 3023: '3-2-3 镜像翻转',
    3024: '3-2-4 图片缩放', 3025: '3-2-5 旋转缩放', 3026: '3-2-6 仿射变换',
    3031: '3-3-1 区域生长法图像分割', 3032: '3-3-2 分裂合并法图像分割',
    3040: '3-4-1 边缘检测', 3046: '3-4-2 霍夫直线检测',
    3051: '3-5-1 添加噪声', 3052: '3-5-2 去除噪声',
    3061: '3-6-1 高通滤波', 3062: '3-6-2 微分法', 3063: '3-6-3 反掩膜锐化法'
}


const tcode2url =
{
    1: '/record/style_transfer_display',
    2: '/record/clock_identify_display',
    3011: '/basic301/three_channel_display',
    3012: '/basic301/bgr2gray_display',
    3013: '/basic301/binarization_display',
    3021: '/basic302/resize_display',
    3022: '/basic302/translation_display',
    3023: '/basic302/mirror_flip_display',
    3024: '/basic302/zoom_display',
    3025: '/basic302/rotate_display',
    3026: '/basic302/warp_affine_display',
    3031: '/basic303/region_grow_display',
    3032: '/basic303/split_and_merge_display',
    3040: '/basic304/edge_detect_display',
    3046: '/basic304/hough_line_display',
    3051: '/basic305/add_noise_display',
    3052: '/basic305/remove_noise_display',
    3061: '/basic306/highpass_filter_display',
    3062: '/basic306/differentiation_display',
    3063: '/basic306/antishaped_mask_display'
}


export default {
    tcode2name,
    tcode2url
}
