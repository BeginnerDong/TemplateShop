<template>
	<view class="bg-white h-100">
		<view class="d-flex a-center j-sb px-3 py-3 border1">
			<image class="icon1" src="../../static/images/addressl-icon5.png"></image>
			<view class="flex-1 pl-1">获取微信收获地址</view>
			<image class="icon2" src="../../static/images/addressl-icon4.png"></image>
		</view>
		
		<view class="px-3">
			<view class="border2 d-flex a-center py-4 j-sb">
				<view class="color2 font-28">姓名</view>
				<view class="color9 font-22">填写姓名</view>
			</view>
			<view class="border2 d-flex a-center py-4 j-sb">
				<view class="color2 font-28">手机号</view>
				<view class="color9 font-22">填写手机号</view>
			</view>
			<view class="border2 d-flex a-center py-4 j-sb">
				<view class="color2 font-28">所在地区</view>
				<view class="d-flex a-center">
					<view class="color9 font-22 pr-1">请选择</view>
					<image class="icon3" src="../../static/images/the order detailsl-icon2.png"></image>
				</view>
			</view>
			<view class="border2 d-flex a-center py-4 j-sb">
				<view class="color2 font-28">详细地址</view>
				<view class="color9 font-22">请填写</view>
			</view>
			<view class="border2 d-flex a-center py-4 j-sb">
				<view class="color2 font-28">设为默认地址</view>
				<image class="icon2" src="../../static/images/addressl-icon3.png"></image>
			</view>
		</view>
		
		<view class="btn2 mt-4">完成</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	uni-page-body{height: 100%;}
	.icon1{width: 36rpx;height: 30rpx;}
	.icon2{width: 67rpx;height: 34rpx;}
	.icon3{width: 12rpx;height: 22rpx;}
	
	.border1{border-bottom: 20rpx solid #f5f5f5;border-top: 1rpx solid #f5f5f5;}
	.border2{border-bottom: 1rpx solid #f5f5f5;}
	
	.btn{}
</style>
