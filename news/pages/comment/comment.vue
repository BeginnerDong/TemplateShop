<template>
	<view class="px-3 bg-white">
		<view class=" borderB-f5" v-for="(v,i) in comment" :key="i">
			<view class="font-24 color6 d-flex a-center pt-3">
				<image class="userImg mr-2" :src="v.userImg"></image>
				<text class="userName avoidOverflow">{{v.userName}}</text>
				<text class="color9 flex-1 text-right">{{v.time}}</text>
			</view>
			<view class="commTxt py-3 font-26 color2">{{v.commTxt}}</view>
			<view class="d-flex flex-nowrap">
				<image class="commImg mr-3 mb-3" v-for="(vv,j) in v.commImg" :src="vv"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				comment:[
					{
						userImg:"../../static/images/personal informationl-img.png",
						userName:'用户名',
						time:'2020.02.23',
						commTxt:'很愉快的一次购物，非常满意非常满意非常满意，非常满意非常满意，非常满意非常满意非常满意，',
						commImg:[
						]
					},{
						userImg:"../../static/images/detailal-img1.png",
						userName:'用户名',
						time:'2020.02.23',
						commTxt:'很愉快的一次购物，非常满意非常满意非常满意，非常满意非常满意，非常满意非常满意非常满意，',
						commImg:[
							"../../static/images/detailal-img3.png"
						]
					},{
						userImg:"../../static/images/about-img.png",
						userName:'用户名',
						time:'2020.02.23',
						commTxt:'很愉快的一次购物，非常满意非常满意非常满意，非常满意非常满意，非常满意非常满意非常满意，',
						commImg:[
							"../../static/images/detailal-img3.png",
							"../../static/images/detailal-img3.png"
						]
					},{
						userImg:"../../static/images/personal informationl-img.png",
						userName:'用户名',
						time:'2020.02.23',
						commTxt:'很愉快的一次购物，非常满意非常满意非常满意，非常满意非常满意，非常满意非常满意非常满意，',
						commImg:[
							"../../static/images/detailal-img3.png",
							"../../static/images/detailal-img3.png"
						]
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	uni-page-body{background-color: #fff;height: 100%;}
	.userImg{width: 70rpx;height: 70rpx;}
	.userName{width: 200rpx;}
	
	.commImg{width: 180rpx;height: 180rpx;}
</style>
