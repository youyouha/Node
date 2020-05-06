//1.通过模块的名字fs对模块进行引用
const fs = require('fs'); //对系统模块进行了引用

//2.通过模块内部的readFile方法 读取文件内容
fs.readFile('./01.helloword.js','utf8',(err,doc)=> {
	//如果文件读取出错err 是一个对象 包含错误信息
	//如果文件读取正确 err是 null
	//doc是文件读取的结果 即内容
	console.log(err);
	console.log(doc);
});