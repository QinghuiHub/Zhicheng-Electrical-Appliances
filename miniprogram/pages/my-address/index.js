// pages/my-address/index.js
const app = getApp()

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
  async loadAddressList() {
    try {
      const db = wx.cloud.database();
      const res = await db.collection('addresses')
        .where({
          _openid: app.globalData.openid
        })
        .get();
      
      this.setData({
        addressList: res.data || []
      });
    } catch (err) {
      console.error('加载地址列表失败：', err);
      // 如果是集合不存在的错误，提示用户稍后再试
      if (err.errCode === -502005) {
        wx.showToast({
          title: '系统初始化中，请稍后再试',
          icon: 'none',
          duration: 2000
        });
      } else {
        wx.showToast({
          title: '加载失败，请重试',
          icon: 'none'
        });
      }
      this.setData({
        addressList: []
      });
    }
  },

  // 选择地址
  async selectAddress(e) {
    const id = e.currentTarget.dataset.id;
    const address = this.data.addressList.find(item => item._id === id);
    if (address) {
      app.globalData.selectedAddress = address;
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
  async deleteAddress(e) {
    const id = e.currentTarget.dataset.id;
    try {
      const res = await wx.showModal({
        title: '提示',
        content: '确定要删除这个地址吗？'
      });
      
      if (res.confirm) {
        const db = wx.cloud.database();
        await db.collection('addresses').doc(id).remove();
        
        wx.showToast({
          title: '删除成功',
          icon: 'success'
        });
        
        this.loadAddressList();
      }
    } catch (err) {
      console.error('删除地址失败：', err);
      wx.showToast({
        title: '删除失败',
        icon: 'none'
      });
    }
  },

  // 新增地址
  addAddress() {
    wx.navigateTo({
      url: '/pages/my-address/edit/index'
    });
  }
}) 