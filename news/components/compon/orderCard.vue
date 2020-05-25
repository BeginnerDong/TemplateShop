<template>
	<view>
		<view class="order mx-3 py-3 px-2 rounded10 mb-2 position-relative" v-for="(v,i) in data" :key="i">
			<view class="d-flex a-center font-28 font-weight mb-1">
				<image class="orderIcon mr-1" src="../../static/images/shopping-icon3.png" mode=""></image>
				<text class="txt1">迪奥专卖店</text>
			</view>
			<view class="font-24 txt2 d-flex j-sb">
				<text>交易时间：{{v.time}}</text>
				<view class="">
					<text :class="v.flag==0?'txt5':'txt6'">
						<text v-if="v.flag == 0">货物已到店</text>
						<text v-else-if="v.flag == 1">货物未到店</text>
					</text>
					
					<text class="txt3 pl-1" v-if="v.state == 0 || v.state == 6">已完成</text>
					<text class="txt3 pl-1" v-if="v.state == 1">待核销</text>
					<text class="txt3 pl-1" v-if="v.state == 2">已核销</text>
					<text class="txt3 pl-1" v-if="v.state == 3">已评价</text>
					<text class="txt3 pl-1" v-if="v.state == 4">待配送</text>
					<text class="txt3 pl-1" v-if="v.state == 5">已配送</text>
				</view>
			</view>
			<view class="goods d-flex mt-2" v-for="(vv,j) in v.goods"  :key="j">
				<image class="goodsImg mr-2" :src="vv.img"></image>
				<view class="flex-1">
					<view class="txt1 pb-1 font-weight avoidOverflow goodsTit">{{vv.tit}}</view>
					<view class="txt2 txt4 px-1 rounded">{{vv.describe}}</view>
					<view class="d-flex a-center j-sb">
						<view class="d-flex a-center">
							<view class="font-32 price font-weight pr-2">{{vv.price}}</view>
							<view class="font-22 proSpan">商品</view>
						</view>
						<view class="">x{{vv.num}}</view>
					</view>
				</view>
			</view>
			
			<!-- 底部按钮 -->
			<view class="d-flex j-sb a-center pt-3 orderBot mt-2" v-if="v.state != 0 && v.footBtn">
				<text v-if="v.state == 1">核销码：{{v.number}}</text>
				<view class="d-flex flex-1 j-end">
					<view class="orderBtn rounded10 txt2 font-26 d-flex a-center j-center ml-4 position-relative right-0"  v-if="v.state != 0"  @click="go('orderDetails/orderDetails?state='+v.state)">查看详情</view>
					<view class="orderBtn rounded10 txt2 font-26 d-flex a-center j-center ml-4 position-relative right-0"  v-if="v.state == 2 || v.state == 6" @click="go('commOrder/commOrder')">去评价</view>
					<view class="orderBtn rounded10 txt2 font-26 d-flex a-center j-center ml-4 position-relative right-0" v-if="v.state == 5" @click="go('logistics/logistics')">查看物流</view>
					<view class="orderBtn rounded10 txt2 font-26 d-flex a-center j-center ml-4 position-relative right-0" v-if="v.state == 5">确认收货</view>
				</view>
			</view>
			
			<!-- 评论 -->
			<view class="" v-if="v.state==3">
				<view class="orderBot point mt-2" v-if="v.comm || v.commImg"></view>
				<view class="py-3 commBox rounded10 mt-2 px-2" v-if="v.comm || v.commImg">
					<view class="color6 font-26">{{v.comm}}</view>
					<view class="d-flex flex-nowrap">
						<image class="commImg mr-3 mt-2" v-for="(vv,j) in v.commImg" :src="vv"></image>
					</view>
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
			go(path){
				wx.navigateTo({
					url:'../../pages/'+path
				})
			}
		},
		props:{
			"data":Array
		}
	}
</script>

<style scoped>
	.order{background-color: #fff;}
	.orderIcon{width: 31rpx;height: 29rpx;}
	.txt1{color: #222;}
	.txt2{color: #666;}
	.txt3{color: #ff3636;}
	.txt4{height: 40rpx;background-color: #f6f6f6;display: inline-block;margin-bottom: 35rpx;}
	.txt5{color: #FFA648;}
	.txt6{color: #60B5FC;}
	.goods2{margin-top: 30rpx;}
	.goodsImg{width: 160rpx;height: 160rpx;}
	.goodsTit{width: 470rpx;}
	.orderBot{border-top: 1px dashed #d5d5d5;}
	.orderBtn{width: 140rpx;height: 56rpx;border: 1px solid #666;}
	
	.point{width: 100%;}
	.commBox{background-color: #f5f5f5;}
	.commImg{width: 160rpx;height: 160rpx;}
</style>
