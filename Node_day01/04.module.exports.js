const greeting = name => `hello ${name}`;//Tab键上面的那个键
const x = 100;
exports.x = x;
module.exports.greeting = greeting;
//当exports对象和moudle.exports对象指向的不是同一个对象时  以module.exports为准
module.exports = {
	name : 'zhangsan'
}
//以下写法不生效
exports = {
	age:20
}