# Excercises to learn Artemis
==============

You need to install ActiveMQ (Artemis)
download and unzip then create a broker in your lib.
I like to install in ~/lib

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
