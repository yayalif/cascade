 import Vue from 'vue'
 //注册一个全局自定义指令
 Vue.directive('shake', {
       //每当指令绑定到元素上时，会立即执行这个bind函数，只执行一次
    bind: function (el, binding) {
      window.console.log(el.target)
      new Shake(el, binding)
    },
})
function Shake(el, binding) {
  // this.init ()
  el.addEventListener("click", (e) => {
    this.click(e, el, binding)
  }, false)

}
Shake.prototype.click = function (el) {
    window.console.log(el.target)
    el.target.className = el.target.className + ' ' + 'shake'
    setTimeout(() => {
      window.console.log(el.target, '500')
      el.target.className = el.target.className.replace(' shake', '')
      window.console.log(el.target.className, '500')
    }, 300);
}