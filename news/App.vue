
<script>
	import token from "./common/token.js"
	export default {
		onLaunch: function() {	
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 富文本样式 */
	@import "/assets/style/quill.css";
	
	
	/* 公共样式 */
	@import "/common/css/common.css";
	/* 公共样式 */
	@import "/common/css/main.css";
	
	uni-swiper .uni-swiper-dots-horizontal{line-height: 16rpx;bottom: 5px;}
	
	uni-tabbar .uni-tabbar__icon{width: 44rpx;height: 44rpx;}
	uni-page-head .uni-page-head__title{font-weight: normal;}
	/* uni-swiper .uni-swiper-dot{width: 12rpx;height: 6rpx;border-radius: 6rpx;background-color: #c5c5c5;}
	uni-swiper .uni-swiper-dot-active{width: 20rpx;} */
	.ql-editor img{max-width: 100%;margin: 0 auto;}
	.detailBanner .uni-swiper-dots{bottom: 30rpx;}
	
	uni-page-body,uni-page-wrapper{background-color: #F5f5f5;}
	
	
	.proSpan{width: 60rpx;height: 32rpx;border: 1px solid #b5b5b5;color: #666;text-align: center;line-height: 30rpx;border-radius: 5rpx;}
	.zfBtn{color: #fff;text-align: center;background-color: #FF4E46;width: 300rpx;height: 100rpx;line-height: 100rpx;}
	.btn1{width: 600rpx;height: 80rpx;background-color: #FF4E46;line-height: 80rpx;color: #fff;font-size: 28rpx;border-radius: 10rpx;text-align: center;}
	.btn2{width: 690rpx;height: 80rpx;background-color: #FF4E46;line-height: 80rpx;color: #fff;font-size: 28rpx;border-radius: 10rpx;text-align: center;margin-left: 30rpx;}
	
	.shopImg2{width: 160rpx;height: 160rpx;}
	
	.active{color: #FF4E46;background: url(@/static/images/bg-icon.png) no-repeat center bottom;background-size: 30rpx 6rpx;}
</style>
