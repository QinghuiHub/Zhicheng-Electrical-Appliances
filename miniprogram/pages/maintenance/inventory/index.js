// pages/maintenance/inventory/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceTypes: ['空调', '冰箱', '洗衣机', '热水器', '净水器', '其他'],
    deviceType: '',
    model: '',
    serviceOptions: ['清洗保养', '滤芯更换', '配件更换', '全面检修'],
    selectedServices: [],
    contact: '',
    address: '',
    serviceDate: '',
    today: '',
    endDate: '',
    remarks: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
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

  // 型号输入
  onModelInput(e) {
    this.setData({
      model: e.detail.value
    });
  },

  // 保养项目选择
  onServiceChange(e) {
    this.setData({
      selectedServices: e.detail.value
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
      serviceDate: e.detail.value
    });
  },

  // 备注输入
  onRemarksInput(e) {
    this.setData({
      remarks: e.detail.value
    });
  },

  // 提交预约
  submitService() {
    const { deviceType, model, selectedServices, contact, address, serviceDate } = this.data;
    
    if (!deviceType) {
      this.showToast('请选择设备类型');
      return;
    }
    
    if (!model) {
      this.showToast('请输入产品型号');
      return;
    }
    
    if (selectedServices.length === 0) {
      this.showToast('请选择保养项目');
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
    
    if (!serviceDate) {
      this.showToast('请选择期望服务时间');
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