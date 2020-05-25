<template>
	<view class="subscribe py-2 d-flex flex-column a-center">
		<view class="color2 bg-white py-4 px-2 mx-3 mb-2 rounded10 card">
			<view class="font-30 font1 pb-3">门店名称门市</view>
			<view class="font-28 font2">陕西省西安市查案去韦曲街道</view>
		</view>
		<view class="card color2 bg-white py-4 px-2 mx-3 mb-2 rounded10 d-flex a-center j-sb">
			<view class="font-28 color2">预约时间</view>
			<view class="d-flex a-center">
				<view class="font-24 pr-1 color6">2020.04.23 14:00</view>
				<image class="icon" src="../../static/images/the order detailsl-icon2.png"></image>
			</view>
		</view>
		
		
		<view class="btn btn1" @click="go()">确定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			go(){
				wx.navigateBack(-1)
			}
		}
	}
</script>

<style scoped>
	uni-page-body{height: 100%;}
	.subscribe{background-color: #F5F5F5;height: 100%;}
	
	.card{width: 690rpx;}
	
	.font1{line-height: 30rpx;}
	.font2{line-height: 28rpx;}
	
	.icon{width: 12rpx;height: 22rpx;}
	
	.btn{margin-top: 350rpx;}
</style>
