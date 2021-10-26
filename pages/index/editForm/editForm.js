// pages/index/editForm/editForm.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imageMode: app.globalData.imageMode,
        switch: false,
        activeIndex: 0,
        dateTime: "2019-11-11 11:11:00"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    handleChange(e) { // 变化预约时间
        this.setData({
            dateTime: e.detail.dateString
        })
    },
    changeSwitch(e) {
        this.setData({
            switch: e.detail.value
        })
    },
    handleChangeType(e) {
        let index = e.currentTarget.dataset.index;
        this.setData({
            activeIndex: index
        })
    },
    handleToPage(e) {
        let url = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: url
        })
    }
})