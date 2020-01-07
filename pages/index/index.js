//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  // onLoad: function () {
  //   // 将当前页面的 this 赋值给 vm, 以区别于下面回调函数中的 this 
  //   const vm = this
  //   wx.getSetting({
  //     success(res) {
  //       console.log("res========================", res)
  //       // 1. scope.userLocation 为真， 代表用户已经授权
  //       if (res.authSetting['scope.userLocation']) {
  //         // 1.1 使用 getlocation 获取用户 经纬度位置
  //         wx.getLocation({
  //           success(res) {
  //             // 1.2 获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置
  //             console.log(res)

  //             // 1.3 将获取到的 经纬度传值给 getAddress 解析出 具体的地址
  //             vm.getAddress(res.latitude, res.longitude)
  //           }
  //         })
  //       } else {
  //         // 2. 用户未授权的情况下， 打开授权界面， 引导用户授权.
  //         wx.openSetting({
  //           success(res) {
  //             // 2.1 如果二次授权允许了 userLocation 权限， 就再次执行获取位置的接口
  //             if (res.authSetting["scope.userLocation"]) {
  //               wx.getLocation({
  //                 success(res) {
  //                   // 2.2 获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置
  //                   console.log(res)

  //                   // 2.3 将获取到的 经纬度传值给 getAddress 解析出 具体的地址
  //                   vm.getAddress(res.latitude, res.longitude)
  //                 }
  //               })
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  getUserInfo: function () {
    wx.getSetting({
      success(res) {
        console.log('res-----------------------------', res)
        wx.chooseLocation({
          success: function (res) {
            console.log('res成功++++++++++++++++++++++++++++++++++++++++++++', res)
            // success
            console.log(res, "location")
            console.log(res.name)
            console.log(res.latitude)
            console.log(res.longitude)
            that.setData({
              roomname: res.name
            })
          },
          fail: function () {
            console.log('res失败+++++++++++++++++++++++++++++++++++++++++++', res)
            // fail
          },
          complete: function () {
            console.log('res完成++++++++++++++++++++++++++++++++++++++++++++', res)
            // complete
          }
        })
        // wx.getLocation({
        //   type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        //   success: function (res) {
        //     // success
        //     console.log('res.latitude---------------------', res.latitude);
        //     console.log('res.longitude---------------------', res.longitude);
        //     wx.openLocation({
        //       latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
        //       longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
        //       scale: 28, // 缩放比例
        //       name: "要找的地方名字（某某饭店）",
        //       address: "地址：要去的地点详细描述"
        //     })
        //   }
        // })

        // if (!res.authSetting['scope.userInfo']) {
        //   wx.authorize({
        //     scope: 'scope.userInfo',
        //     success() {
        //       if (res.authSetting['scope.userLocation'] == false) {
        //         console.log("没有授权")
        //         wx.openSetting({
        //           success(res) {
        //             console.log("微信登陆授权成功-----------------")
        //             console.log(res.authSetting)
        //             // res.authSetting = {
        //             //   "scope.userInfo": true,
        //             //   "scope.userLocation": true
        //             // }
        //           },
        //           fail(res) {
        //             console.log("微信登陆授权失败-----------------")
        //           },
        //           complete(res) {
        //             console.log("微信登陆授权结束-----------------")
        //           }
        //         })
        //       }
        //     }
        //   })
        // }
        // else {

        // }
      }
    })
  },
  // openSetting(e) {
  //   console.log("e-----------------------------------", e)
  //   wx.getSetting({
  //     success: (res) => {
  //       console.log("res-------------------------------", res)
  //       console.log("res.authSetting['scope.userLocation']-------------------------------", res.authSetting['scope.userLocation'])

  //     }
  //   })
  // }
})
