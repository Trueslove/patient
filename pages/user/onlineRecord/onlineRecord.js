const app = getApp();
Page({
  data: {
    imageMode: app.globalData.imageMode,
    dataItem: [
        {type: 0, status: 0},
        {type: 1, status: 1},
        {type: 2},
        {isNew: true, type: 3, status: 1},
        {type: 4, status: 1},
        {type: 5}
    ], // type 0: 线上开始复诊  1: 取消预约  2:初诊预约 3:复诊预约 4:复诊进行中 5:未到期     isNew: 是否是最新   status: 0: 已过期 1: 已提交

  },
  //事件处理函数
  onLoad: function () {
    
  },
  handleToPageDetail() { // 跳转详情页
    wx.navigateTo({
      url: '/pages/index/onlineDetail/onlineDetail'
    })
  },
})

