import * as actions from '../actions';

export const register = (socket) => {
  socket.on('connect', () => {
    console.log('coucou');
  });

  // actions.sendMessage()

  socket.on('post/newMessage', console.log);
};

