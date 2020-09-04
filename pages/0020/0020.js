// pages/0020/0020.js
Page({

    _TextTap: ()=> {
        console.log("点击了Text组件");
    },

    _ButtonTap: ()=> {
        console.log("点击了Button组件");
    },

    _ButtonTap2: (evt)=> {
        console.log(evt);
        console.log("点击了Button组件" + evt.currentTarget.id);
    },

    _bindTap:()=>{
        console.log("_bindTap");
    },
    _longpress:()=>{
        console.log("_longpress");
    },
    _touchstart:()=>{
        console.log("_touchstart");
    },
    _touchmove:()=>{
        console.log("_touchmove");
    },
    _touchend:()=>{
        console.log("_touchend");
    },
    _touchcancel:()=>{
        console.log("_touchcancel");
    },


    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(11111)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 通过定时器弹窗  模拟 bind:touchcancel="_touchcancel"  打断事件
        setTimeout(()=>{
            wx.showModal({
                title: 'cancelColor',
                content:'gg',
            })
        },3000)
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