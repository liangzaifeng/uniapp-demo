<template>
	<view class="category">
		<!-- 左侧菜单 -->
		<scroll-view class="left" scroll-y :style="'height:'+ windowHeight + 'px'">
			<view @tap="isSelect(index)" :class="[categoryId == index ? 'active' : '']" v-for="(item,index) in category" :key="index">{{item.name}}</view>
		</scroll-view>
		<!-- 右侧菜单 -->
		<scroll-view class="right" scroll-y :style="'height:'+ windowHeight + 'px'">
			<view class="right-box">
				<view class="commodity" @tap="goToCommodity(item)" v-for="(item,index) in secondMenuData" :key="index">
					<image :src="item.icon" lazy-load></image>
					<text>{{item.name}}</text>
				</view>
			</view>

			<view></view>
			<view></view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				category: [{
						name: "苹果",
						id: "0"
					},
					{
						name: "果味",
						id: "1"
					},
					{
						name: "蔬菜",
						id: "2"
					},
					{
						name: "炒货",
						id: "3"
					},
					{
						name: "点心",
						id: "4"
					},
					{
						name: "粗茶",
						id: "5"
					},
					{
						name: "淡饭",
						id: "6"
					},
					{
						name: "果味",
						id: "7"
					},
					{
						name: "蔬菜",
						id: "8"
					},
					{
						name: "炒货",
						id: "9"
					},
					{
						name: "点心",
						id: "10"
					},
					{
						name: "粗茶",
						id: "11"
					},
					{
						name: "淡饭",
						id: "12"
					},
					{
						name: "果味",
						id: "13"
					},
					{
						name: "蔬菜",
						id: "14"
					},
					{
						name: "炒货",
						id: "15"
					},
					{
						name: "点心",
						id: "16"
					},
					{
						name: "粗茶",
						id: "17"
					},
					{
						name: "淡饭",
						id: "18"
					},
					{
						name: "点心",
						id: "19"
					},
					{
						name: "粗茶",
						id: "20"
					}
				],
				categoryId: 0,
				// 二级菜单数据
				secondMenuData: [{
						icon: '/static/image/c2.png',
						name: '梨子'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c4.png',
						name: '奇异果'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c2.png',
						name: '梨子'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c4.png',
						name: '奇异果'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c2.png',
						name: '梨子'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c4.png',
						name: '奇异果'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c2.png',
						name: '梨子'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c4.png',
						name: '奇异果'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c2.png',
						name: '梨子'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c4.png',
						name: '奇异果'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c2.png',
						name: '梨子'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c4.png',
						name: '奇异果'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c2.png',
						name: '梨子'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c4.png',
						name: '奇异果'
					},
					{
						icon: '/static/image/c3.png',
						name: '红枣'
					},
					{
						icon: '/static/image/c2.png',
						name: '梨子'
					}

				],
				// 屏幕可视区域高度
				windowHeight: 0
			};
		},
		methods: {
			isSelect(index) {
				this.categoryId = index
				this.getSecondMenu()
			},
			// 获取2级菜单数据
			async getSecondMenu() {
				// let res1 = await this.$http.get('api/wx/cate-detail.txt')
				// console.log(res1);
				// 测试是否能获取
				let res = await this.$http.get('api/public/v1/home/swiperdata')
				console.log(res);
				// this.secondMenuData = res.data
			},
			// 跳转到商品列表
			goToCommodity(item) {
				
				uni.navigateTo({
					url: '/pages/commodity/commodity?item=' + JSON.stringify(item)
				});
			}
		},
		onLoad() {
			this.getSecondMenu()
			uni.getSystemInfo({
			success:  (res)=> {
				this.windowHeight = res.windowHeight
					}
			})
			console.log('分页onLoad');
		},
		onReady() {
			console.log('分页onReady');
		},
		onShow() {
			console.log('分页onShow');
		},
		onHide() {
			console.log('分页onHide');
		},
		onUnload() {
			console.log('分页onUnload');
		}

	};
</script>
<style lang="scss" scoped>

	.category {
		display: flex;
		
		.left {
			width: 148upx;
			text-align: center;
			border-right: 1px solid $my-main-color;

			view {
				height: 90upx;
				line-height: 90upx;
			}

			.active {
				color: $my-main-color;
				position: relative;

				&::before {
					content: "";
					position: absolute;
					left: 0;
					display: block;
					width: 2px;
					height: 90upx;

				}
			}
		}

		.right {
			flex: 1;

			.right-box {

				display: flex;
				flex-wrap: wrap;
			}

			.commodity {
				width: 33.33%;
				height: 150upx;
				padding-top: 20upx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;

				image {

					width: 80upx;
					height: 80upx;
				}

				text {
					font-size: 32upx;
				}
			}
		}

		::-webkit-scrollbar{
       width: 0;
       height: 0;
       color: transparent;
		}
	}
</style>
