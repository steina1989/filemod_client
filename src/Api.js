import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToFileChanges(cb) {
    socket.on('filecontent', data => cb(null, data));
    socket.emit('subscribeToFileChanges');
}
export { subscribeToFileChanges }