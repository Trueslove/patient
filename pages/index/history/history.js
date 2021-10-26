// pages/index/history/history.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imageMode: app.globalData.imageMode,
        dataItem: [
            {year: '2021年', date: '6月22日', title: '12:30 - 13:00  线上复诊预约', type: 0, name: '陈东东', project: '咬合诱导复诊'},
            {year: '2021年', date: '6月22日', title: '12:30 - 13:00  线上复诊预约', type: 1, name: '陈东东', project: '咬合诱导复诊'},
            {year: '2021年', date: '6月22日', title: '12:30 - 13:00  线上复诊预约', type: 2, name: '陈东东', project: '咬合诱导复诊'},
            {year: '2021年', date: '6月22日', title: '12:30 - 13:00  线上复诊预约', type: 3, name: '陈东东', project: '咬合诱导复诊'},
            {year: '2021年', date: '6月22日', title: '12:30 - 13:00  线上复诊预约', type: 4, name: '陈东东', project: '咬合诱导复诊'},
            {year: '2021年', date: '6月22日', title: '12:30 - 13:00  线上复诊预约', type: 5, name: '陈东东', project: '咬合诱导复诊'}
        ], // type 0: 线上开始复诊  1: 取消预约  2:初诊预约 3:复诊预约 4:复诊进行中 5:未到期
    },
    handleToPage(e) {
        let url = e.currentTarget.dataset.url;
        let type = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: `${url}?type=${type}`
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

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