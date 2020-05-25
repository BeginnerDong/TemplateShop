<template>
	<view>
		<view class="orderBox">
			<view class="bg-white py-2">
				<view class="btnBox bg-white d-flex text-center rounded10 a-center mx-3">
					<view class="w-50" :class="bool==1?'active2':''" @click="chooes(1)">到店自提</view>
					<view class="w-50" :class="bool==2?'active2':''" @click="chooes(2)">快递配送</view>
				</view>
			</view>
			
			
			<view class="nav shadow d-flex j-sa a-center bg-white borderT-f5" v-if="bool==1">
				<view class="font-28 color6 navItem" v-for="(v,i) in nav1" :class="{'active' : nav1Select === i}" @click="chooseNav1(i)">{{v}}</view>
			</view>
			<view class="nav shadow d-flex j-sa a-center bg-white borderT-f5" v-else>
				<view class="font-28 color6 navItem" v-for="(v,i) in nav2" :class="{'active' : nav2Select === i}" @click="chooseNav2(i)">{{v}}</view>
			</view>
		</view>
		
		<view class="pb-3 cardBox" v-if="bool==1">
			<orderCard :data="navData0" :style="{display:(this.nav1Select == 0?'block':'none')}"/>
			<orderCard :data="navData1" v-if="'navData'+this.nav1Select == 'navData1'"/>
			<orderCard :data="navData2" v-if="'navData'+this.nav1Select == 'navData2'"/>
			<orderCard :data="navData3" v-if="'navData'+this.nav1Select == 'navData3'"/>
		</view>
		<view class="pb-3 cardBox" v-else>
			<orderCard :data="nav_Data0" :style="{display:(this.nav2Select == 0?'block':'none')}"/>
			<orderCard :data="nav_Data1" v-if="'nav_Data'+this.nav2Select == 'nav_Data1'"/>
			<orderCard :data="nav_Data2" v-if="'nav_Data'+this.nav2Select == 'nav_Data2'"/>
			<orderCard :data="nav_Data3" v-if="'nav_Data'+this.nav2Select == 'nav_Data3'"/>
			<orderCard :data="nav_Data4" v-if="'nav_Data'+this.nav2Select == 'nav_Data4'"/>
		</view>
	</view>
</template>

<script>
	import OrderBtn from '@/components/compon/orderBtn.vue'
	import OrderCard from '@/components/compon/orderCard.vue'
	export default {
		data() {
			return {
				bool:1,
				nav1:['全部','待核销','已核销','已评价'],
				nav2:['全部','待配送','已配送','已完成','已评价'],
				nav1Select:0,
				nav2Select:0,
				navData0:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':1,
						'flag':0,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':1,
						'flag':2,
						'footBtn':true
					}
				],
				navData1:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':1,
						'flag':1,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':1,
						'flag':2,
						'footBtn':true
					}
				],
				navData2:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':2,
						'flag':2,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':2,
						'flag':2,
						'footBtn':true
					}
				],
				navData3:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':6,
						'flag':2,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':6,
						'flag':2,
						'footBtn':true
					}
				],
				
				nav_Data0:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':4,
						'flag':2,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':4,
						'flag':2,
						'footBtn':true
					}
				],
				nav_Data1:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':4,
						'flag':2,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':4,
						'flag':2,
						'footBtn':true
					}
				],
				nav_Data2:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':5,
						'flag':2,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':5,
						'flag':2,
						'footBtn':true
					}
				],
				nav_Data3:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':6,
						'flag':2,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':6,
						'flag':2,
						'footBtn':true
					}
				],
				nav_Data4:[
					{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':12,
						'time':'2019.12.30',
						'state':3,
						'flag':2,
						'footBtn':true
					},{
						shopName:"迪奥专卖店",
						goods:[
							{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							},{
								'img':"../../static/images/shopping-img.png",
								"tit":'墨西哥牛油果8枚单装200g左右',
								'describe':"水动力三部曲套装",
								"price":129,
								'num':1
							}
						],
						'number':15,
						'time':'2019.12.30',
						'state':3,
						'flag':2,
						'footBtn':true
					}
				],
			}
		},
		methods: {
			chooes(x){
				this.bool = x;
			},
			chooseNav1(x){
				this.nav1Select = x;
			},
			chooseNav2(x){
				this.nav2Select = x;
			}
		},
		components:{
			OrderBtn,OrderCard
		}
	}
</script>

<style scoped>
	.btnBox{border: 1px solid #FF4E46;height: 60rpx;width: 690rpx;line-height: 60rpx;}
	.active2{color: #FFF;background-color: #FF4E46;}
	.orderBox{z-index: 2;position: fixed;top: 80rpx;}
	
	.nav{height: 80rpx;}
	.navItem{height: 80rpx;line-height: 80rpx;}
	
	.cardBox{padding-top: 200rpx;}
	
	
</style>
