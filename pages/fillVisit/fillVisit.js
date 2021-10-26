// pages/fillVisit/fillVisit.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        imageMode: app.globalData.imageMode,
        stepIndex: 0,
        activeIndex: 0,
        dateTime: "2019-11-11 11:11:00",
        photoItem: [
            {label: '1/8 牙齿正面照'},
            {label: '2/8 牙齿侧面90度照片'},
            {label: '3/8 开口下牙'},
            {label: '4/8 开口上牙'},
            {label: '5/8 右侧后牙照'},
            {label: '6/8 左侧后牙照片'},
            {label: '7/8 宝贝正面照'},
            {label: '8/8 宝贝侧面90度照'},
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    handleChooseImg() { // 选择图片
        wx.chooseImage({
            count: 1,
            sizeType: ['original','compressed'],
            sourceType: ['album','camera'],
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    handleChangeStep(e) { // 更改step状态
        let index = e.currentTarget.dataset.index;
        if(index === 'save') {
            wx.showToast({
                title: '保存草稿成功',
            });
        } else if (index === 'submit') {
            wx.showToast({
                title: '提交成功',
            });
        } else {
            this.setData({
                stepIndex: index
            })
        }
        
    },
    handleChange(e) { // 变化预约时间
        this.setData({
            dateTime: e.detail.dateString
        })
    },
    handleChangeType(e) {
        let index = e.currentTarget.dataset.index;
        this.setData({
            activeIndex: index
        })
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