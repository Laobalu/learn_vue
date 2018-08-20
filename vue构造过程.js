// 第一阶段，vue构造函数的创建

// 构造函数
function Vue() {
    this._init()
}

// 全局config
Vue.config = {
    // ...
}

// 默认option配置，每个组件都会继承这个配置, 为什么会继承这个配置？
Vue.option = {
    beforeCreate, // ?????
    components, //运行时创建的默认组件transition、transitionGroup，以及keepAlive
    directives, // v-show, v-model
    filters
}

// 全局方法
Vue.use // 注册插件
Vue.component // 注册组件
Vue.directive // 注册指令
Vue.nextTick // 下一个tick执行函数
Vue.set // 数据修改
Vue.delete // 数据删除
Vue.mixin  // 混入mixin

// Vue 原型方法

// 由initMixin添加的_init方法，Vue实例初始化入口方法，会调用其他功能初始化函数
Vue.prototype._init

// 由stateMixin添加操作数据的方法
Vue.prototype.$data
Vue.prototype.$props
Vue.prototype.$watch
Vue.prototype.$set // 这两个与全局方法一样，都引用自observer/index
Vue.prototype.$delete

// 由eventsMixin添加的事件方法
Vue.prototype.$on
Vue.prototype.$off
Vue.prototype.$once
Vue.prototype.$emit

// 由lifeCycleMixin添加的生命周期方法
Vue.prototype.update 
Vue.prototype.$froceUpdate
Vue.prototype.$destroy

// runtime时添加的生命周期方法
Vue.prototype.$mount

// 由renderMixin添加的方法
Vue.prototype.$nextTick
Vue.prototype._render





