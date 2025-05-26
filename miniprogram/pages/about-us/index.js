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
        title = '志成电器隐私协议';
        content = '这里是志成电器隐私协议的内容...';
        break;
      case 'service':
        title = '志成电器用户服务协议';
        content = '这里是志成电器用户服务协议的内容...';
        break;
      case 'info-list':
        title = '已收集个人信息清单';
        content = '这里是已收集个人信息清单的内容...';
        break;
      case 'third-party':
        title = '第三方共享个人信息';
        content = '这里是第三方共享个人信息的内容...';
        break;
      case 'help':
        title = '帮助中心';
        content = '这里是帮助中心的内容...';
        break;
      default:
        return;
    }
    
    // 暂时使用弹窗显示内容，后续可以跳转到对应的详情页
    wx.showModal({
      title: title,
      content: content,
      showCancel: false
    });
    
    // 后续可以实现跳转到详情页
    // wx.navigateTo({
    //   url: `/pages/about-us/${type}/index`
    // });
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