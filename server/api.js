var express = require('express')
var app = express()

app.get('/slideverify', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

	setTimeout(_ => {
		res.json({
			status: 1,
			imgs: {
				dragImg: 'http://localhost:8080/src/images/a1.png',
				dragBg: 'http://localhost:8080/src/images/a1_big.jpg'
			},
			dx: 202,
			dragImgWidth:50,
			dragBgWidth:280
		})
	}, 1000)
})

app.listen(8089, function () {
  console.log('Example app listening on port 8089!')
})
