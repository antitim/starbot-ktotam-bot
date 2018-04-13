const EventEmitter = require('events');

class KtotamBot extends EventEmitter {
  constructor (settings) {
    super(settings);

    if (!settings.message) throw new Error('Not specified "message" in settings');

    this.settings = settings;
  }
  message (message) {
    this.emit('message', {
      client: message.client,
      text: this.settings.message,
    });
  }
}

module.exports = KtotamBot;
