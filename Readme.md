##Imitator快速上手

###安装

	npm install imitator -g

###编写配置文件

	module.exports = function(imitator) {
 	   // 返回一个json
   	 imitator('/json', {name: 'hello world'});
	}

###启动服务

	imitator
