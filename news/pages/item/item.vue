<template>
	<view class="w-100 itemBox">
		<view class="d-flex w-100 a-center shadow-lg orderNav bg-white">
			<view class="font-28 px-3 flex-shrink tit" v-for="(v,i) in tit" :class="{'active' : navSelect === i}" @click="chooseNav(i)">
				{{v}}
			</view>
		</view>
		
		<view class="p-3 d-flex flex-wrap productBox">
			<navigator url="../goodsDetails/goodsDetails" class="product mb-2" v-for="v in product" :key="v">
				<view>
					<image class="pic" src="../../static/images/classificationl-img.png" mode=""></image>
					<view class="pt-2 mb-3 px-2 productName  avoidOverflow2">墨西哥牛油果8枚单装200g左右 kiuagsxgsxagsxogsiug7OADOA</view>
					<view class="d-flex j-sb a-center px-2 mb-2">
						<view class="font-32 price font-weight">129</view>
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
				tit:['全部','美妆','服饰','水果','家居','保健','母婴'],
				product:[1,2,3,4,5,6,7,8,9],
				navSelect:1
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
	/* .itemBox{position: relative;} */
	.orderNav{height: 80rpx;color: #666;overflow-x: auto;position: fixed;top: 88rpx;z-index: 5;}
	.tit{line-height: 80rpx;}
	
	/* .tit:nth-child(2){color: #FF4E46;} */
	
	.productBox{background-color: #f6f6f6;margin-top: 80rpx;}
	.product{width: 335rpx;background-color: #fff;border-radius: 10rpx;}
	.pic{height: 335rpx;}
	.product:nth-child(2n-1){margin-right: 20rpx;}
	.productName{height: 96rpx;overflow: hidden;}
</style>
