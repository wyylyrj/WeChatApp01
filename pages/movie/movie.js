// pages/movie/movie.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.doubanUrl);
    var inTheaters = app.globalData.doubanUrl + '/v2/movie/in_theaters?start=0&count=3';
    var comingSoon = app.globalData.doubanUrl + '/v2/movie/coming_soon?start=0&count=3';
    var top250 = app.globalData.doubanUrl + '/v2/movie/top250?start=0&count=3';
    this.http(inTheaters, this.callback);
    this.http(comingSoon, this.callback);
    this.http(top250, this.callback);
  },

  http: function (url,callback) {
    wx.request({
      url:  url,
      header: {
        'content-type': 'application/xml'
      },
      success: function (res) {
        callback(res.data);
      }
    })    
  },

  callback: function(res) {
    console.log(res);
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