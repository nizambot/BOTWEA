let handler = function (m) {
  // this.sendContact(m.chat, '6285795431803', 'Ank Anj', m)
  conn.sendContact(m.chat, '62856432604381', 'NIZAM', m)
conn.reply(m.chat, `@${global.owner[0]}
`.trim(), m, { contextIfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
conn.reply(m.chat, `wa.me/62856432604381`, m)
}

handler.command = /^owner|creator$/i

module.exports = handler
