import { v4 } from 'node-uuid';

const fakeDb = {
  messages: [
    {
      id: v4(),
      text: 'hey',
    }, {
      id: v4(),
      text: 'ho',
    }, {
      id: v4(),
      text: 'hii',
    }, {
      id: v4(),
      text: 'let',
    }, {
      id: v4(),
      text: 'hey',
    },
  ],
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchMessages = filter => delay(500).then(() => fakeDb.messages);

export const sendMessage = (text) => delay(500).then(() => {
  const message = {
    id: v4(),
    text,
  };

  fakeDb
    .messages
    .push(message);
  return message;
});
