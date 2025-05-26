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
  onLoad: function() {
    console.log('页面加载');
  },

  /**
   * 进入门店
   */
  goToStore: function(e) {
    wx.showToast({
      title: '门店详情开发中',
      icon: 'none'
    });
  },

  onReady: function() {},
  onShow: function() {
    console.log('切换到线下店页面');
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {
    return {
      title: '志成电器线下门店',
      path: '/pages/examples/index'
    };
  }
})