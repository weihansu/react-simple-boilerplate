Chatty - Message App w/ React
=====================

A simple single-page React-based chat app. Developed during bootcamp at Lighthouse Labs.

## Getting Started

Clone this repo and create your own git repo.

```
git clone git@github.com:weihansu/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

#### Install the dependencies and start the server.

```
npm install
npm start
# open http://localhost:3000 on your browser
```

#### Install the dependencies and start the Websocket's server. Start this server in another terminal's session.

```
cd chatty_server
npm install
node server.js
```

## Screenshots

!["Screenshot of first message"](https://github.com/weihansu/react-simple-boilerplate/blob/master/docs/chat-hello.png)

!["Screenshot of more users"](https://github.com/weihansu/react-simple-boilerplate/blob/master/docs/chat-change-name.png)

!["Screenshot of add message with image url"](https://github.com/weihansu/react-simple-boilerplate/blob/master/docs/chat-with-images.png)

## Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

WebSocket's Server
* [ws](https://www.npmjs.com/package/ws)
* [express](https://www.npmjs.com/package/express)
* [string-to-color](https://www.npmjs.com/package/string-to-color)
* [uuid](https://www.npmjs.com/package/uuid)