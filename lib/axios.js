import axios from 'axios'
// axios.defaults.baseURL = 'http://www.gdfengshuo.com/';
axios.defaults.baseURL = 'https://www.zhengzhicheng.cn/';
axios.defaults.withCredentials= true;

axios.defaults.adapter = function (config) {
  // 发送请求时触发
  uni.showLoading({
    title: '拼命加载中...'
  })
  // 修改适配器
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.url,
      method: config.method.toUpperCase,
      data: {
        text: config.data
      },
      header: config.headers,
      success: (res) => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        console.log('返回结果了');
        uni.hideLoading()
      }
    })
  })
}

export default axios