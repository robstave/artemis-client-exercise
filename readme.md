# Excercises to learn Artemis


You need to install ActiveMQ (Artemis).

Download and unzip then create a broker in your lib.
I like to install in ~/lib  (details left as an exercise to the reader)

I assume a user with: *admin:abc123*

You can now start the broker by executing:  

```
~/lib/mybroker/bin/artemis run
```

Or you can run the broker in the background using:

```
   ~/lib/mybroker/bin/artemis-service start
```




## Part one - Stomp-client

Simple test where there is a server and a Client

Using node.js _stomp-client_

Get dependancies
```
npm update
```

run client
```
npm run client
```

In another terminal, run the server
```
npm run server
```

Give it a few secs and you will see some pub/subbing going on.
It seems to time out though after a minute or two

## Part 2

Same basic exercise, but with stomp-it

## Part 3 - TODO
Scheduled messages
http://activemq.apache.org/nms/stomp-delayed-and-scheduled-message-feature.html


