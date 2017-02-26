'use strict';

module.exports = function (bot, store) {
  /**
   * Бот автоответчик
   */
  let text = bot.message;

  return async function (userId, message) {
    return {
      userId,
      text
    };
  };
};
