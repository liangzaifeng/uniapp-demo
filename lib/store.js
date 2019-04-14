import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      cartData: {}
    },
    mutations: {
      // cartObj = { goodsId: 1, goodsNum: 1 }
      add2Cart(state,cartObj) {
        console.log(cartObj);
        if (state.cartData[cartObj.goodsId]) {
          state.cartData[cartObj.goodsId] += cartObj.goodsNum
        }else {
          // state.cartData[goodsId] = cartObj[goodsNum]
          Vue.set(state.cartData, cartObj.goodsId, cartObj.goodsNum)
        }
      }
    },
    getters: {
      getCartSum(state) {
        let goodSum = 0
        for ( let key in state.cartData) {
          goodSum += state.cartData[key]
        }
        return goodSum
      }
    },
    actions: {}
})

export default store