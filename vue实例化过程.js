import mergeOptions from "./vue/node_modules/rollup/dist/typings/utils/mergeOptions";
import { resolveConstructorOptions } from "./vue/src/core/instance/init";

// Vue实例化过程，主要是_init方法

let v = new Vue({
    // 配置...
});
function Vue(options) {

    this._init(options);
}

Vue.prototype._init = function(options) {

    // 自增id
    const vm = this;

    // 合并option
    vm.$option = mergeOptions(
        resolveConstructorOptions(vm.constructor), // vm.constructor指向构造函数
        options || {},
        vm
    );

    // 组件初始化的大部分工作
    vm._self = vm

    initLifecycle(vm) // 做了一些生命周期的初始化工作，初始化了很多变量，最主要是设置了父子组件的引用关系，也就是设置了 `$parent` 和 `$children`的值
    initEvents(vm) // 注册事件，注意这里注册的不是自己的，而是父组件的。因为很明显父组件的监听器才会注册到孩子身上。
    initRender(vm) // 做一些 render 的准备工作，比如处理父子继承关系等，并没有真的开始 render
    callHook(vm, 'beforeCreate') // 准备工作完成，接下来进入 `create` 阶段
    initInjections(vm) // resolve injections before data/props
    initState(vm) // `data`, `props`, `computed` 等都是在这里初始化的，常见的面试考点比如`Vue是如何实现数据响应化的` 答案就在这个函数中寻找
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created') // 至此 `create` 阶段完成

    // 组件挂载
    if (vm.$option.el) {
        vm.$mount(vm.$option.el)
    }

   

}
// 通常我们也可以不配置el，而是手动挂载新建的组件
new Vue({
    // 配置...
    
}).mount('#app')