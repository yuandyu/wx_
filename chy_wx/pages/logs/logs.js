//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    logs: []
  },
  onLoad: function (t) {
    app.page.onLoad(this, t);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  switchTab: function (event) {
    app.page.switchTab(event);
  }
})
