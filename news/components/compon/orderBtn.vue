<template>
	<view class="btnBox bg-white d-flex text-center rounded10 a-center mx-3">
		<view class="w-50" :class="bool?'active':''" @click="chooes(true)">到店自提</view>
		<view class="w-50" :class="bool?'':'active'" @click="chooes(false)">快递配送</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			chooes(type){
				this.bool = !this.bool;
				this.$emit('change',type)
			}
		},
		props:{
			'bool':Boolean
		}
		
	}
</script>

<style scoped>
	.btnBox{border: 1px solid #FF4E46;height: 60rpx;width: 690rpx;line-height: 60rpx;}
	.active2{color: #FFF;background-color: #FF4E46;}
</style>
