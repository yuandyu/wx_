// 处理一些页面上的逻辑
var router = require('./router.js');
module.exports = {
  currentPage: null, // 当前页面数据
  currentPageOptions: {}, // 当前页面参数
  list: router,
  onLoad: function (t, e){
    this.currentPageOptions = e;
    this.activeTab(t);
  },
  onShow(e){
    this.activeTab(t);
  },
  activeTab: function (t){
    this.currentPage = t;
    this.currentPage.setData({
      list: this.list
    })
    let list = this.currentPage.data.list;
    for (let i = 0; i < list.length; i++) {
      if (t.route === list[i].url) {
        this.currentPage.setData({
          active: list[i].detail
        });
      }
    }
  },
  switchTab: function (event){
    let list = this.currentPage.data.list;
    for(let i = 0; i < list.length; i++){
      if (event.detail === list[i].detail){
        list[i].active = true;
        this.currentPage.setData({
          active: event.detail
        });
        wx.navigateTo({
          url: '/' + list[i].url,
          success: function(){
            wx.showTabBar({
              animation: false
            })
          }
        });
      } else{
        list[i].active = false;
      }
    }
  },
  getLocation: function(){
    let _this = this;
    wx.getSetting({
      success(res) {
        console.log(res, 'getSetting')
        wx.authorize({
          scope: 'scope.record',
          success() {
            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
            wx.startRecord()
          }
        })
      }
    })
    wx.login({
      success(res) {
        wx.getLocation({
          withCredentials: true,
          success: data => {
            _this.currentPage.setData({
              getLocation: data
            })
            // console.log(data, '地理位置')
          }
        })
      }
    })
    
  }
}