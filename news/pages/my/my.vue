<template>
	<view class="myself">
		<view class="px-3 head">
			<view class="pt-2 d-flex a-center userBox">
				<image class="userImg mr-2" src="@/static/images/about-img.png" mode=""></image>
				<text class="font-30 font-weight">哆啦A梦</text>
			</view>
			
			<!-- 小列表 -->
			<view class="itemBox rounded10 d-flex a-center j-sb shadow mt-3">
				<navigator url="../myOrder/myOrder" class="item d-flex flex-column a-center span24-8">
					<image class="itemIcon" src="../../static/images/about-icon.png" mode=""></image>
					<text class="font-26 pt-2">我的订单</text>
				</navigator>
				<navigator url="../recAddress/recAddress" class="item d-flex flex-column a-center span24-8">
					<image class="itemIcon" src="../../static/images/about-icon1.png" mode=""></image>
					<text class="font-26 pt-2">收货地址</text>
				</navigator>
				<navigator url="../personal/personal" class="item d-flex flex-column a-center span24-8">
					<image class="itemIcon" src="../../static/images/about-icon2.png" mode=""></image>
					<text class="font-26 pt-2">个人信息</text>
				</navigator>
				
			</view>
		</view>
		
		
		<!-- 订单 -->
		<OrderCard :data="data"/>
		
		<view class="py-2"></view>
	</view>
</template>

<script>
	import OrderCard from '@/components/compon/orderCard.vue'
	export default {
		data() {
			return {
				flag:true,
				arr:[1,2,3,4,5,6],
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
						'state':1,
						'flag':0,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':1,
						'flag':1,
						'footBtn':true
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
	.myself{background-color: #f6f6f6;}
	
	.head{background: linear-gradient(to right, #ff4a2d 0%,#ff4142 100%);;height: 272rpx;margin-bottom: 90rpx;}
	.userBox{color: #FFF;}
	.userImg{width: 100rpx;height: 100rpx;}
	
	.itemBox{background-color: #fff;height: 180rpx;}
	.itemIcon{width: 42rpx;height: 52rpx;}
</style>
