const app = getApp()

Page({
  data: {
    id: '',
    name: '',
    phone: '',
    region: '',
    address: '',
    isDefault: false
  },

  onLoad(options) {
    if (options.id) {
      this.setData({ id: options.id })
      this.loadAddress()
    }
  },

  // 加载地址信息
  async loadAddress() {
    try {
      const db = wx.cloud.database()
      const res = await db.collection('addresses').doc(this.data.id).get()
      const address = res.data
      
      this.setData({
        name: address.name,
        phone: address.phone,
        region: address.region,
        address: address.address,
        isDefault: address.isDefault
      })
    } catch (err) {
      console.error('加载地址信息失败：', err)
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      })
    }
  },

  // 输入收货人姓名
  onNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },

  // 输入手机号码
  onPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 选择地区
  onRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },

  // 输入详细地址
  onAddressInput(e) {
    this.setData({
      address: e.detail.value
    })
  },

  // 切换默认地址
  onDefaultChange(e) {
    this.setData({
      isDefault: e.detail.value
    })
  },

  // 保存地址
  async saveAddress() {
    const { name, phone, region, address, isDefault } = this.data
    
    // 表单验证
    if (!name.trim()) {
      wx.showToast({
        title: '请输入收货人姓名',
        icon: 'none'
      })
      return
    }
    
    if (!phone.trim()) {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none'
      })
      return
    }
    
    if (!/^1\d{10}$/.test(phone)) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none'
      })
      return
    }
    
    if (!region) {
      wx.showToast({
        title: '请选择所在地区',
        icon: 'none'
      })
      return
    }
    
    if (!address.trim()) {
      wx.showToast({
        title: '请输入详细地址',
        icon: 'none'
      })
      return
    }

    try {
      const db = wx.cloud.database()
      const addressData = {
        name,
        phone,
        region,
        address,
        isDefault,
        _openid: app.globalData.openid
      }

      if (this.data.id) {
        // 更新地址
        await db.collection('addresses').doc(this.data.id).update({
          data: addressData
        })
      } else {
        // 新增地址
        await db.collection('addresses').add({
          data: addressData
        })
      }

      wx.showToast({
        title: '保存成功',
        icon: 'success'
      })

      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    } catch (err) {
      console.error('保存地址失败：', err)
      wx.showToast({
        title: '保存失败',
        icon: 'none'
      })
    }
  }
}) 