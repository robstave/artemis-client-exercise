var Stomp = require('stomp-client');

var MessageProducer = function MessageProducer(){
  this._stompClient = null;
};

MessageProducer.prototype.init = function init(){
  this._stompClient = new Stomp('127.0.0.1', 61613, 'admin', 'abc123', '1.1');
  this._stompClient.connect(function(sessionId){
    console.log('STOMP client connected.');
  });
};
MessageProducer.prototype.sendMessage = function sendMessage(messageToPublish){
  this._stompClient.publish('/queue/queue1', messageToPublish, []);
};
module.exports = new MessageProducer();

var producer = new MessageProducer();
producer.init();

var count = 0;

function sendIt (prod) {
  console.log("sending")
  prod.sendMessage("message "+ (count++)); 
  prod.sendMessage("message "+ (count++)); 
  prod.sendMessage("message "+ (count++)); 
  prod.sendMessage("message "+ (count++)); 
  prod.sendMessage("message "+ (count++)); 
 }

setTimeout ( sendIt, 2000, producer)

