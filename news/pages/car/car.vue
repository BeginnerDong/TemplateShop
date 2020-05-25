<template>
	<view class="car">
		<view class="font-26 d-flex px-3 j-sb py-3">
			<text>全部宝贝(3)</text>
			<text @click="choose()">
				<text v-if="flag">编辑</text>
				<text v-else>完成</text>
			</text>
		</view>
		
		<!-- 商品卡片 -->
		<view class="card px-2 py-3 mx-3 mt-2 rounded10" v-for="v in data">
			<view class="d-flex a-center">
				<image class="Icon mr-2" src="../../static/images/shopping-icon1.png" mode=""></image>
				<view class="d-flex a-center flex-1">
					<image class="shopIcon mr-1" src="../../static/images/shopping-icon3.png" mode=""></image>
					<text>{{v.shopName}}</text>
				</view>
				<image class="Icon2" src="../../static/images/shopping-icon2.png" mode=""></image>
			</view>
			<view class="d-flex a-center mt-3" v-for="vv in v.goods">
				<image class="Icon mr-2" src="../../static/images/shopping-icon1.png" mode=""></image>
				<view class="d-flex flex-1 a-center">
					<image class="pic mr-2" :src="vv.img"></image>
					<view class="flex-1">
						<view class="font-26 font-weight mb-2">{{vv.tit}}</view>
						<view class="font-22 proSpan">商品</view>
						<view class="d-flex mt-4">
							<view class="font-32 price font-weight pr-2 flex-1">{{vv.price}}</view>
							<Count />
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="py-5 mt-5"></view> -->
		
		
		<!-- 结算按钮 -->
		<view class="d-flex pl-3 a-center sumBox j-sb">
			<view class="d-flex a-center font-26">
				<image class="Icon mr-1" src="../../static/images/shopping-icon1.png" mode=""></image>
				<text>全选</text>
			</view>
			<view class="d-flex a-center" v-if="flag">
				<view class="flex-1 font-22 font-weight text-right">
					合计<text class="font-32 sumNum">￥126</text>
				</view>
				<view class="sumBtn font-30 text-center ml-3">
					结算
				</view>
			</view>
			<view class="delet font-26 text-center mr-3" v-else>
				删除
			</view>
		</view>
	</view>
</template>

<script>
	import Count from '@/components/compon/count.vue'
	export default {
		data() {
			return {
				flag:true,
				data:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								img:"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								"price":129
							}
						]
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								img:"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								"price":129
							},{
								img:"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								"price":129
							}
						]
					}
				]
			}
		},
		methods: {
			choose(){
				this.flag = !this.flag;
			}
			
		},
		components:{
			Count
		}
	}
</script>

<style scoped>
	uni-page-body{height: 100%;}
	.car{background-color: #f6f6f6;height:100%;position: relative;}
	
	.card{background-color: #fff;}
	.Icon{width: 32rpx;height: 32rpx;}
	.Icon2{width: 11rpx;height: 20rpx;}
	.shopIcon{width: 31rpx;height: 29rpx;}
	.pic{width: 160rpx;height: 160rpx;}
	.num{width: 150rpx;height: 40rpx;border: 1px solid #999;}
	.numBtn{width: 40rpx;color: #999;}
	.numTxt{border-left: 1px solid #999999;border-right: 1px solid #999999;color: #222;}
	
	
	.sumBox{height:100rpx;background-color: #fff;position: absolute;bottom: 0;left: 0;right: 0;}
	.sumNum{color: #e90000;}
	.sumBtn{width: 260rpx;height: 100rpx;color: #fff;background-color: #FF4E46;line-height: 100rpx;}
	.delet{width: 160rpx;height: 60rpx;border: 1px solid #FF4E46;color: #FF4E46;line-height: 60rpx;border-radius: 30rpx;}
</style>
