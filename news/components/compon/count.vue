<template>
	<view class="bg-white">
		<view class="num d-flex text-center a-center">
			<view class="numBtn">
				<image class="numIcon1 position-absoluteXY m-a" src="../../static/images/shopping-icon4.png"></image>
			</view>
			<view class="flex-1 numTxt">1</view>
			<view class="numBtn">
				<image class="numIcon2 position-absoluteXY m-a" src="../../static/images/shopping-icon5.png"></image>
			</view>
		</view>
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

<style>
	.num{width: 150rpx;height: 40rpx;border: 1px solid #d6d6d6;}
	.numTxt{border-left: 1px solid #d6d6d6;border-right: 1px solid #d6d6d6;}
	.numIcon1{width: 20rpx;height: 2rpx;}
	.numIcon2{width: 20rpx;height: 20rpx;}
	.numBtn{width: 40rpx;height:40rpx;position: relative;}
</style>
