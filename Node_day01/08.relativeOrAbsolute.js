//1.先引入系统模块fs
const fs = require('fs');
// 2.引入路径处理模块
const path = require('path');
//使用绝对路径时比较安全的
console.log(__dirname);
console.log(path.join(__dirname,'01.helloword.js'));

// fs.readFile('./01.helloword.js','utf8',(err,doc) =>{ 
fs.readFile(path.join(__dirname,'01.helloword.js'),'utf8',(err,doc) => {
	console.log(err)
	console.log(doc)
})