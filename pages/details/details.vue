<template>
  <view>
    <!-- 商品信息 -->
    <view class="goods">
      <image class="goods-icon" :src="goods.image" lazy-load></image>
      <view class="cart">
        <image src="/static/image/cart2.png"></image>
        <text class="goods-num">{{ getCartSum }}</text>
      </view>
      <view class="goods-operation">
        <text @tap="subtractNum">-</text>
        <text>数量{{num}}</text>
        <text @tap="addNum">+</text>
        <text @tap="add2Cart">加入购物车</text>
        <image @tap="add2Cart" class="addToCart" src="/static/image/cart1.png" lazy-load></image>
      </view>
      <view class="stock">{{goods.stock}}</view>
      <view class="title">{{goods.title}}</view>
      <view class="price">{{goods.price}}</view>
    </view>
  </view>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCartSum'])
  },
  data() {
    return {
      // 商品数据
     goods: {
      id: 1,
      image: '/static/image/goods1.png',
      title: '新鲜梨花带雨',
      price: 0.01,
      stock: '有货',
      detail: '这里是梨花带雨详情。',
      parameter: '125g/个',
      service: '不支持退货'
    },
    // 商品下单数量
    num: 1,
    }
  },
  onLoad(option){
    console.log(option);
  },
  methods: {
    // 购物商品数量增加
    addNum() {
      this.num++
    },
    // 购物商品数量减少
    subtractNum() {
      if(this.num <= 0) return 
      this.num--
    },
    // 添加购物车
    add2Cart(){
      let goodsObj = {
        goodsId: this.goods.id,
        goodsNum: this.num
      }
      console.log(goodsObj);
      this.$store.commit('add2Cart',goodsObj)
    }
  },
}
</script>

<style lang="scss" scoped>
.goods {
  // width: 750upx;
  padding:40upx 45upx;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .cart {
    width: 75upx;
    height: 75upx;
    position: absolute;
    top: 40upx;
    right: 40upx;
    image {
      width: 75upx;
      height: 75upx;
    }
    .goods-num {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 20upx;
      line-height: 20upx;
      padding: 6upx 12upx;
      background-color: $my-main-color;
      color: #fff;
      border-radius:100px;

    }
  }
  .goods-icon {
    width: 300upx;
    height: 300upx;
    margin:35upx 0 125upx;
  }
  
  .goods-operation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 660upx;
    height: 100upx;
    padding: 0 50upx;
    color: #fff;
    font-size: 30upx;
    box-sizing: border-box;
    border-radius: 50upx;
    background-color: $my-main-color;

    .addToCart {
      width: 44upx;
      height: 44upx;
    }
  }

}
  </style>
