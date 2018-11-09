var Stomp = require('stomp-client');

var MessageConsumer = function MessageConsumer(){};


MessageConsumer.prototype.init = function init(){
  var stompClient = new Stomp('127.0.0.1', 61613, 'admin', 'abc123', '1.1');

  stompClient.connect(function(sessionId){

console.log("connecting");
    stompClient.subscribe('/queue/queue1', function(body, headers){
      console.log("body:"+body)
    });
  });
}


module.exports = new MessageConsumer();

var y = new MessageConsumer();
y.init();
