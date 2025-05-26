// pages/user-center/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userId: '',
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserInfo();
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
    // 每次显示页面时检查用户信息是否更新
    this.getUserInfo();
    console.log('切换到我的页面');
  },

  /**
   * 获取用户信息
   */
  getUserInfo() {
    const userInfo = wx.getStorageSync('userInfo') || {};
    const userId = wx.getStorageSync('userId') || this.generateUserId();
    
    // 如果没有昵称，设置默认昵称为"志成电器"
    if (!userInfo.nickName) {
      userInfo.nickName = '志成电器';
      wx.setStorageSync('userInfo', userInfo);
    }
    
    this.setData({
      userInfo,
      userId,
      hasUserInfo: true // 由于设置了默认昵称，所以总是有用户信息
    });
  },

  /**
   * 生成随机用户ID
   */
  generateUserId() {
    const userId = 'user_' + Math.random().toString(36).substr(2, 9);
    wx.setStorageSync('userId', userId);
    return userId;
  },

  /**
   * 选择头像
   */
  chooseAvatar() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        
        // 更新本地存储的用户信息
        const userInfo = wx.getStorageSync('userInfo') || {};
        userInfo.avatarUrl = tempFilePath;
        wx.setStorageSync('userInfo', userInfo);
        
        // 更新页面数据
        this.setData({
          'userInfo.avatarUrl': tempFilePath,
          hasUserInfo: true
        });
        
        // 这里可以添加上传头像到服务器的代码
        // this.uploadAvatar(tempFilePath);
      }
    });
  },

  /**
   * 编辑昵称
   */
  editNickname() {
    wx.showModal({
      title: '设置昵称',
      editable: true,
      placeholderText: '请输入昵称',
      success: (res) => {
        if (res.confirm && res.content) {
          // 更新本地存储的用户信息
          const userInfo = wx.getStorageSync('userInfo') || {};
          userInfo.nickName = res.content;
          wx.setStorageSync('userInfo', userInfo);
          
          // 更新页面数据
          this.setData({
            'userInfo.nickName': res.content,
            hasUserInfo: true
          });
          
          // 这里可以添加上传昵称到服务器的代码
          // this.updateNickname(res.content);
        }
      }
    });
  },

  /**
   * 导航到关于我们页面
   */
  navigateToAboutUs() {
    wx.navigateTo({
      url: '/pages/about-us/index'
    });
  },

  /**
   * 导航到我的订单页面
   */
  navigateToMyOrders() {
    wx.navigateTo({
      url: '/pages/my-orders/index'
    });
  },

  /**
   * 导航到我的地址页面
   */
  navigateToMyAddress() {
    wx.navigateTo({
      url: '/pages/my-address/index'
    });
  },

  /**
   * 导航到联系客服页面
   */
  navigateToContactService() {
    wx.navigateTo({
      url: '/pages/contact-service/index'
    });
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

  }
})