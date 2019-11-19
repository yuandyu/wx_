// components/zuj/zuj.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  },

  /**
   * 组件的初始数据
   */
  data: {
    sum: ''
  },
  observers: {
    'myProperty': function (myProperty) {
      console.log(myProperty, 'myProperty2')
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        sum: myProperty + '6666'
      })
    }
  },
  ready: function(){
    this.myPropertyFn();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    myPropertyFn: function(){
      console.log(this.data.myProperty)
      this.triggerEvent('myevent', '66666')
    }
  }
})
