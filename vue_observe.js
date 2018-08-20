// initState, data数据代理以及响应式核心



/**
 * 将vue._data里的key全部代理到vue上，实现vue._data.msg 与 vue.msg等价,后期该函数可能用es6 proxy方法重写
 * @param {Object} target vue组件
 * @param {String} sourceKey vue组件的_data
 * @param {String} key data里面的key
 */
function proxy(target, sourceKey, key) {

    const shareProperty = {
        enumerable: true,
        configurable: true,
        get: function proxyGetter() {
            return this[sourceKey][key];
        },
        set: function proxySetter(val) {
            this[sourceKey][key] = val;
        }
    };
    Object.defineProperty(target, key, shareProperty);
}

// 模拟vue._data
function Vm(options) {
    this._data = options.data;
};
const vm = new Vm({
    data: {
        test1: '1',
        test2: '2',
        test3: '3'
    }
});

const keys = Object.keys(vm._data);
let i = keys.length;

// 代理
while(i--){
    const key = keys[i];
    proxy(vm, '_data', key)
}

console.log(vm.test1, vm.test2, vm.test3, vm._data.test1);
vm.test1 = '4';
console.log(vm.test1, vm.test2, vm.test3, vm._data.test1);

// observe 响应式核心
