// pages/examples/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeList: [
      {
        id: 1,
        name: '志成电器总店',
        address: '江西省赣州市全南县S454社迳初级中学东侧约210米',
        distance: '553',
        latitude: 24.9305,
        longitude: 114.5620
      },
      {
        id: 2,
        name: '志成电器(社迳乡老街店)',
        address: '江西省赣州市全南县社迳大桥社迳乡政府斜对面',
        distance: '617',
        latitude: 25.077049,
        longitude: 114.687744
      },
      {
        id: 3,
        name: '兰英商行',
        address: '江西省赣州市全南县上屋场S454边上',
        distance: '1.2k',
        latitude: 25.05,
        longitude: 114.55
      },
      {
        id: 4,
        name: '全南志成电器',
        address: '江西省赣州市全南县寿梅路与南山路交叉口东北400米',
        distance: '35.5k',
        latitude: 24.7420,
        longitude: 114.5190
      },
      // {
      //   id: 5,
      //   name: '赣州志成电器3店',
      //   address: '江西省赣州市章贡区京珠线康居小区北侧约230米',
      //   distance: '173.5k',
      //   latitude: 25.8350,
      //   longitude: 114.9350
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    console.log('页面加载');
  },

  /**
   * 打开地图显示门店位置
   */
  openLocation: function(e) {
    const index = e.currentTarget.dataset.index;
    const store = this.data.storeList[index];
    
    wx.openLocation({
      latitude: store.latitude,
      longitude: store.longitude,
      name: store.name,
      address: store.address,
      scale: 18
    });
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