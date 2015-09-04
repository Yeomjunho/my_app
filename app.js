var express = require('express'),
	path = require('path'),
	app = express();

app.use(express.static(path.join(__dirname,'public')));
console.log(__dirname);

/*app.get('/',function(req,res){
	res.send('hello world');	
});*/

app.listen(3000,function(){
	console.log('seve on');
});