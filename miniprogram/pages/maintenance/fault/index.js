Page({
  data: {
    deviceTypes: ['空调', '冰箱', '洗衣机', '热水器', '电视', '其他'],
    deviceType: '',
    faultDesc: '',
    contact: '',
    address: '',
    images: []
  },

  onLoad(options) {
    // 页面加载时执行的逻辑
  },

  // 选择设备类型
  onDeviceTypeChange(e) {
    const index = e.detail.value;
    this.setData({
      deviceType: this.data.deviceTypes[index]
    });
  },

  // 故障描述输入
  onFaultDescInput(e) {
    this.setData({
      faultDesc: e.detail.value
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

  // 提交报修
  submitFault() {
    const { deviceType, faultDesc, contact, address } = this.data;
    
    if (!deviceType) {
      this.showToast('请选择设备类型');
      return;
    }
    
    if (!faultDesc) {
      this.showToast('请输入故障描述');
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
}); 