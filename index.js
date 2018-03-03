const EventEmitter = require('events');

class KtotamBot extends EventEmitter {
  message (message) {
    this.emit('message', {
      client: message.client,
      text: 'Кто там?'
    });
  }
}

module.exports = KtotamBot;
