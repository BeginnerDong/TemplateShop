<template>
	<view class="details">
		<view class="banner position-relative">
			<image src="../../static/images/detailal-img.png"></image>
		</view>
		
		<!-- 商品信息 -->
		<view class="px-3 bg-white">
			<view class="d-flex pt-3">
				<view class="font-30 font-weight font1 title pr-3 avoidOverflow2">迪奥Dior香水花漾甜心小结漫持久真我香水漫舞随行香氛送女友节目礼物</view>
				<view class="fx d-flex flex-column a-center ml-3" @click="go('share/share')">
					<image class="fx-icon" src="../../static/images/detailal-icon.png"></image>
					<view class="font-24 font2 fx-txt">分享</view>
				</view>
			</view>
			<view class="font-22 proSpan mt-2 mb-4">商品</view>
			<view class="d-flex a-center j-sb pb-3">
				<view class="font-34 font-weight font3">￥126</view>
				<view class="font-24 font4">已售：380件</view>
			</view>
		</view>
		
		<!-- 配送 -->
		<view class="d-flex bg-white py-3 px-3 ps">
			<view class="font-28 font2">配送</view>
			<view class="d-flex a-center">
				<image class="ps-icon ml-3 mr-1" src="../../static/images/detailal-icon1.png" mode=""></image>
				<text class="font-24 font1">快递配送</text>
			</view>
			<view class="d-flex a-center">
				<image class="ps-icon ml-3 mr-1" src="../../static/images/detailal-icon1.png" mode=""></image>
				<text class="font-24 font1">到店自提</text>
			</view>
		</view>
		
		<!-- 规格 -->
		<view class="d-flex bg-white py-3 px-3 a-center mt-2" @click="yes()">
			<view class="font-28 font2 pr-3">请选择</view>
			<view class="d-flex flex-1">
				<view class="font-24 font1 pr-1">规格</view>
				<view class="font-24 font1">数量</view>
			</view>
			<image class="gg-icon" src="../../static/images/shopping-icon2.png"></image>
		</view>
		
		<!-- 评论 -->
		<view class="bg-white mt-2 px-3 pb-3">
			<view class="d-flex py-3 a-center j-sb">
				<view class="font-25 font2 pr-3">商品评论</view>
				<navigator url="../comment/comment">
					<view class="d-flex a-center">
						<text class="font-24 font4">全部</text>
						<image class="gg-icon ml-2" src="../../static/images/shopping-icon2.png"></image>
					</view>
				</navigator>
			</view>
			<view class="commBox d-flex flex-nowrap">
				<view class="comm rounded10 px-2 py-2 flex-shrink mr-2" v-for="(v,i) in comm" :key="i">
					<view class="commUser d-flex a-center mb-2">
						<image class="userImg" :src="v.pic"></image>
						<view class="font-24 font1 pl-2">{{v.name}}</view>
					</view>
					<view class="font-24 font1 avoidOverflow3 commTxt">{{v.txt}}</view>
				</view>
			</view>
		</view>
		
		<!-- 商品描述 -->
		<view class="ms px-3 bg-white mt-2">
			<view class="font-25 font2 pt-3 pb-4">商品描述</view>
			<view class="font-26 font1 text-center">
				<view class="pb-2">迪奥Dior香水花漾甜心小结漫持久真我香水</view>
				<view class="pb-4">漫舞随行香氛送女友</view>
				<view class="pb-2">香水花漾甜心小结漫持久真我香水</view>
				<view class="pb-4">漫舞随行香氛送女友礼物</view>
				<view class="pb-2">花漾甜心小结漫持久真我香水</view>
				<view class="pb-2">迪奥Dior香水花漾甜心小结漫持久真我香水</view>
				<view class="pb-2">香水花漾甜心持久</view>
				<view class="pb-5">迪奥Dior香水花漾甜心小结漫持久真我</view>
			</view>
			<view class="pb-5 position-relative">
				<image class="ms-img" src="../../static/images/detailal-img2.png"></image>
				<image class="ms-play position-absolute left-0 right-0 top-0 bottom-0" src="../../static/images/detailal-icon2.png"></image>
			</view>
		</view>
		
		
		<!-- 购买按钮 -->
		<view class="d-flex pl-3 a-center btnBox j-sb">
			<view class="d-flex a-center font-26 flex-column j-center" @click="Router.switchTab({route:{path:'/pages/index/index'}})">
				<image class="Icon1" src="../../static/images/detailal-icon3.png"></image>
				<text class="font-24 font2 mt-1">首页</text>
			</view>
			<view class="d-flex a-center font-26 flex-column j-center" @click="go('shopDetails/shopDetails')">
				<image class="Icon2" src="../../static/images/detailal-icon4.png"></image>
				<text class="font-24 font2 mt-1">店铺</text>
			</view>
			<view class="d-flex a-center font-26 flex-column j-center" @click="yes()">
				<image class="Icon3" src="../../static/images/detailal-icon5.png"></image>
				<text class="font-24 font2 mt-1">加入购物车</text>
			</view>
			<view class="sumBtn font-30 text-center" @click="yes()">
				立即购买
			</view>
		</view>
		
		
		<!-- <Details v-if="bool"></Details> -->
		<view class="detailsBox" v-if="bool">
			<!-- 遮罩背景 -->
			<view class="masks position-fixedXY"></view>
			
			<view class="detail rounded20-T px-3">
				<view class="borderB-f5 py-3 d-flex position-relative j-sb">
					<image src="../../static/images/classificationl-img.png" class="img rounded10"></image>
					<view class="txtBox">
						<view class="font-40 font-weight font line-h">￥69</view>
						<view class="font-24 color6 line-h pt-2 font-2">库存：265</view>
						<view class="font-24 color9 line-h">请选择规格</view>
					</view>
					<image src="../../static/images/detailal-icon6.png" class="icon" @click="yes"></image>
				</view>
				
				<!-- 规格 -->
				<view class="pb-1 borderB-f5">
					<view class="font-26 color2 py-3 line-h">规格</view>
					<view class="d-flex flex-wrap">
						<view class="ggSpan text-center rounded10" v-for="v in arr" :key="v">水动力三部曲套装</view>
					</view>
				</view>
				
				<!-- 数量 -->
				<view class="d-flex j-sb a-center borderB-f5">
					<view class="font-26 color2 py-3 line-h">数量</view>
					<Count />
				</view>
				
				<!-- 按钮 -->
				<view class="d-flex bottom-0 mb-5 position-fixed">
					<view class="btn btn-1 roundedL-5 mr">加入购物车</view>
					<view class="btn btn-2 roundedR-5" @click="go('placeOrder/placeOrder')">立即购买</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import Details from '@/components/compon/goodsDetails.vue'
	import Count from '@/components/compon/count.vue'
	export default {
		data() {
			return {
				Router:this.$Router,
				bool:false,
				arr:[1,2,3,4],
				comm:[
					{
						pic:"../../static/images/detailal-img1.png",
						name:"云翼",
						txt:'第一次购买这个品牌的产品包装非常精致，可以说是高端大气上档次，那么优惠的价格确实很值！'
					},{
						pic:"../../static/images/detailal-img1.png",
						name:"云翼",
						txt:'第一次购买这个品牌的产品包装非常精致，可以说是高端大气上档次，那么优惠的价格确实很值！可以说是高端大气上档次那么优惠的的价格确实很值！'
					}
				]
			}
		},
		methods: {
			yes(){
				this.bool = !this.bool
			},
			go(path){
				wx.navigateTo({
					url:'../'+path
				})
			}
		},
		components:{
			Details,Count
		}
	}
