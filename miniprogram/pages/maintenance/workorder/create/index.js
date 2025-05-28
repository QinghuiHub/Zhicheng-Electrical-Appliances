Page({
  data: {
    deviceTypes: ['空调', '冰箱', '洗衣机', '热水器', '电视', '其他'],
    deviceType: '',
    model: '',
    description: '',
    name: '',
    contact: '',
    address: '',
    serviceDate: '',
    timeSlot: '',
    timeSlots: ['上午 (9:00-12:00)', '下午 (13:00-17:00)'],
    today: '',
    endDate: ''
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

  // 选择设备类型
  onDeviceTypeChange(e) {
    const index = e.detail.value;
    this.setData({
      deviceType: this.data.deviceTypes[index]
    });
  },

  // 输入品牌型号
  onModelInput(e) {
    this.setData({
      model: e.detail.value
    });
  },

  // 输入安装说明
  onDescInput(e) {
    this.setData({
      description: e.detail.value
    });
  },

  // 输入联系人
  onNameInput(e) {
    this.setData({
      name: e.detail.value
    });
  },

  // 输入联系方式
  onContactInput(e) {
    this.setData({
      contact: e.detail.value
    });
  },

  // 输入地址
  onAddressInput(e) {
    this.setData({
      address: e.detail.value
    });
  },

  // 选择日期
  onDateChange(e) {
    this.setData({
      serviceDate: e.detail.value
    });
  },

  // 选择时间段
  onTimeSlotChange(e) {
    const index = e.detail.value;
    this.setData({
      timeSlot: this.data.timeSlots[index]
    });
  },

  // 格式化日期
  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 提交安装预约
  submitInstallation() {
    const { deviceType, model, name, contact, address, serviceDate, timeSlot } = this.data;
    
    if (!deviceType) {
      this.showToast('请选择设备类型');
      return;
    }
    
    if (!model) {
      this.showToast('请输入品牌型号');
      return;
    }
    
    if (!name) {
      this.showToast('请输入联系人姓名');
      return;
    }
    
    if (!contact) {
      this.showToast('请输入手机号码');
      return;
    }
    
    if (!/^1\d{10}$/.test(contact)) {
      this.showToast('手机号码格式不正确');
      return;
    }
    
    if (!address) {
      this.showToast('请输入安装地址');
      return;
    }
    
    if (!serviceDate) {
      this.showToast('请选择期望安装日期');
      return;
    }
    
    if (!timeSlot) {
      this.showToast('请选择期望时间段');
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
        title: '预约成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          // 提交成功后跳转回首页
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/index/index'
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