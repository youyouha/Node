//要调用a中的函数，首先要对a模块进行导入操作
// const a = require('./03.module-a.js');
// 导入时可省略 .js 后缀
const a = require('./03.module-a');
// 在b中使用add方法
console.log(a.add(10,20));