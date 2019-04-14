<template>
  <navigator url="/pages/category/category" open-type="switchTab">
    我是搜索页,您搜索的商品id为{{id}}点击跳转
  </navigator>
</template>
<script>
export default {
  data() {
    return {
      // 搜索商品的id
      id: '',
    }
  },
  onLoad(option) {
    this.id = option.id
    console.log('搜索页onLoad');

  },
  onReady(){
    console.log('搜索页onReady');
  },
  onShow(){
    console.log('搜索页onShow');
  },
  onHide(){
    console.log('搜索页onHide');
  },
  onUnload(){
    console.log('搜索页onUnload');
  }
}
</script>