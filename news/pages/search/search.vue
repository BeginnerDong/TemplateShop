<template>
	<view class="d-flex flex-column j-center a-center">
		<view class="searchBox d-flex px-3 a-center j-sb borderT-f5 borderB-f5 py-3 w-100">
			<view class="position-relative inpBox">
				<input class="searchInp font-24" type="text" placeholder="搜索想要的商品" />
				<image class="searchIcon icon1 left-0" src="../../static/images/search-icon.png"></image>
				<image class="searchIcon icon2 right-0" src="../../static/images/search-icon1.png"></image>
			</view>
			<text class="font-30 font">搜索</text>
		</view>
		
		<!-- 热门搜索 -->
		<view class="px-3 py-4 borderB-f5">
			<view class="font-30 color2 font-weight">热门搜索</view>
			<view class="hotBox d-flex flex-wrap">
				<view class="hotSpace text-center mt-3 mr-3 color2" v-for="(v,i) in data">{{v}}</view>
			</view>
		</view>
		
		<!-- 搜索记录 -->
		<view class="px-3 py-4 borderB-f5 w-100">
			<view class="font-30 color2 font-weight">搜索记录</view>
			<view class="hotBox d-flex flex-wrap">
				<view class="mt-3 mr-3 color2 font-24" v-for="(v,i) in record">{{v}}</view>
			</view>
		</view>
		
		<!-- 清除搜索记录按钮 -->
		<view class="cleanBtn d-flex a-center j-center flex-1" @click="clean(true)">
			<image class="cleanIcon mr-2" src="../../static/images/addressl-icon.png"></image>
			<view class="font-26 color6">清除搜索记录</view>
		</view>
		
			
		<!-- 遮罩背景 -->
		<view class="masks position-fixedXY" v-if="bool">
			<view class="eject rounded10 position-fixedXY text-center d-flex flex-column">
				<view class="flex-1 d-flex flex-column j-center">
					<view class="font-32 font-weight color2 pb-4">提示：</view>
					<view class="font-28 color9">确定要清空搜索记录吗？</view>
				</view>
				<view class="btnBox borderT-f5 d-flex">
					<view class="btn borderR-f5"  @click="clean(false)">取消</view>
					<view class="font btn text-center" @click="clean(false)">确定</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:['口红','香水','包包','水果','五粮液','国窖'],
				record:['乌苏','电脑','无线鼠标'],
				bool:false
			}
		},
		methods: {
			clean(type){
				this.bool = type;
			}
		}
	}
</script>

<style scoped>
	uni-page-body, uni-page-wrapper{background-color: #fff;height: 100%;}
	.inpBox{width: 600rpx;}
	.searchInp{background-color: #f5f5f5;width: 600rpx;height: 60rpx;border-radius: 30rpx;text-indent: 100rpx;}
	.searchIcon{width: 34rpx;height: 34rpx;margin: 0 30rpx;position: absolute;}
	.icon1{top: 15rpx;}
	.icon2{width: 30rpx;height: 30rpx;top: 17rpx;}
	
	.font{color: #FF4E46;}
	
	.hotSpace{width: 150rpx;height: 60rpx;border-radius: 30rpx;border:1px solid #d5d5d5;line-height: 60rpx;}
	.hotSpace:nth-child(4n){margin-right: 0;}
	
	.cleanBtn{border: 1px solid #d5d5d5;width: 360rpx;height: 80rpx;line-height: 80rpx;border-radius: 40rpx;margin: 100rpx 0;position: absolute;bottom: 0;}
	.cleanIcon{width: 40rpx;height: 40rpx;}
	
	
	.masksBox{height: 100%;background-color: #f5f5f5;}
	.eject{width: 660rpx;height: 350rpx;background-color: #fff;z-index: 2;margin: auto;}
	.masks{width: 100%;height: 1334rpx;background-color: rgba(0,0,0,0.3);}
	.btnBox{height: 100rpx;width: 100%;line-height: 100rpx;}
	.btn{width: 50%;}
</style>
