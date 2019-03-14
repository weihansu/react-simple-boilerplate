// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected:');
  wss.clients.forEach(function each(client) {
    client.send(
      JSON.stringify({
        type: 'incomingUsers',
        connections: wss.clients.size
      })
    );
  });

  ws.on("message", function incoming(message) {
    let clientMessage = JSON.parse(message);
    let typeMessage = (clientMessage.type === 'postMessage') ? 'incomingMessage':'incomingNotification';
    let parsedMessage = clientMessage.data;
    parsedMessage.id = uuidv1();


    wss.clients.forEach(function each(client) {
      client.send(
        JSON.stringify({
          type: typeMessage,
          data: parsedMessage
        })
      );
    });

  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')
    wss.clients.forEach(function each(client) {
    client.send(
      JSON.stringify({
        type: 'incomingUsers',
        connections: wss.clients.size
      })
      );
    });
  });

});