let handler = function (m) {
  // this.sendContact(m.chat, '6285795431803', 'Andy', m)
  conn.sendContact(m.chat, '6285643260438', 'PINO', m)
  m.reply('wa.me/6285643260438')
}

handler.command = /^qw$/i

module.exports = handler
