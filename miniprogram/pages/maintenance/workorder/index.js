Page({
  data: {
    activeTab: 'all',
    workOrders: [
      {
        id: '001',
        type: '安装服务',
        status: 'pending',
        statusText: '待处理',
        deviceType: '空调',
        brand: '格力',
        model: 'KFR-35GW',
        description: '新购买的空调需要安装',
        address: '江西省赣州市全南县社迳乡老街45号',
        appointmentTime: '2023-08-15 上午',
        createTime: '2023-08-12 10:23'
      },
      {
        id: '002',
        type: '维修服务',
        status: 'processing',
        statusText: '处理中',
        deviceType: '冰箱',
        brand: '海尔',
        model: 'BCD-225WDGK',
        description: '冰箱不制冷，需要检修',
        address: '江西省赣州市全南县寿梅路28号',
        appointmentTime: '2023-08-14 下午',
        createTime: '2023-08-11 15:47'
      },
      {
        id: '003',
        type: '维修服务',
        status: 'completed',
        statusText: '已完成',
        deviceType: '洗衣机',
        brand: '小天鹅',
        model: 'TG100-1411DG',
        description: '洗衣机排水不畅',
        address: '江西省赣州市全南县南山路15号',
        appointmentTime: '2023-08-10 上午',
        createTime: '2023-08-08 09:15'
      }
    ]
  },

  onLoad(options) {
    // 页面加载时可以从服务器获取工单数据
    console.log('工单页面加载');
  },

  // 切换标签
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
    this.filterWorkOrders(tab);
  },

  // 根据标签筛选工单
  filterWorkOrders(tab) {
    // 这里应该是从服务器获取对应状态的工单
    // 这里仅做演示，使用本地数据模拟
    console.log(`切换到${tab}标签`);
  },

  // 查看工单详情
  viewWorkOrderDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/maintenance/workorder/detail/index?id=${id}`
    });
  },

  // 创建新工单
  createWorkOrder() {
    wx.navigateTo({
      url: '/pages/maintenance/workorder/create/index'
    });
  },

  onReady: function() {},
  onShow: function() {
    console.log('切换到工单页面');
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {
    // 下拉刷新，重新获取工单数据
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom: function() {
    // 上拉加载更多工单
  },
  onShareAppMessage: function() {
    return {
      title: '志成电器工单管理',
      path: '/pages/maintenance/workorder/index'
    };
  }
}); 