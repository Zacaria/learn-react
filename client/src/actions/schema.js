import {schema} from 'normalizr';

export const message = new schema.Entity('message');
export const arrayOfMessage = new schema.Array(message);