import io from 'socket.io-client';
import store from '../store';

const socket = io(`${location.protocol}//${location.hostname}:3030`);

socket.on('connect', () => {
  console.log('connected');
});

socket.on('clientId', (id) => {
  if (!localStorage.getItem('clientId'));
  localStorage.setItem('clientId', id);
});
socket.on('state', payload => {
  store.dispatch({
    type: 'STATE_UPDATE',
    payload,
  });
});
export default socket;
