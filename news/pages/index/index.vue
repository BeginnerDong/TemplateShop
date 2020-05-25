<template>
	<view class="home bg-white">
		<view class="px-3 head">
			<!-- 搜索框 -->
			<view class="pt-2 position-relative">
				<input class="search" type="text" placeholder="搜索商品名称"  @click="go('search/search')"/>
				<image class="searchIcon position-absolute" src="../../static/images/home-icon.png"/>
			</view>
			
			<!-- 轮播图 -->
			<view class="banner-box">
				<view class="banner">
					<image src="../../static/images/组32@2x.png"></image>
				</view>
			</view>
		</view>
		
		<!-- 小列表 -->
		<view class="py-5 d-flex itemBox">
			<view class="item span-4 text-center font-24" v-for="(v,i) in item" :key="i"  @click="Router.switchTab({route:{path:'/pages/item/item'}})">
				<image class="itemImg mb-2" :src="v.img"></image>
				<text>{{v.tit}}</text>
			</view>
		</view>
		
		<!-- 今日上新 -->
		<view class="px-3 sx-label mb-5">
			<view class="sx sx-l mr-1">
				<text class="d-block pl-2 pb-3 pt-5 font-32 font-weight">今日上新</text>
				<text class="d-block pl-2 font-22">今日上新</text>
				<text class="d-block pl-2 font-22 sx-font">好味不容错过</text>
				<image class="sx-bg sx-bg1" src="../../static/images/home-img1.png"></image>
			</view>
			<view class="sx sx-r">
				<view class="sx-rr sx-r1 mb-1 position-relative">
					<text class="d-block pl-2 pb-1 pt-2 font-32 font-weight">人气最高</text>
					<text class="d-block pl-2 font-22 sx-font">超高人气 精选单品</text>
					<image class="sx-bg sx-bg2" src="../../static/images/home-img3.png"></image>
				</view>
				<view class="sx-rr sx-r2 position-relative">
					<text class="d-block pl-2 pb-1 pt-2 font-32 font-weight">大牌商品</text>
					<text class="d-block pl-2 font-22 sx-font">热卖商品</text>
					<image class="sx-bg sx-bg3" src="../../static/images/home-img5.png"></image>
				</view>
			</view>
		</view>
		
		<!-- 热销商品图片 -->
		<view class="w-100 rx-img">
			<image src="../../static/images/home-img6.png"></image>
		</view>
		
		<!-- 商品列表 -->
		<view class="productBox">
			<navigator url="../goodsDetails/goodsDetails" class=" d-flex flex-wrap py-3">
			<view class="productItem pb-4 ml-3" v-for="v in product" :key="v">
				<image class="pic" src="../../static/images/shopping-img.png"></image>
				<view class="font-26 mt-2 mb-3 productName avoidOverflow2">Sk-II清润净透空气防晒霜30克5342</view>
				<view class="d-flex j-sb a-center">
					<view class="font-30 price font-weight">129</view>
					<view class="font-22 proSpan">商品</view>
				</view>
			</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Router:this.$Router,
				is_show: false,
				item:[
					{"img":"../../static/images/home-icon1.png","tit":"名酒茗茶"},
					{"img":"../../static/images/home-icon2.png","tit":"钟表珠宝"},
					{"img":"../../static/images/home-icon3.png","tit":"美妆护肤"},
					{"img":"../../static/images/home-icon4.png","tit":"家电数码"},
					{"img":"../../static/images/home-icon5.png","tit":"食品保健"}
				],
				product:[1,2,3,4,5,6,7,8,9]
			}
		},
		onLoad() {
			const self = this;
		},
		methods: {
			getMainData() {
				const self = this;
				console.log('852369')
				const postData = {};
				postData.tokenFuncName = 'getProjectToken';
				self.$apis.orderGet(postData, callback);
			},
			go(path){
				wx.navigateTo({
					url:'../'+path
				})
			}
		}
	};
</script>
<style scoped>
	.head{background: linear-gradient(to right, #ff4a2d 0%,#ff4142 100%);;height: 272rpx;margin-bottom: 120rpx;}
	.search{width: 690rpx;height: 60rpx;font-size: 26rpx;color: #fff;background-color: #ff7d78;border-radius: 30rpx;text-indent: 80rpx;}
	.searchIcon{width: 40rpx;height: 40rpx;left: 20rpx;top: 30rpx;}
	.uni-input-placeholder{color: #fff;}
	.banner-box{padding-top: 30rpx;}
	.banner{width: 690rpx;height: 280rpx;}
	
	/* .itemBox{display: flex;} */
	.item{display: flex;flex-direction: column;align-items: center;}
	.itemImg{width: 65rpx;height: 65rpx;}
	
	.sx-label{display: flex;color: #fff;}
	.sx{width: 340rpx;height: 270rpx;position: relative;overflow: hidden;}
	.sx-bg{position: absolute;}
	.sx-bg1{width: 206rpx;height: 201rpx;right: -40rpx;bottom: -40rpx;}
	.sx-bg2{width: 170rpx;height: 130rpx;right: -30rpx;bottom: 0;}
	.sx-bg3{width: 170rpx;height: 130rpx;right: 10rpx;bottom: 0;}
	.sx-l{background:url(../../static/images/home-img.png);background-size: 100% 100%;}
	.sx-rr{height: 130rpx;}
	.sx-r1{background:url(../../static/images/home-img2.png);background-size: 100% 100%;}
	.sx-r2{background:url(../../static/images/home-img4.png);background-size: 100% 100%;}
	.sx-font{color: #f4f4f4;}
	
	.rx-img{height: 260rpx;}
	
	.productItem{width: 210rpx;}
	.pic{width: 210rpx;height: 210rpx;}
	.price{color: #e90000;}
	.proSpan{width: 60rpx;height: 30rpx;border: 1px solid #b5b5b5;color: #666;text-align: center;line-height: 22rpx;border-radius: 5rpx;}
	.productName{height: 80rpx;overflow: hidden;width: 210rpx;}
</style>