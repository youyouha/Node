const fs = require('fs');
//当要写入的文件不存在时，会自动创建这个文件
fs.writeFile('./demo.txt','即将要写入的内容',err => {
	if (err != null){
		console.log(err);
		return;
	}
	console.log('文件内容写入成功');
});