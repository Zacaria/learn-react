// import * as postsService from '../../services/posts';
import { EventEmitter } from 'events';
const PostEvents = new EventEmitter();
const events = ['post/newMessage'];

// Set max event listeners (0 == unlimited)
PostEvents.setMaxListeners(0);

export const register = (socket) => {
  // Bind model events to socket events
  for (let i = 0, eventsLength = events.length; i < eventsLength; i++) {
    const event = events[i];
    const listener = createListener(`${event}`, socket);

    // PostEvents.on(event, listener);
    // socket.on(event, listener);
    socket.on('disconnect', removeListener(event, listener));
  }
};

function createListener(event, socket) {
  return (doc) => {
    console.log('hey');
    socket.emit(event, doc);
  };
}

function removeListener(event, listener) {
  return () => {
    PostEvents.removeListener(event, listener);
  };
}