</script>

<style scoped>
	.details{background-color: #f6f6f6;padding-bottom: 100rpx;}
	
	.banner{width: 750rpx;height: 750rpx;}
	
	.font1{color: #222;}
	.font2{color: #666;}
	.font3{color: #E90000;}
	.font4{color: #999999;}
	.title{line-height: 30rpx;height: 60rpx;border-right: 1px solid #F1F1F1;width: 612rpx;}
	/* .fx{width: 100rpx;} */
	.fx-icon{width: 30rpx;height: 30rpx;}
	.fx-txt{width: 50rpx;padding-top: 5rpx;}
	.ps{border-top: 1px solid #f1f1f1;}
	.ps-icon{width: 20rpx;height: 20rpx;}
	.gg-icon{width: 11rpx;height: 20rpx;}
	
	.commBox{overflow-x: auto;}
	.comm{background-color: #f6f6f6;width: 500rpx;height: 225rpx;border: 1px solid #E5E5E5;}
	.userImg{width: 60rpx;height: 60rpx;}
	.commTxt{width: 456rpx;}
	
	.ms-img{width: 690rpx;height: 400rpx;}
	.ms-play{width: 100rpx;height: 100rpx;margin: auto;}
	
	.btnBox{height:100rpx;background-color: #fff;position: fixed;left:0;right:0;bottom: 0rpx;border-top: 1px solid #E5E5E5;}
	.sumBtn{background-color: #e90000;color: #FFF;width: 299rpx;height: 100rpx;line-height: 100rpx;}
	.Icon1{width: 35rpx;height: 37rpx;}
	.Icon2{width: 34rpx;height: 32rpx;}
	.Icon3{width: 36rpx;height: 36rpx;}
	
	
	
	.detailBox{height: 100%;background-color: #f5f5f5;}
	.detail{width: 750rpx;height: 900rpx;background-color: #fff;position: fixed;bottom: 0;}
	
	.img{width: 210rpx;height: 210rpx;position: absolute;top: -44rpx;}
	.txtBox{margin-left: 240rpx;}
	.font{color: #E90000;}
	.font-2{padding-bottom: 26rpx;}
	.icon{width: 44rpx;height: 44rpx;}
	
	.ggSpan{background-color: #f5f5f5;width: 260rpx;height: 56rpx;line-height: 56rpx;margin-right: 31rpx;margin-bottom: 20rpx;}
	
	.btn{width: 342rpx;height: 80rpx;color: #fff;text-align: center;line-height: 80rpx;}
	.btn-1{background-color: #222;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;}
	.btn-2{background-color: #FF4E46;border-top-right-radius: 40rpx;border-bottom-right-radius: 40rpx;}
	
	.masks{width: 100%;height: 1334rpx;background-color: rgba(0,0,0,0.3);}
	
</style>
