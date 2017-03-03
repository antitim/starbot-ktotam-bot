'use strict';

module.exports = function (bot, store) {
  /**
   * Bot autoresponder
   */
  let text = bot.message;

  return async function (userId, message) {
    return {
      userId,
      text
    };
  };
};
