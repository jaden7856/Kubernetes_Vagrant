const express = require('express')
const app = express()
var start = Date.now()      // 어플리케이션이 시작된 시간

// http://CONTAINER_IP:3000/healthz 형식으로 요청이 들어왔을 때 수행하는 기능을 정의하는 함수
app.get('/healthz', function(request, response) {
    var msec = Date.now() - start   // 어플리케이션이 시작된 후 경과된 시간
    var code = 200
    if (msec > 40000 ) {
    code = 500
    }
    console.log('GET /healthz ' + code)
    response.status(code).send('OK')
})

app.get('/ready', function(request, response) {
    var msec = Date.now() - start
    var code = 500
    if (msec > 20000 ) {
    code = 200
    }
    console.log('GET /ready ' + code)
    response.status(code).send('OK')
})

app.get('/', function(request, response) {
    console.log('GET /')
    response.send('Hello from Node.js')
})

app.listen(3000);
