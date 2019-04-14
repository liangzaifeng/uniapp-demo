<template>
  <view>
    <view class="banner">
        <image src="/static/image/list1.png"></image>
    </view>
    <view class="commodityList">
      <navigator :url="'/pages/details/details?id='+ item.id" class="commodity" v-for="(item,index) in commodityList" :key="index">
        <image :src="item.icon" lazy-load></image>
        <view class="name">{{item.name}}</view>
        <view class="price">{{item.price}}</view>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      commodityList:[
        {icon: '/static//image/s4.png', name:'瓜子 100g', price:'￥ 0.01', id:1},
        {icon: '/static//image/s5.png', name:'芹菜 半斤', price:'￥ 0.02', id:2},
        {icon: '/static//image/s6.png', name:'素米 375g', price:'￥ 0.03', id:3},
      ]
    }
  },
  onLoad(option){
    console.log(option);
  }
}
</script>

<style lang="scss" scoped>
.banner{
  width: 750upx;
  height: 400upx;
  image {
     width: 750upx;
  height: 400upx;
  }
}
.commodityList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:30rpx 20rpx;
  .commodity {
    width: 346upx;
    height: 346upx;
    text-align: center;
    background-color: #f5f6f5;
    border-radius: 8px;
    font-size: 26upx;
    margin-bottom: 6px;
    image {
      margin:30rpx 0 20rpx;
      width: 180upx;
      height: 180upx;
    }
    .name{
      margin-bottom: 5px;
    }
  }
}
  </style>
