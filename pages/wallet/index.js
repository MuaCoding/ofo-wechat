//page/wallet/index.js

Page({
  data: {
    overage: 0,
    ticket: 0
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的钱包'
    })
  },
  // 页面加载完成，更新本地存贮overage
  onReady: function(){
    wx.getStorage({
      key: 'overage',
      success: (res) =>{
        this.setData({
          overage: res.data.overage
        })
      }
    })
  },
  // 页面显示完成，获取本地存贮的overage
  onShow: function(){
    wx.getStorage({
      key: 'overage',
      success: (res) =>{
        this.setData({
          overage: res.data.overage
        })
      }
    })
  },
  // 余额说明
  overageDesc: function(){
    wx.showModal({
      title: "",
      content: "充值余额0.00元+活动赠送余额0.00元",
      showCancel: false,
      confirmText: "我知道了"
    })
  },
  // 跳转到充值页面
  movetoCharge: function(){
    // 关闭当前页面，跳转到指定页面，返回时将不会回到当前页面
    wx.redirectTo({
      url: '../charge/index'
    })
  }
})
