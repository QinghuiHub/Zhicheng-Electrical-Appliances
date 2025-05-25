Page({
  data: {
    deviceTypes: ['空调', '冰箱', '洗衣机', '热水器', '电视', '其他'],
    deviceType: '',
    model: '',
    contact: '',
    address: '',
    installDate: '',
    today: '',
    endDate: '',
    images: []
  },

  onLoad(options) {
    // 设置当前日期和30天后的日期
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 30);
    
    this.setData({
      today: this.formatDate(today),
      endDate: this.formatDate(endDate)
    });
  },

  formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  },

  // 选择设备类型
  onDeviceTypeChange(e) {
    const index = e.detail.value;
    this.setData({
      deviceType: this.data.deviceTypes[index]
    });
  },

  // 型号输入
  onModelInput(e) {
    this.setData({
      model: e.detail.value
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

  // 日期选择
  onDateChange(e) {
    this.setData({
      installDate: e.detail.value
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

  // 提交预约
  submitInstall() {
    const { deviceType, model, contact, address, installDate } = this.data;
    
    if (!deviceType) {
      this.showToast('请选择设备类型');
      return;
    }
    
    if (!model) {
      this.showToast('请输入产品型号');
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
    
    if (!installDate) {
      this.showToast('请选择期望安装时间');
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