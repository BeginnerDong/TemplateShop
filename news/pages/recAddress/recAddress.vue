<template>
	<view class="address">
		<view class="bg-white py-4 addCard px-3 bor-t" v-for="(v,i) in address" :key="i">
			<view class="pb-3">
				<text class="font-28 pr-3 font1">张丹丹</text>
				<text class="font-24 font2">15638569854</text>
			</view>
			<view class="pb-3 font2 font-26">陕西省西安市雁塔区高新路高新大都荟</view>
			<view class="d-flex">
				<view class="d-flex a-center flex-1">
					<image class="icon1" :src="v"></image>
					<text class="font3 font-24 pl-1">默认地址</text>
				</view>
				<view class="d-flex a-center">
					<image class="icon2" src="../../static/images/addressl-icon1.png"></image>
					<text class="font3 font-24 pl-1">编辑</text>
				</view>
				<view class="d-flex a-center">
					<image class="icon2" src="../../static/images/addressl-icon.png"></image>
					<text class="font3 font-24 pl-1">删除</text>
				</view>
			</view>
		</view>
		
		<!-- 新增地址 -->
		<navigator url="../addAddress/addAddress">
			<view class="d-flex a-center j-center py-3 bor-t btn bg-white">
				<image class="icon3 mr-2" src="../../static/images/addressl-icon2.png"></image>
				<view class="">新增地址</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:[
					'../../static/images/shopping-icon.png',
					'../../static/images/shopping-icon1.png'
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.font1{color: #222;}
	.font2{color: #666;}
	.font3{color: #999;}
	
	.addCard{border-bottom: 20rpx solid #f5f5f5;}
	
	.bor-t{border-top: 1px solid #f5f5f5;}
	
	.icon1{width: 32rpx;height: 32rpx;}
	.icon2{width: 26rpx;height: 26rpx;margin-left: 60rpx;}
	.icon3{width: 30rpx;height: 30rpx;}
	
	.btn{position: fixed;left: 0;right: 0;bottom: 0;}
</style>
