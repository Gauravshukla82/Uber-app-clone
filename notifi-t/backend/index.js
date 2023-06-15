const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Handle incoming socket connections
io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle notification event
  socket.on('notification', (data) => {
    console.log(' Backend Notification:', data);
    // Broadcast the notification to all connected sockets
    io.emit('newNotification', data);
  });

//   Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

