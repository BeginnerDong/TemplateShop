<template>
	<view class="h-100 bg-white h-100">
		<view class="nameBox d-flex flex-column a-center j-center h-100">
			<input type="text" placeholder="请输入自己的姓名" class="inp font-28 rounded10 text-center" />
			<view class="btn1 btn">完成</view>
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
	uni-page-body{height: 100%;}
	.nameBox{border-top: 1px solid #f1f1f1;margin: auto;height: 100%;}
	
	.inp{width: 600rpx;height: 80rpx;line-height: 80rpx;border: 1px solid #F1F1F1;}
	.uni-input-placeholder{color: #b6b6b6;}
	.btn{margin: 50rpx 0;}
</style>
