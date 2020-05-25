<template>
	<view class="d-flex px-3 py-2">
		<image class="pic mr-2" src="../../static/images/logisticsl-img.png"></image>
		<view class="">
			<view class="font-24 color2">哆啦A梦</view>
			
			<view class="bg-white px-2 py-2 rounded10 mt-2">
				<view class="d-flex">
					<view class="point rounded-circle mr-1"></view>
					<text>平台小程序</text>
				</view>
				<view class="font-30 color2 line-h py-2 tit avoidOverflow">定制版Bigger团-夏日不晕妆54158</view>
				<view class="position-relative mb-2">
					<image class="img" src="../../static/images/detailal-img.png"></image>
					<view class="pay font-40 font-weight px-3 py-3">￥269</view>
				</view>
				
				<view class="d-flex borderT-f5 pt-2">
					<view class="point rounded-circle mr-1"></view>
					<text>小程序</text>
				</view>
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
			
		},
		components:{
			
		}
	}
</script>

<style scoped>
	.pic{width: 80rpx;height: 80rpx}
	.tit{width: 450rpx;}
	.point{width: 40rpx;height: 40rpx;background-color: #999999;}
	.img{width: 450rpx;height: 413rpx;}
	.pay{background-color: #E90000;color: #fff;border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;position: absolute;left: 0;right: 0;bottom: 0;}
</style>
