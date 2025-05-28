Page({
  data: {
    imageList: [
      "cloud://cloud1-9guuoeyie2fd8916.636c-cloud1-9guuoeyie2fd8916-1360998817/微信图片_20250525040651.png",
      "cloud://cloud1-9guuoeyie2fd8916.636c-cloud1-9guuoeyie2fd8916-1360998817/237879f1f43163117b1dc780f7a4f4eb35da00f7_size510_w1080_h608.jfif"
    ],
    imagesLoaded: [false, false],
    currentSwiperIndex: 0,
    phoneNumber: '18970736335', // 客服电话
    location: {
      latitude: 24.742,
      longitude: 114.528,
      name: '志成电器总店',
      address: '江西省赣州市全南县S454社迳初级中学东侧约210米',
    }
  },
  onLoad: function(options) {
    if (!wx.cloud) {
      wx.showToast({
        title: '请使用2.2.3或以上基础库',
        icon: 'none'
      });
      return;
    }
  },
  onReady: function() {
    
  },
  onShow: function() {
    console.log('切换到服务页面');
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {
    return {
      title: '志成电器 - 专业家电维修安装服务',
      path: '/pages/index/index'
    };
  },
  onPageScroll: function() {

  },
  onTabItemTap:function(item) {

  },
  swiperChange: function(e) {
    this.setData({
      currentSwiperIndex: e.detail.current
    });
  },
  imageLoadSuccess: function(e) {
    const index = e.currentTarget.dataset.index || 0;
    let imagesLoaded = this.data.imagesLoaded;
    imagesLoaded[index] = true;
    this.setData({
      imagesLoaded: imagesLoaded
    });
  },
  imageLoadError: function(e) {
    const index = e.currentTarget.dataset.index || 0;
    console.error('图片加载失败', e, '索引:', index);
    wx.showToast({
      title: '图片加载失败',
      icon: 'none'
    });
  },
  navigateToMaintenance(e) {
    const type = e.currentTarget.dataset.type;
    let url = '';
    
    switch(type) {
      case 'fault':
        url = '/pages/maintenance/fault/index';
        break;
      case 'workorder':
        url = '/pages/maintenance/workorder/create/index';
        break;
      case 'inventory':
        url = '/pages/maintenance/inventory/index';
        break;
      case 'statistics':
        url = '/pages/maintenance/statistics/index';
        break;
      default:
        return;
    }

    wx.navigateTo({
      url: url
    });
  },
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
  openLocation() {
    // 跳转到线下店页面
    wx.switchTab({
      url: '/pages/examples/index'
    });
  }
});
  
