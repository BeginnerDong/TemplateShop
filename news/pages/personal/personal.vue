<template>
	<view class="bg-white">
		<view class="personalBox">
			<view class="mx-3 py-3 d-flex j-sb a-center item">
				<view class="font-26 font1">头像</view>
				<image class="userImg" src="../../static/images/personal informationl-img.png"></image>
			</view>
			<view class="mx-3 py-3 d-flex j-sb a-center item">
				<view class="font-26 font1">昵称</view>
				<view class="font-28 font2">雨果果</view>
			</view>
			<view class="mx-3 py-3 d-flex j-sb a-center item">
				<view class="font-26 font1">姓名</view>
				<navigator url="../personalName/personalName" class="d-flex a-center">
					<view class="font-28 font2 pr-1">请输入</view>
					<image class="userIcon" src="../../static/images/the order detailsl-icon2.png"></image>
				</navigator>
			</view>
			<view class="mx-3 py-3 d-flex j-sb a-center item">
				<view class="font-26 font1">手机号</view>
				<navigator url="../personalPhone/personalPhone" class="d-flex a-center">
					<view class="font-28 font2 pr-1">15623451256</view>
					<image class="userIcon" src="../../static/images/the order detailsl-icon2.png"></image>
				</navigator>
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

<style scoped>
	.personalBox{border-top: 1px solid #f1f1f1;}
	
	.item{border-bottom: 1px solid #f1f1f1;}
	
	.font1{color: #666;}
	.font2{color: #222;}
	.userImg{width: 80rpx;height: 80rpx;}
	.userIcon{width: 11rpx;height: 20rpx;}
</style>
