// 封装wx.request
module.exports = function(data){
  wx.request({
    url: data.url, //仅为示例，并非真实的接口地址
    data: data.data || {},
    method: data.method || 'GET',
    dataType: data.dataType || 'json',
    header: data.header || {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      data.success(res.data);
      getApp().$toast.success(res.data.Msg)
    },
    fail(fail){
      console.log(fail)
      // data.fail() && data.fail(fail);
    },
    complete(complete) {
      console.log(complete)
      // data.complete() && data.complete(complete);
    }
  })
}