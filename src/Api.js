import openSocket from 'socket.io-client';
const remote = process.env.REMOTE || 'http://localhost:8000';
const socket = openSocket(remote);

// Create listeners for specific operations and lastly emit
// subscribe to kick off connection.
function subscribeToFileChanges(filemodCb, errorCb) {
    socket.on('filecontent', data => filemodCb(null, data));
    socket.on('error', err => errorCb(null, err))
    console.log(`Subscribing to ${remote}`);
    socket.emit('ls');
}

export { subscribeToFileChanges }