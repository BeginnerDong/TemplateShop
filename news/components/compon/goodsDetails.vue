<template>
	<view class="detailsBox" v-if="flag">
		<!-- 遮罩背景 -->
		<view class="masks position-fixedXY"></view>
		
		<view class="detail rounded20-T px-3">
			<view class="borderB-f5 py-3 d-flex position-relative j-sb">
				<image src="../../static/images/classificationl-img.png" class="img rounded10"></image>
				<view class="txtBox">
					<view class="font-40 font-weight font line-h">￥69</view>
					<view class="font-24 color6 line-h pt-2 font2">库存：265</view>
					<view class="font-24 color9 line-h">请选择规格</view>
				</view>
				<image src="../../static/images/detailal-icon6.png" class="icon" @click="close"></image>
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
				<view class="btn btn-2 roundedR-5">立即购买</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import Count from '@/components/compon/count.vue'
	export default {
		data() {
			return {
				arr:[1,2,3,4],
				flag:true
			}
		},
		methods: {
			close(){
				this.flag = false;
			}
		},
		components:{
			Count
		}
	}
</script>

<style scoped>
	.detailsBox{height: 100%;background-color: #f5f5f5;}
	.detail{width: 750rpx;height: 900rpx;background-color: #fff;position: fixed;bottom: 0;}
	
	.img{width: 210rpx;height: 210rpx;position: absolute;top: -44rpx;}
	.txtBox{margin-left: 240rpx;}
	.font{color: #E90000;}
	.font2{padding-bottom: 26rpx;}
	.icon{width: 44rpx;height: 44rpx;}
	
	.ggSpan{background-color: #f5f5f5;width: 260rpx;height: 56rpx;line-height: 56rpx;margin-right: 31rpx;margin-bottom: 20rpx;}
	
	.btn{width: 342rpx;height: 80rpx;color: #fff;text-align: center;line-height: 80rpx;}
	.btn-1{background-color: #222;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;}
	.btn-2{background-color: #FF4E46;border-top-right-radius: 40rpx;border-bottom-right-radius: 40rpx;}
	
	.masks{width: 100%;height: 1334rpx;background-color: rgba(0,0,0,0.3);}
</style>
