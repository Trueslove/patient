const app = getApp();
Page({
  data: {
    imageMode: app.globalData.imageMode,
  },
  //事件处理函数
  onLoad: function () {
    
  },
  handleToPage(e) { // 跳转页面
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },
})

