<template>
	<view class="py-2">
		<!-- 订单状态 -->
		<view class="bg-white part1 rounded mx-3 mb-2 d-flex flex-column">
			<image class="orderIcon" src="../../static/images/the order detailsl-icon1.png"></image>
			<!-- 待核销 -->
			<view class="line-h px-2 py-3 d-flex j-sb a-center flex-1" v-if="state == 1">
				<view class="d-flex a-center">
					<image class="orderIcon1" src="../../static/images/the order detailsl-icon.png"></image>
					<text class="font-24 font pl-2">待核销</text>
				</view>
				<view class="d-flex a-center">
					<view class="font-24 color6 pr-2">提货单号：<text class="font">8</text></view>
					<image class="orderIcon2" src="../../static/images/the order detailsl-img.png" @click="qrCode()"></image>
				</view>
			</view>
			<!-- 已核销 -->
			<view class="line-h px-2 py-3 d-flex a-center flex-1" v-else-if="state == 2">
				<image class="orderIcon1" src="../../static/images/the order detailsl-icon.png"></image>
				<text class="font-24 font pl-2">已核销</text>
			</view>
			<!-- 已完成 -->
			<view class="line-h px-2 py-3" v-else>
				<view class="">
					<text class="font-30 color2">张三</text>
					<text class="font-26 color6 pl-3">15956823548</text>
				</view>
				<view class="font-28 color2 pt-2">陕西省西安市长安区韦曲街道</view>
			</view>
		</view>
		
		<!-- 自提详情 -->
		<view class="bg-white rounded py-3 px-2 mx-3 mb-2 line-h font-24"  v-if="state != 3">
			<view class="color6 pb-2">收货人：<text class="color2">张丹 13586485576</text></view>
			<view class="font pb-2">自提点：门店名称门店名称</view>
			<view class="color6 pb-2">地址：<text class="color2">陕西省西安市高新区高新大都荟A座</text></view>
			<view class="color6">预约时间：<text class="color2">2020.06.06 14:00</text></view>
		</view>
		
		<!-- 订单详情 -->
		<OrderCard :data="goodsdata" />
		
		<!-- 买家留言 -->
		<view class="mx-3 bg-white rounded px-2 py-3 font-24 line-h-md">
			<text class="color6">买家留言：</text>
			<text class="color2">高端大气上档次，你一看就喜欢。回个对华为的微跌王嘉尔即函数do为我物价房价</text>
		</view>
		
		<!-- 修改按钮 -->
		<view class="btn2 mt-4" v-if="state == 1" @click="go()">修改信息</view>
		
		
		<view class="position-fixed top-0" v-if="bool">
			<!-- 遮罩背景 -->
			<view class="masks position-fixedXY"></view>
			
			<view class="position-absolute top-0 d-flex flex-column a-center j-center maskBox">
				<image class="QRcode" src="../../static/images/my orderl-img.png"></image>
				<image @click="qrCode()" class="close" src="../../static/images/my orderl-icon.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import OrderCard from '@/components/compon/orderCard.vue'
	export default {
		data() {
			return {
				state:1,
				bool:false,
				goodsdata:[
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
						'state':3,
						'flag':3,
						'footBtn':false,
						'comm':'第一次购买这个品牌的产品包装非常精致，可以说是高端大气上档次，那么优惠的的价格确实很值！可以说是高端大气上档次那么优惠的的价格确实很值！',
						'commImg':["../../static/images/detailal-img3.png"]
					}
				]
			}
		},
		methods: {
			qrCode(){
				this.bool = !this.bool;
			},
			go(){
				wx.navigateTo({
					url:'../subscribe/subscribe'
				})
			}
		},
		components:{
			OrderCard
		},
		onLoad(options){
			this.goodsdata[0].state = options.state;
			if(options.state == 1){
				this.state = 1;
			}else if(options.state == 2){
				this.state = 2;
			}else{
				this.state = 3;
			}
		}
	}
</script>

<style scoped>
	.part1{height: 143rpx;}
	.font{color: #E90000;}
	.orderIcon{width: 690rpx;height: 8rpx;}
	.orderIcon1{width: 30rpx;height: 27rpx;}
	.orderIcon2{width: 60rpx;height: 60rpx;}
	
	.masks{width: 100%;height: 1334rpx;background-color: rgba(0,0,0,0.3);}
	.maskBox{width: 750rpx;height: 1334rpx;}
	.QRcode{width: 450rpx;height: 450rpx;}
	.close{width: 60rpx;height: 60rpx;margin-top: 120rpx;}
</style>
