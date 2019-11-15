import Toast from 'vant-weapp/toast/toast';
module.exports = {
  toast: function (msg) {
    Toast(msg);
  },
  success: function (msg) {
    Toast.success(msg);
  },
  fail: function (msg) {
    Toast.fail(msg);
  },
  loading: function (msg){
    Toast.loading(msg);
  },
  clear: function(){
    Toast.clear();
  }
}