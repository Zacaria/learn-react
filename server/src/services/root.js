import pjson from '../../../package.json';
import {WELCOME} from '../constants/infos';

export const websiteRoot = ({protocol, host}) => ({
    message    : WELCOME,
    version : pjson.version,
    doc     : protocol + '://' + host + '/doc',
    db      : protocol + '://' + host + '/rockmongo',
    signup  : protocol + '://' + host + '/api/signup',
    signin  : protocol + '://' + host + '/api/signin',
    users   : protocol + '://' + host + '/api/users',
    messages: protocol + '://' + host + '/api/messages'
});
