// 云提示模态框组件
Component({
  properties: {
    showUploadTip: {
      type: Boolean,
      value: false
    }
  },
  data: {
  },
  methods: {
    onClose() {
      this.triggerEvent('close');
    }
  }
}) 