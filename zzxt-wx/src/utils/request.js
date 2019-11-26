
const host = 'http://192.168.0.194:8091'

// flag==false 不用传鉴权的3个参数
function request (url, method, data = {}, flag = true, header = {}) {
  if (flag) {
    data.openId = wx.getStorageSync('openId')
    data.timestamp = wx.getStorageSync('timestamp')
    data.token = wx.getStorageSync('token')
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

function get (obj) {
  return request(obj.url, 'GET', obj.data, obj.flag)
}

function post (obj) {
  return request(obj.url, 'POST', obj.data, obj.flag)
}

export default {
  request,
  get,
  post,
  host
}
