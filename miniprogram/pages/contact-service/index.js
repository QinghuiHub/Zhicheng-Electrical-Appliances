// pages/contact-service/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '18970736335', // 客服电话
    location: {
      latitude: 24.742,
      longitude: 114.528,
      name: '志成电器总店',
      address: '江西省赣州市全南县S454社迳初级中学东侧约210米'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载时执行的逻辑
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 拨打电话
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber,
      success: () => {
        console.log('拨打电话成功');
      },
      fail: (err) => {
        console.error('拨打电话失败', err);
        wx.showToast({
          title: '拨打电话失败',
          icon: 'none'
        });
      }
    });
  },

  // 打开地图
  openLocation() {
    const { latitude, longitude, name, address } = this.data.location;
    wx.openLocation({
      latitude,
      longitude,
      name,
      address,
      scale: 18
    });
  }
})