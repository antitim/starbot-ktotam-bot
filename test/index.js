require('chai').should();
const KtotamBot = require('..');

const bot = new KtotamBot({
  message: 'Кто там?'
});

describe('ktotam-bot', () => {
  it('greeting', async () => {
    bot.on('message', (data) => {
      data.should.deep.equal({
        client: 'userId',
        text: 'Кто там?'
      });
    });

    bot.message({
      client: 'userId',
      text: 'Привет'
    });
  });
  
  it('myname', async () => {
    bot.on('message', (data) => {
      data.should.deep.equal({
        client: 'userId',
        text: 'Кто там?'
      });
    });

    bot.message({
      client: 'userId',
      text: 'Это я, почтальон Печкин'
    });
  });
});
