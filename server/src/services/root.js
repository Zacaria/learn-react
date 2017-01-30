import pjson from '../../../package.json';
import { WELCOME } from '../constants/infos';

export const websiteRoot = ({ protocol, host }) => ({
  message: WELCOME,
  version: pjson.version,
  doc: protocol + '://' + host + '/doc',
  signup: protocol + '://' + host + '/signup',
  signin: protocol + '://' + host + '/signin',
  users: protocol + '://' + host + '/users',
  posts: protocol + '://' + host + '/posts',
});
