<template>
	<view>
		<view class="bor-t">
			<view class="bor-b bg-white px-3 py-4 d-flex a-center j-sb" v-for="(v,i) in icon" :key="i">
				<view class="">
					<view class="font-28 color2 font1 pb-3">中华世纪城智能柜机</view>
					<view class="font-26 color6 font2">西安市雁塔区高新路西段239号中华世纪城</view>
				</view>
				<image :src="v" class="icon"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon:[
					'../../static/images/shopping-icon.png',
					'../../static/images/shopping-icon1.png',
					'../../static/images/shopping-icon1.png'
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.bor-b{border-bottom: 20rpx solid #f5f5f5;}
	.bor-t{border-top: 1px solid #f5f5f5;}
	
	.icon{width: 32rpx;height: 32rpx;}
	.font1{line-height: 28rpx;}
	.font2{line-height: 26rpx;}
</style>
