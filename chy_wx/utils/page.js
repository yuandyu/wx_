// 处理一些页面上的逻辑
module.exports = {
  currentPage: null, // 当前页面数据
  currentPageOptions: {}, // 当前页面参数
  list: [{
    iconPath: "home-o",
    text: "组件",
    detail: 0,
    url: '/pages/index/index',
    active: true
  }, {
    iconPath: "search",
    text: "接口",
    detail: 1,
    url: '/pages/logs/logs',
      active: false
  }, {
    iconPath: "friends-o",
    text: "接口",
    detail: 2,
    url: '/pages/vant/vant',
      active: false
  }, {
    iconPath: "setting-o",
    text: "接口",
    detail: 3,
    url: '/pages/index/index',
      active: false
  }],
  onLoad: function (t, e){
    console.log(t, e, 'page-onload')
    this.currentPage = t, this.currentPageOptions = e;
    this.currentPage.setData({
      list: this.list
    })
    let list = this.currentPage.data.list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].active) {
        this.currentPage.setData({
          active: list[i].detail
        });
      }
    }
  },
  onShow(){
    
  },
  switchTab: function (event){
    let list = this.currentPage.data.list;
    for(let i = 0; i < list.length; i++){
      if (event.detail === list[i].detail){
        console.log(list[i].url);
        list[i].active = true;
        wx.navigateTo({
          url: list[i].url
        })
        this.currentPage.setData({
          active: event.detail
        });
      } else{
        list[i].active = false;
      }
    }
  }
}