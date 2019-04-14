<template>
	<view class="content">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" circular>
			<swiper-item v-for="(item,index) in imgUrls" :key="index">
				<image :src="item"></image>
			</swiper-item>
		</swiper>

		<!-- 搜索栏 -->
		<view class="search">
			<navigator class="search-btn" url="/pages/search/search?id=22">
				<!-- #ifndef H5 -->
				<icon class="weui-icon-search_in-box search-icon" type="search" size="14"></icon>
				<!-- #endif -->
				<text>搜索</text>

			</navigator>
		</view>
		<view>{{TimeDown}}</view>
		<!-- 测试懒加载 -->
		<!-- <view><image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" lazy-load @load="outputSrc"></image></view>
		<view><image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" lazy-load @load="outputSrc"></image></view> -->
		<!-- #ifdef  MP-WEIXIN -->
		<view>这是微信小程序</view>
				<!-- 倒计时 -->
		<zk-time-down :endTime='endTime' @timeEnd="timeEnd"></zk-time-down>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>
		<view class="cat-icon">
			<image :src="src" @load=watchImg lazy-load></image>
		</view>


		<!-- #endif -->
		<!-- #ifdef H5 -->
		<div>这是h5页面</div>
		<!-- <lazy-image class="lazy-image" :realSrc="src" :placeholdSrc="placeholderSrc" @load="watchImg"></lazy-image> -->
		<zk-time-down :endTime='endTime' @timeEnd="timeEnd"></zk-time-down>

		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<view class="cat-icon"><img class="item-pic" @load=watchImg v-lazy="src" /></view>
		<!-- #endif -->
	</view>

</template>

<script>
	// import lazyImage from '../../lib/lazy-image.vue'
	import zkTimeDown from '../../component/HomeTimer.vue'
	export default {
		components: {
			zkTimeDown
		},
		data() {
			return {
				endTime: '2019-04-16 1:19:00',
				// img:'https://imgsa.baidu.com/exp/w=200/sign=1b418324dc58ccbf1bbcb23a29d9bcd4/a5c27d1ed21b0ef4b34ab2c8d0c451da80cb3e81.jpg',
				tupian: '//pic.qiantucdn.com/58pic/34/34/22/80358PICS2b5cae5g0sXn_PIC2018.jpg!/format/webp/fw/1024/watermark/url/L2ltYWdlcy93YXRlcm1hcmsvZGF0dTMucG5n/repeat/true/crop/0x1024a0a1024',
				src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
				placeholderSrc: '/static/image/60x60.png',
				imgUrls: [
					'/static/image/b1.jpg',
					'/static/image/b2.jpg',
					'/static/image/b3.jpg'
				],
				indicatorDots: false,
				autoplay: false,
				interval: 3000,
				duration: 800,
				TimeDown: ''
			};
		},
		methods: {
			watchImg(e) {
				console.log('我加载了');
				console.log(e);
			},
			timeEnd() {
				console.log('时间到了');
			}
		},
		onPullDownRefresh() {
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh(); //停止下拉刷新动画
			}, 1000);
		},
		onLoad() {
			console.log('主页onLoad');
		},
		onReady() {
			console.log('主页onReady');
		},
		onShow() {
			console.log('主页onShow');
		},
		onHide() {
			console.log('主页onHide');
		},
		onUnload() {
			console.log('主页onUnload');
		}
	};
</script>

<style lang="scss" scoped>
	// img {
	// 	transition: .5s all; 
	// }
	// img[lazy=loading] {  
	// 		/*加载中*/ 
	// 		opacity: 0;
	// }  
	// img[lazy=error] {  
	//     /*加载失败*/  
	// }  
	// img[lazy=loaded] {  
	// 		/*加载完成*/  
	// 		opacity: 1;		
	// }  

	.cat-icon {
		width: 750upx;
		height: 498upx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.item-pic {
		width: 100%;
		height: 100%;
	}

	swiper {
		width: 750upx;
		height: 420upx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.search {
		padding: 20upx;

		.search-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 50upx;
			border: 1px solid #ddd;
			font-size: 28upx;
			border-radius: 25upx;

			text {
				margin-left: 4px;
			}
		}
	}
</style>
