import Config from 'react-native-config';
export const IP_STACK_URL = `http://api.ipstack.com/check?access_key=${Config.IP_STACK_API_KEY}`;
export const MASTER_DATA_URL = `${Config.API_URL}/Member/GetMasterData`;
export const LOGIN_WITH_EMAIL_URL = `${Config.API_URL}/GetToken`;
export const SIGN_UP_WITH_EMAIL_URL = `${Config.API_URL}/Member/Register`;

var base64 = require('base-64');
var username = Config.USER_NAME;
var password = Config.PASSWORD;
var basicAuth = 'Basic ' + base64.encode(username + ':' + password);
export const header = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: basicAuth,
};
