//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate: new Date().getTime(),
    value: '',
    show: false
  },
  primary: function(){
    this.setData({
      show: true
    })
    wx.navigateTo({
      url: '../vant/vant'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },
  onShow: function (){
    app.page.onLoad(this);
  },
  onLoad: function (options) {
    app.page.onLoad(this, options);
    console.log(app.$toast)
    app.$toast.loading({
      mask: true,
      message: '加载中...'
    });;
    app.request({
      url: app.api.Violation.GetCarTypeList,
      method: 'GET',
      success: function(res){
        if (res.Code === 0){
          console.log(res.Data)
          wx.setStorageSync('GetCarTypeList', res.Data)
        }
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switchTab: function (event) {
    app.page.switchTab(event);
  }
})
