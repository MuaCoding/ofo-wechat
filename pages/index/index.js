//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scale: 18,
    latitude: 0,
    longitude: 0
  },
  onLoad: function (options) {
    // 1.获取定时器，用于判断是否已经在计费
    this.timer = options.timer;
    console.log(options)
    // 2.获取并设置当前位置经纬度
    wx.getLocation({
      type:"gcj02",  //坐标系类型 （GCJ02（火星坐标）比WGS84（GPS）的坐标在计算距离的时候更为精确）
      success: (res) =>{
        

        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    });
    // 3.设置地图控件的位置及大小，通过设备宽高定位
    wx.getSystemInfo({
      success: (res) =>{
        console.log(res);
        this.setData({
          controls: [
            {
              id: 1,
              iconPath: '/images/location.png',
              position: {
                left: 20,
                top: res.windowHeight - 80,
                width: 50,
                height: 50
              },
              clickable: true
            },
            {
              id: 2,
              iconPath: '/images/use.png',
              position: {
                left: res.windowWidth/2 - 45,
                top: res.windowHeight - 100,
                width: 90,
                height: 90
              },
              clickable: true
            },
          ]
        })
      }
    });
  },
  // 页面显示
  onShow: function(){
    // 1.创建地图上下文，移动当前位置到地图中心
    this.mapCtx = wx.createMapContext('ofoMap');
    this.movetoPosition();
  },
  // 定位函数，移动位置到地图中心
  movetoPosition: function(){
    this.mapCtx.moveToLocation();
  }
})
