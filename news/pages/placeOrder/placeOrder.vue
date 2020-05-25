<template>
	<view>
		<view class="">
			<view class="bg-white py-2">
				<view class="btnBox bg-white d-flex text-center rounded10 a-center mx-3">
					<view class="w-50" :class="bool==1?'active2':''" @click="chooes(1)">到店自提</view>
					<view class="w-50" :class="bool==2?'active2':''" @click="chooes(2)">快递配送</view>
				</view>
			</view>
			
			<view class="bg-white mb-2">
				<!--到店自提 提货地址、时间 -->
				<view class="px-3 th-box borderT-f5" v-if="bool==1">
					<view class=" font-28 d-flex py-3 borderB-f5">
						<view class="color3 mr-5 flex-1">提货地址</view>
						<view class="d-flex a-start" @click="go('../point/point')">
							<text class="color2 dz pr-2">好利来量路店 重庆市渝北区义学路2号 -3-39号喜地山金港国际3层</text>
							<image class="icon mt-1" src="../../static/images/the order detailsl-icon2.png"></image>
						</view>
					</view>
					<view class=" font-28 d-flex py-3 borderB-f5">
						<view class="color3 mr-5 flex-1">提货时间</view>
						<view class="d-flex a-start">
							<text class="color9 dz pr-2 text-right">请选择时间</text>
							<image class="icon mt-1" src="../../static/images/the order detailsl-icon2.png"></image>
						</view>
					</view>
					<view class="d-flex color6 font-28 text-center py-3 j-sa">
						<view class="th-btn rounded10">收货人姓名</view>
						<view class="th-btn rounded10">电话</view>
					</view>
				</view>
				<!-- 快递配送 -->
				<view class="d-flex py-4 a-center px-3 borderT-f5" v-else @click="go('../recAddress/recAddress')">
					<image class="psIcon mr-2" src="../../static/images/the orderl-icon1.png"></image>
					<view class="flex-1">选择收获地址</view>
					<image class="icon mt-1" src="../../static/images/the order detailsl-icon2.png"></image>
				</view>
				
				<image class="thIcon" src="../../static/images/the orderl-icon.png"></image>
			</view>
			
			<!-- 商品信息 -->
			<view class="bg-white px-3 mb-2">
				<view class="py-3 d-flex a-center">
					<image class="shopIcon" src="../../static/images/shopping-icon3.png"></image>
					<view class="font-28 color2 pl-1 line-h">好利来量路店</view>
				</view>
				<view class="goodsBox d-flex borderB-f5 pb-2">
					<image class="goodsImg mr-2" src="../../static/images/shopping-img.png"></image>
					<view class="flex-1">
						<view class="goodsTit color2 font-26 font-weight avoidOverflow">墨西哥牛油果8枚装单果200g左右牛油果</view>
						<view class="goodsSpan font-24 color6 rounded10 text-center mt-2">水动力三部曲套装</view>
						<view class="d-flex j-sb a-center pt-3">
							<view class="price font-weight font-32">126</view>
							<view class="font-24 proSpan color9">商品</view>
						</view>
					</view>
				</view>
				<view class="d-flex j-sb py-3">
					<view class="font-28 color2">购买数量</view>
					<Count />
				</view>
			</view>
			
			
			<view class="bg-white px-2 font-26 color2">
				<view class="py-3 d-flex j-sb borderB-f5">
					<text>配送方式</text>
					<text>到店免费自提</text>					
				</view>
				<view class="py-3 d-flex j-sb">
					<text>买家留言</text>
					<text class="color9">请输入 (50字以内)</text>					
				</view>
			</view>
			
			<view class="zf d-flex bg-white pl-3 a-center j-sb">
				<view class="font-22 color2">
					总计：<text class="total font-32 font-weight">￥126</text>
				</view>
				<view class="zfBtn">立即支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Count from '@/components/compon/count.vue'
	export default {
		data() {
			return {
				bool:1
			}
		},
		methods: {
			chooes(x){
				this.bool = x;
			},
			go(path){
				wx.navigateTo({
					url:path
				})
			}
		},
		components:{
			Count
		}
	}
</script>

<style scoped>
	.btnBox{border: 1px solid #FF4E46;height: 60rpx;width: 690rpx;line-height: 60rpx;}
	.active2{color: #FFF;background-color: #FF4E46;}
	
	.icon{width: 12rpx;height: 22rpx;}
	
	.dz{width: 460rpx;}
	.th-btn{width: 300rpx;height: 60rpx;line-height: 60rpx;border: 1px solid #e5e5e5;}
	.thIcon{width: 100%;height: 8rpx;}
	
	.shopIcon{width: 31rpx;height: 29rpx;}
	
	.goodsImg{width: 160rpx;height: 160rpx;}
	.goodsTit{width: 400rpx;}
	.goodsSpan{width: 210rpx;height: 40rpx;background-color: #f7f7f7;line-height: 40rpx;}
	
	.total{color: #E90000;}
	.zf{height: 100rpx;position: fixed;left: 0;right: 0;bottom: 0;}
	
	.psIcon{width: 40rpx;height: 40rpx;}
</style>
