// pages/user/user.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageMode: app.globalData.imageMode,
    activeIdx: 2, // 底部导航当前选中状态
    isPatient: true, // 有没有患者
    cellItem: [{
        label: '预约记录',
        icon: '/images/user/yy.png',
        iconDisable: '/images/user/yy-off.png',
        num: 9,
        url: '/pages/index/history/history'
      },
      {
        label: '线上复诊记录',
        icon: '/images/user/xs.png',
        iconDisable: '/images/user/xs-off.png',
        url: ''
      },
      {
        label: '口腔管家',
        icon: '/images/user/kq.png',
        iconDisable: '/images/user/kq-off.png',
        url: ''
      },
      {
        label: '退出登录',
        icon: '/images/user/tc.png',
        disable: true
      },
    ]
  },
  handleToPage(e) { // 跳转页面
    let url = e.currentTarget.dataset.url;
    console.log(url)
    // if(this.isPatient) {
      console.log('111111')
      wx.navigateTo({
        url: url
      })
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})