// pages/examples-new/index.js
Page({
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
      }
    ]
  },
  goToStore: function() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  }
}) 