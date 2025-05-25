// pages/maintenance/statistics/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceTypes: ['空调', '冰箱', '洗衣机', '热水器', '电视', '其他'],
    deviceType: '',
    brand: '',
    yearOptions: ['1年以内', '1-3年', '3-5年', '5-8年', '8年以上'],
    useYear: '',
    statusOptions: ['可正常使用', '需要维修', '已经损坏'],
    status: '',
    contact: '',
    address: '',
    images: [],
    remarks: ''
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

  // 选择设备类型
  onDeviceTypeChange(e) {
    const index = e.detail.value;
    this.setData({
      deviceType: this.data.deviceTypes[index]
    });
  },

  // 品牌输入
  onBrandInput(e) {
    this.setData({
      brand: e.detail.value
    });
  },

  // 选择使用年限
  onYearChange(e) {
    const index = e.detail.value;
    this.setData({
      useYear: this.data.yearOptions[index]
    });
  },

  // 选择设备状态
  onStatusChange(e) {
    this.setData({
      status: e.detail.value
    });
  },

  // 联系方式输入
  onContactInput(e) {
    this.setData({
      contact: e.detail.value
    });
  },

  // 地址输入
  onAddressInput(e) {
    this.setData({
      address: e.detail.value
    });
  },

  // 备注输入
  onRemarksInput(e) {
    this.setData({
      remarks: e.detail.value
    });
  },

  // 选择图片
  chooseImage() {
    const that = this;
    wx.chooseImage({
      count: 3 - that.data.images.length,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          images: [...that.data.images, ...tempFilePaths]
        });
      }
    });
  },

  // 删除图片
  deleteImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.images;
    images.splice(index, 1);
    this.setData({
      images
    });
  },

  // 提交申请
  submitRecycle() {
    const { deviceType, brand, useYear, status, contact, address, images } = this.data;
    
    if (!deviceType) {
      this.showToast('请选择设备类型');
      return;
    }
    
    if (!brand) {
      this.showToast('请输入产品品牌');
      return;
    }
    
    if (!useYear) {
      this.showToast('请选择使用年限');
      return;
    }
    
    if (!status) {
      this.showToast('请选择设备状态');
      return;
    }
    
    if (!contact) {
      this.showToast('请输入联系方式');
      return;
    }
    
    if (!address) {
      this.showToast('请输入地址');
      return;
    }
    
    if (images.length === 0) {
      this.showToast('请上传设备照片');
      return;
    }
    
    // 这里可以调用云函数或者API提交数据
    wx.showLoading({
      title: '提交中...',
    });
    
    // 模拟提交
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          // 提交成功后跳转回首页
          setTimeout(() => {
            wx.navigateBack({
              delta: 1
            });
          }, 2000);
        }
      });
    }, 1500);
  },
  
  // 显示提示信息
  showToast(message) {
    wx.showToast({
      title: message,
      icon: 'none',
      duration: 2000
    });
  }
})