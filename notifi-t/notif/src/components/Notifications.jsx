import React, { useEffect } from 'react';
import io from 'socket.io-client';

const Notifications = () => {
  const socket = io('http://localhost:3000'); // Connect to the server

  useEffect(() => {
    // Handle incoming notifications
    socket.on('newNotification', (data) => {
      console.log('New notification:', data);
      // Update the UI with the received notification
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendNotification = () => {
    const notificationData = {
      message: 'New notification uber!',
      // Additional notification data
    };
    console.log(notificationData);
    // Emit the notification event to the server
    socket.emit('notification', notificationData);
  };

  return (
    <div>
      <button onClick={sendNotification}>Send Notification</button>
      {/* Render notifications */}
    </div>
  );
};

export default Notifications;
