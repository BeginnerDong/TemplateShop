<template>
	<view class="pt-2">
		<OrderCard :data="data"></OrderCard>
		
		<view class="comm mx-3 bg-white rounded10 d-flex flex-column px-3 py-3">
			<textarea class="commCon font-24 flex-1" placeholder="请填写商品评论,让更多人知道" />
			<view class="d-flex a-center">
				<image class="uploadIcon mr-2" src="../../static/images/commentsl-icon.png"></image>
				<text class="font-22 color6">可上传多张图片</text>
			</view>
		</view>
		
		<view class="btn2 mt-2">确定</view>
	</view>
</template>

<script>
	import OrderCard from '@/components/compon/orderCard.vue'
	export default {
		data() {
			return {
				data:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':0,   //判断订单状态
						'flag':2     //判断是否到店
					}
				]
			}
		},
		methods: {
			
		},
		components:{
			OrderCard
		}
	}
</script>

<style scoped>
	.comm{height: 460rpx;}
	.commCon{}
	.uploadIcon{width: 100rpx;height: 100rpx;}
</style>
