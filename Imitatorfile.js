
module.exports = function(imitator){
  // 返回一个json
  //imitator('/json', {name: 'hello world'});
  imitator({
	url: '/json',
  	result: {name: 'json test'}
  });
	
  imitator({
	url: /\/\d{1,3}/,
	result: {name: 'sjkdjfk'}
  });

  imitator({
 	url: '/test',
	result: function(req, res){
		if(req.param.name === 'hanan'){
			res.send('hahahaha');
		}
		else {
			res.send('lalalala');
		}
	}
  });
}
