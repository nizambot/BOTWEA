let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6289614412045', 'Yanz', m)
  m.reply('wa.me/6289614412045')
}

handler.command = /^pj1$/i

module.exports = handler
