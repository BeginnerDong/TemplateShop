<template>
	<view class="shopDetail pb-3">
		<!-- 店铺轮播图 -->
		<view class="shopBanner bg-white px-3 pt-3 d-flex flex-nowrap pb-3">
			<image class="pic mr-2 flex-shrink" src="../../static/images/shop for detailsl-banner.png"></image>
			<image class="pic mr-2 flex-shrink" src="../../static/images/shop for detailsl-banner.png"></image>
		</view>
		
		<!-- 店铺信息 -->
		<view class="font-40 font-weight bg-white pl-3">迪奥专卖店（太华路）</view>
		<!-- 评分 -->
		<view class="shop-pf py-3 px-3 bg-white d-flex j-sb">
			<view class="score font-30 d-flex">
				<view class="d-flex pr-1 scoreIconBox">
					<image class="scoreIcon" v-for="(v,i) in scoreIcon" :key="i" :src="v"></image>
				</view>
				<text class="font2">4.0分</text>
			</view>
			<view class="d-flex font1 font-26 pf-txt">
				<view class="px-2 pf-txt1">美妆店</view>
				<view class="pl-2">人均120元</view>
			</view>
		</view>
		<!-- 营业时间 -->
		<view class="bg-white d-flex a-center font-26 px-3 py-4 time">
			<image class="icon1 mr-2" src="../../static/images/shop for detailsl-icon2.png" mode=""></image>
			<view class="font1 pr-3">营业中</view>
			<view class="font1 px-3">08:00~23:00</view>
		</view>
		<!-- 地址 -->
		<view class="shop-dz px-3 bg-white py-4 d-flex a-center j-sb">
			<view class="d-flex a-start flex-1">
				<image class="icon2 mr-2" src="../../static/images/shop for detailsl-icon4.png" mode=""></image>
				<view class="font-26 dz-txt">
					<view class="font1 pr-3 pb-2">太环路大明宫万达广场迪奥专卖店</view>
					<view class="font3 pr-3">距您直线距离2.3km</view>
				</view>
			</view>
			<view class="dz-line"></view>
			<image class="icon3 ml-3" src="../../static/images/shop for detailsl-icon3.png"></image>
		</view>
		
		<!-- 热销商品 -->
		<view class="hot-tit d-flex font-30 a-center j-center py-3">
			<image class="hot-icon" src="@/static/images/the storel-icon3.png" mode=""></image>
			<text class="mx-2">热销商品</text>
			<image class="hot-icon" src="@/static/images/the storel-icon4.png" mode=""></image>
		</view>
		
		<!-- 商品 -->
		<view v-for="(v,i) in arr">
			<navigator url="../goodsDetails/goodsDetails" class="d-flex bg-white mx-3 px-2 py-2 rounded10 mb-2">
				<image class="hot-pic" src="@/static/images/shopping-img.png"></image>
				<view class="d-flex flex-column j-sb pl-2 flex-1">
					<view class="font-30 font-weight mb-2 ">墨西哥牛油果8枚单装200g左右南大街电脑</view>
					<view class="font-24 proSpan">商品</view>
					<view class="flex-1"></view>
					<view class="font-32 font4 font-weight pr-2">￥129</view>
				</view>
			</navigator>
		</view>
		
		<!-- bar -->
		<view class="footBar d-flex bg-white a-center">
			<view class="d-flex flex-column a-center" @click="Router.switchTab({route:{path:'/pages/index/index'}})">
				<image class="barIcon" src="../../static/images/nabar1.png"></image>
				<view class="color9">首页</view>
			</view>
			<view class="d-flex flex-column a-center">
				<image class="barIcon" src="../../static/images/nabar3-a.png"></image>
				<view class="choose">店铺</view>
			</view>
			<view class="d-flex flex-column a-center" @click="Router.navigateTo({route:{path:'/pages/shopList/shopList'}})">
				<image class="barIcon" src="../../static/images/nabar2.png"></image>
				<view class="color9">分类</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Router:this.$Router,
				scoreIcon:[
					'../../static/images/the storel-icon.png',
					'../../static/images/the storel-icon.png',
					'../../static/images/the storel-icon.png',
					'../../static/images/the storel-icon.png',
					'../../static/images/the storel-icon1.png'
				],
				arr:[1,2,3,4]
			}
		},
		
		onLoad() {
			// console.log(this.Router)
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.shopDetail{background-color: #F1F1F1;padding-bottom: 100rpx;}
	
	.font1{color: #222;}
	.font2{color: #ff5800;}
	.font3{color: #666;}
	.font4{color: #e90000;}
	
	.shopBanner{overflow-x: auto;}
	.pic{width: 630rpx;height: 360rpx;}
	
	.score{color: #666;height: 30rpx;line-height: 30rpx;}
	.scoreIconBox{height: 30rpx;}
	.scoreIcon{width: 30rpx;height: 30rpx;margin-right: 3rpx;}
	.pf-txt{line-height: 26rpx;}
	.pf-txt1{border-right: 1px solid #222;}
	
	.time{border-top: 1px solid #f1f1f1;border-bottom: 1px solid #f1f1f1;}
	.icon1{width: 28rpx;height: 28rpx;}
	.icon2{width: 24rpx;height: 30rpx;}
	.icon3{width: 50rpx;height: 50rpx;}
	.dz-txt{line-height: 26rpx;}
	.dz-line{width: 1rpx; height: 40rpx;background: #f1f1f1;}
	
	.hot-tit{color: #ff4e46;}
	.hot-icon{width: 66rpx;height: 6rpx;}
	.hot-pic{width: 220rpx;height: 220rpx;}
	
	.footBar{justify-content: space-around;height: 100rpx;position: fixed;right: 0;left: 0;bottom: 0;}
	.barIcon{width: 42rpx;height: 42rpx;margin-bottom: 5rpx;}
	.choose{color: #ff4e46;}
</style>
