'use strict';

require('chai').should();

const botScript = require('./test');
const KtotamBot = require('..');
const bot = KtotamBot(botScript);

describe('ktotam-bot', () => {
  it('greeting', async () => {
    let answer = await bot('userId', 'Привет, Бот');
    answer.text.should.equal('Кто там?');
  });
  
  it('myname', async () => {
    let answer = await bot('userId', 'Это я, почтальон Печкин');
    answer.text.should.equal('Кто там?');
  });
});
