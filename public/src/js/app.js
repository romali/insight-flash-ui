'use strict';

var defaultLanguage = localStorage.getItem('insight-language') || 'en';
var defaultCurrency = localStorage.getItem('insight-currency') || 'FLASH';
var defaultCoinName = 'flashcoin';
var defaultHeaderBackgroundColor = '#9EDD72';
var defaultFormBackgroundColor = '#333';
var defaultStatusBackgroundColor = '#333';
var defaultUSD = 'USD';
var defaultCoinUnit = 'FLASH';
var defaultMicroCoinUnit = 'mFLASH';
var defaultBits = 'bits';

angular.module('insight',[
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ngProgress',
  'ui.bootstrap',
  'ui.route',
  'monospaced.qrcode',
  'gettext',
  'angularMoment',
  'insight.system',
  'insight.socket',
  'insight.blocks',
  'insight.transactions',
  'insight.address',
  'insight.topaddress',
  'insight.blockreport',
  'insight.search',
  'insight.status',
  'insight.connection',
  'insight.currency',
  'insight.messages'
]);

angular.module('insight.system', []);
angular.module('insight.socket', []);
angular.module('insight.blocks', []);
angular.module('insight.transactions', []);
angular.module('insight.address', []);
angular.module('insight.topaddress', []);
angular.module('insight.blockreport', []);
angular.module('insight.search', []);
angular.module('insight.status', []);
angular.module('insight.connection', []);
angular.module('insight.currency', []);
angular.module('insight.messages', []);
