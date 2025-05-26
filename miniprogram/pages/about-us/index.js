Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('切换到关于我们页面');
  },

  /**
   * 导航到对应页面
   */
  navigateTo(e) {
    const type = e.currentTarget.dataset.type;
    let title = '';
    let content = '';
    
    switch(type) {
      case 'privacy':
        // 跳转到隐私协议页面
        wx.navigateTo({
          url: '/pages/about-us/privacy/index'
        });
        return;
      case 'service':
        // 跳转到用户服务协议页面
        wx.navigateTo({
          url: '/pages/about-us/service/index'
        });
        return;
      case 'info-list':
        // 跳转到已收集个人信息清单页面
        wx.navigateTo({
          url: '/pages/about-us/info-list/index'
        });
        return;
      case 'third-party':
        // 跳转到第三方共享个人信息页面
        wx.navigateTo({
          url: '/pages/about-us/third-party/index'
        });
        return;
      case 'help':
        // 跳转到帮助中心页面
        wx.navigateTo({
          url: '/pages/about-us/help/index'
        });
        return;
      default:
        return;
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '关于我们',
      path: '/pages/about-us/index'
    };
  }
}) 