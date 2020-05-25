<template>
	<view class="shopList pb-3">
		<view class="d-flex w-100 a-center shadow-lg orderNav bg-white">
			<view class="font-28 px-3 flex-shrink tit" v-for="(v,i) in tit" :class="{'active' : navSelect === i}" @click="chooseNav(i)">
				{{v}}
			</view>
		</view>
		
		<view class="py-4"></view>
		
		<view v-for="(v,i) in arr">
			<navigator url="../goodsDetails/goodsDetails" class="d-flex bg-white mx-3 px-2 py-2 rounded10 mt-2">
				<image class="hot-pic" src="@/static/images/shopping-img.png"></image>
				<view class="d-flex flex-column j-sb pl-2 flex-1">
					<view class="font-30 font-weight mb-2 ">墨西哥牛油果8枚单装200g左右南大街电脑</view>
					<view class="font-24 proSpan">商品</view>
					<view class="flex-1"></view>
					<view class="font-32 hot-price font-weight pr-2">￥129</view>
				</view>
			</navigator>
		</view>
		
		<!-- bar -->
		<view class="footBar d-flex bg-white a-center">
			<view class="d-flex flex-column a-center" @click="Router.switchTab({route:{path:'/pages/index/index'}})">
				<image class="barIcon" src="../../static/images/nabar1.png"></image>
				<view class="color9">首页</view>
			</view>
			<view class="d-flex flex-column a-center" @click="Router.switchTab({route:{path:'/pages/shop/shop'}})">
				<image class="barIcon" src="../../static/images/nabar3.png"></image>
				<view class="color9">店铺</view>
			</view>
			<view class="d-flex flex-column a-center" @click="Router.navigateTo({route:{path:'/pages/shopList/shopList'}})">
				<image class="barIcon" src="../../static/images/nabar2-a.png"></image>
				<view class="choose">分类</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Router:this.$Router,
				tit:['全部','美妆','服饰','水果','家居','保健','母婴'],
				arr:[1,2,3,4,5,6],
				navSelect:0,
			}
		},
		methods: {
			chooseNav(x){
				this.navSelect = x;
			}
		}
	}
</script>

<style scoped>
	.shopList{background-color: #f1f1f1;padding-bottom: 150rpx;}
	
	.orderNav{height: 80rpx;color: #666;overflow-x: auto;position: fixed;top: 88rpx;z-index: 5;}
	.tit{line-height: 80rpx;}
	
	.hot-icon{width: 66rpx;height: 6rpx;}
	.hot-pic{width: 220rpx;height: 220rpx;}
	.hot-price{color: #e90000;}
	
	.footBar{justify-content: space-around;height: 100rpx;position: fixed;right: 0;left: 0;bottom: 0;}
	.barIcon{width: 42rpx;height: 42rpx;margin-bottom: 5rpx;}
	.choose{color: #ff4e46;}
</style>
