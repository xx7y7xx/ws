'use strict';

var WebRocket = 'undefined' !== typeof WebSocket
  ? WebSocket : ('undefined' !== typeof MozWebSocket ? MozWebSocket : null);

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @api public
 */
function WS(uri, protocols) {
  var instance;

  if (protocols) {
    instance = new WebRocket(uri, protocols);
  } else {
    instance = new WebRocket(uri);
  }

  return instance;
}

if (WebRocket) WS.prototype = WebRocket.prototype;

//
// Expose the Module
//
module.exports = WebRocket ? WS : null;
