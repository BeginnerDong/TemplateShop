<template>
	<view class="shop pt-2 pb-5">
		<navigator url="../shopDetails/shopDetails" v-for="v in shop" :key="v">
			<view class="shopCard d-flex mb-2 mx-3 pr-2">
				<image class="shopPic mx-2 my-3" src="../../static/images/the storel-img.png" mode=""></image>
				<view class="mt-3 flex-1">
					<view class="font-30 font-weight title avoidOverflow">1点点（高新大都荟店）延平门地铁站</view>
					<view class="score font-22 d-flex">
						<view class="d-flex pr-1 scoreIconBox">
							<image class="scoreIcon" src="../../static/images/the storel-icon.png"></image>
							<image class="scoreIcon" src="../../static/images/the storel-icon.png"></image>
							<image class="scoreIcon" src="../../static/images/the storel-icon.png"></image>
							<image class="scoreIcon" src="../../static/images/the storel-icon.png"></image>
							<image class="scoreIcon" src="../../static/images/the storel-icon1.png"></image>
						</view>
						<text>4.0分</text>
					</view>
					<view class="font-22 d-flex a-center position">
						<image class="positionIcon mr-1" src="../../static/images/shop for detailsl-icon4.png" mode=""></image>
						<text>雁塔区高新大都荟A座2007</text>
					</view>
				</view>
			</view>
		</navigator>
	
		
		<view class="xh-tit d-flex font-30 a-center j-center pt-1">
			<image class="xh-icon" src="@/static/images/the storel-icon3.png" mode=""></image>
			<text class="mx-2">你可能还喜欢</text>
			<image class="xh-icon" src="@/static/images/the storel-icon4.png" mode=""></image>
		</view>
		
		<view class="p-3 d-flex flex-wrap productBox">
			<navigator url="../goodsDetails/goodsDetails" class="product mb-2" v-for="v in product" :key="v">
				<image class="pic" src="../../static/images/classificationl-img.png" mode=""></image>
				<view class="pt-2 mb-3 px-2 productName avoidOverflow2">墨西哥牛油果8枚单装200g左右 拆机好吃啊啊啊啊啊</view>
				<view class="d-flex j-sb a-center px-2 mb-2">
					<view class="font-32 price font-weight">129</view>
					<view class="font-22 proSpan">商品</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				product:[1,2,3,4,5,6],
				shop:[1,2]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.shop{background-color: #f6f6f6;}
	
	.shopCard{height: 190rpx;background-color: #fff;border-radius: 20rpx;}
	.shopPic{width: 180rpx;height: 130rpx;}
	.title{line-height: 30rpx;color: #222;width: 450rpx;}
	.score{color: #666;height: 24rpx;line-height: 24rpx;margin: 27rpx 0 20rpx;}
	.scoreIconBox{height: 24rpx;}
	.scoreIcon{width: 24rpx;height: 24rpx;margin-right: 3rpx;}
	.position{color: #666;}
	.positionIcon{width: 22rpx;height: 28rpx;}
	
	
	.xh-tit{color: #ff4e46;}
	.xh-icon{width: 66rpx;height: 6rpx;}
	
	
	.productBox{background-color: #f6f6f6;}
	.product{width: 335rpx;background-color: #fff;border-radius: 10rpx;}
	.pic{height: 335rpx;}
	.product:nth-child(2n-1){margin-right: 20rpx;}
	.productName{height: 96rpx;overflow: hidden;}
</style>
