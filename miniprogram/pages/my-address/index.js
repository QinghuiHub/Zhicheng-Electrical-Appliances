// pages/my-address/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    addressList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadAddressList();
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
    this.loadAddressList();
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

  // 加载地址列表
  loadAddressList() {
    const db = wx.cloud.database();
    db.collection('addresses').where({
      _openid: '{openid}' // 这里会自动替换为当前用户的openid
    }).get().then(res => {
      this.setData({
        addressList: res.data
      });
    }).catch(err => {
      console.error('获取地址列表失败：', err);
      wx.showToast({
        title: '获取地址列表失败',
        icon: 'none'
      });
    });
  },

  // 选择地址
  selectAddress(e) {
    const id = e.currentTarget.dataset.id;
    const address = this.data.addressList.find(item => item.id === id);
    if (address) {
      // 将选中的地址存储到全局数据或缓存中
      getApp().globalData.selectedAddress = address;
      wx.navigateBack();
    }
  },

  // 编辑地址
  editAddress(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/my-address/edit/index?id=${id}`
    });
  },

  // 删除地址
  deleteAddress(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '确定要删除这个地址吗？',
      success: res => {
        if (res.confirm) {
          const db = wx.cloud.database();
          db.collection('addresses').doc(id).remove().then(() => {
            wx.showToast({
              title: '删除成功',
              icon: 'success'
            });
            this.loadAddressList();
          }).catch(err => {
            console.error('删除地址失败：', err);
            wx.showToast({
              title: '删除失败',
              icon: 'none'
            });
          });
        }
      }
    });
  },

  // 新增地址
  addAddress() {
    wx.navigateTo({
      url: '/pages/my-address/edit/index'
    });
  }
}) 