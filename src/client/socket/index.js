import io from 'socket.io-client';

const socket = io(`${location.protocol}//${location.hostname}:3030`);

socket.on('connect', () => {
  console.log('connected');
});

export default socket;
