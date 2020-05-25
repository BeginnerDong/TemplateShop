<template>
	<view class="bg-white h-100">
		<view class="phoneBox d-flex flex-column a-center" v-if="flag">
			<image class="phoneImg img1" src="../../static/images/personal informationl-icon1.png"></image>
			<view class="font-28 font1">绑定手机号：12365865874</view>
			<view class="btn1 btn" @click="choose()">更换手机号</view>
		</view>
		
		<view class="phoneBox d-flex flex-column a-center" v-else>
			<image class="phoneImg img2" src="../../static/images/personal informationl-icon.png"></image>
			<input type="text" placeholder="请输入手机号" class="inp font-28"/>
			<view class="position-relative">
				<input type="text" placeholder="请输入验证码" class="inp font-28"/>
				<view class="position-absolute font3 font-weight right-0">获取验证码</view>
			</view>
			<view class="btn1 btn">完成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:true
			}
		},
		methods: {
			choose(){
				this.flag = !this.flag;
			}
		}
	}
</script>

<style scoped>
	uni-page-body{height: 100%;}
	.phoneBox{border-top: 1px solid #f1f1f1;}
	
	.phoneImg{height: 222rpx;margin-bottom: 74rpx;margin-top: 150rpx;}
	.img1{width: 174rpx;}
	.img2{width: 138rpx;}
	.font1{color: #222;}
	.font2{color: #fff;}
	.font3{color: #FF4E46;top: 20rpx;}
	.inp{width: 600rpx;height: 80rpx;line-height: 80rpx;border-bottom: 1px solid #F1F1F1;}
	.uni-input-placeholder{color: #b6b6b6;}
	.btn{margin-top: 110rpx;}
</style>
