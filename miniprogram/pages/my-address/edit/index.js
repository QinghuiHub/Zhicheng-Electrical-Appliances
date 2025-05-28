Page({
  data: {
    id: '',
    name: '',
    phone: '',
    region: ['江西省', '赣州市', '全南县'],
    address: '',
    isDefault: false
  },

  onLoad(options) {
    if (options.id) {
      this.loadAddress(options.id);
    }
  },

  // 加载地址信息
  loadAddress(id) {
    const db = wx.cloud.database();
    db.collection('addresses').doc(id).get().then(res => {
      const address = res.data;
      this.setData({
        id: address._id,
        name: address.name,
        phone: address.phone,
        region: [address.province, address.city, address.district],
        address: address.address,
        isDefault: address.isDefault
      });
    }).catch(err => {
      console.error('获取地址信息失败：', err);
      wx.showToast({
        title: '获取地址信息失败',
        icon: 'none'
      });
    });
  },

  // 输入联系人
  onNameInput(e) {
    this.setData({
      name: e.detail.value
    });
  },

  // 输入手机号码
  onPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  // 选择地区
  onRegionChange(e) {
    this.setData({
      region: e.detail.value
    });
  },

  // 输入详细地址
  onAddressInput(e) {
    this.setData({
      address: e.detail.value
    });
  },

  // 切换默认地址
  onDefaultChange(e) {
    this.setData({
      isDefault: e.detail.value
    });
  },

  // 保存地址
  saveAddress() {
    const { name, phone, region, address, isDefault } = this.data;
    
    // 表单验证
    if (!name) {
      wx.showToast({
        title: '请输入联系人姓名',
        icon: 'none'
      });
      return;
    }
    
    if (!phone) {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none'
      });
      return;
    }
    
    if (!/^1\d{10}$/.test(phone)) {
      wx.showToast({
        title: '手机号码格式不正确',
        icon: 'none'
      });
      return;
    }
    
    if (!address) {
      wx.showToast({
        title: '请输入详细地址',
        icon: 'none'
      });
      return;
    }

    const db = wx.cloud.database();
    const addressData = {
      name,
      phone,
      province: region[0],
      city: region[1],
      district: region[2],
      address,
      isDefault
    };

    // 如果设置为默认地址，需要将其他地址设为非默认
    if (isDefault) {
      db.collection('addresses').where({
        _openid: '{openid}',
        isDefault: true
      }).update({
        data: {
          isDefault: false
        }
      });
    }

    // 保存地址
    if (this.data.id) {
      // 更新地址
      db.collection('addresses').doc(this.data.id).update({
        data: addressData
      }).then(() => {
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
      }).catch(err => {
        console.error('保存地址失败：', err);
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        });
      });
    } else {
      // 新增地址
      db.collection('addresses').add({
        data: addressData
      }).then(() => {
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
      }).catch(err => {
        console.error('保存地址失败：', err);
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        });
      });
    }
  }
}); 