<template>
	<view class="px-3 py-2">
		<view class=" bg-white px-3 py-2 d-flex a-center mb-2 rounded">
			<image class="img1 mr-3" src="../../static/images/logisticsl-img.png"></image>
			<text class="font-28 font-weight color2">已配送</text>
		</view>
		
		<view class=" bg-white px-3 py-3 d-flex a-center mb-2 rounded">
			<image class="img2 mr-3" src="../../static/images/logisticsl-img1.png"></image>
			<view class="font-26 color6 line-h">
				<view class="pb-3">物流公司：顺丰</view>
				<view>物流单号：SF262358974825987</view>
			</view>
		</view>
		
		<view class="bg-white rounded pt-5 pb px-3 mb-5 position-relative">
			<view class="d-flex a-center j-sb">
				<view class="time"></view>
				<view class="font-26 shou text-center rounded-circle mr-2">收</view>
				<view class="font-26 color2 gps avoidOverflow2">陕西省西安市雁塔区科技路高新大都荟A座2209</view>
			</view>
			<view class="d-flex a-center j-sb line-h my-5" v-for="(v,i) in news">
				<view class="time text-center">
					<view class="font-24 color2 pb-1">{{v.mouth}}</view>
					<view class="font-24 color6">{{v.time}}</view>
				</view>
				<view class="point rounded-5 mr-2"></view>
				<view class="font-26 color6 gps avoidOverflow">{{v.address}}</view>
			</view>
			
			<view class="line" :style="line"></view>
			
		</view>
				
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news:[
					{
						'mouth':'04-16',
						'time':'11:20',
						'address':'快件到达【西安分拨中心】'
					},{
						'mouth':'04-15',
						'time':'16:48',
						'address':'快件到达【黄州分拨中心】'
					},{
						'mouth':'04-12',
						'time':'9:09',
						'address':'快件等待包揽'
					}
				],
				line:{
					'height':'330rpx'
				}
			}
		},
		methods: {
			
		},
		onLoad(){
			this.line.height = this.news.length * 110 + 'rpx';
		}
	}
</script>

<style scoped>
	.img1{width: 60rpx;height: 60rpx;}
	.img2{width: 80rpx;height: 80rpx;}
	
	.shou{width: 50rpx;height: 50rpx;line-height: 50rpx;background-color: #FF4E46;color: #fff;z-index: 2;}
	.time{width: 100rpx;}
	.point{width: 14rpx;height: 14rpx;background-color: #dcdddc;}
	.gps{width: 460rpx;}
	.line{width: 2rpx;background-color: #e1e1e1;position: absolute;top: 87.5rpx;left: 155rpx;}
</style>
