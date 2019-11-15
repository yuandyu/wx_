var app = getApp();
Page({
  data: {
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  },
  onChange: function(event) {
    this.setData({
      active: event.detail
    });
  },
  onLoad: function(t){
    app.page.onLoad(this, t);
  },
  switchTab: function (event){
    app.page.switchTab(event);
  }
});