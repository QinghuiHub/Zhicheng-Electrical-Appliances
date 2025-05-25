// pages/examples/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeList: [
      {
        id: 1,
        name: '东芝星级生活馆（南山博耐家居店）',
        address: '广东省深圳市南山区沙河街道博耐家居广场',
        distance: '553'
      },
      {
        id: 2,
        name: '美的智慧厨房（深圳南山博耐家居店）',
        address: '广东省深圳市南山区沙河街道博耐家具建材广场',
        distance: '617'
      },
      {
        id: 3,
        name: '海尔智家（福田区红岭店）',
        address: '广东省深圳市福田区红岭中路红岭大厦B座',
        distance: '1.2k'
      },
      {
        id: 4,
        name: '格力电器（龙华旗舰店）',
        address: '广东省深圳市龙华区民治大道123号',
        distance: '3.5k'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 可以在这里从服务器获取门店数据
    this._adjustViewport();
  },

  /**
   * 调整视口以适应不同设备
   */
  _adjustViewport() {
    const systemInfo = wx.getSystemInfoSync();
    const windowWidth = systemInfo.windowWidth;
    this.setData({
      windowWidth: windowWidth
    });
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

  /**
   * 进入门店
   */
  goToStore(e) {
    const storeId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/store-detail/index?id=${storeId}`,
      fail: () => {
        wx.showToast({
          title: '门店详情页面开发中',
          icon: 'none'
        });
      }
    });
  }
})