let handler = function (m) {
  if (!m.quoted) throw 'Mana yang mau di hapus?'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Gabisa itu bukan saya'
  if (!isBaileys) throw 'Nda bisa bang'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['hapus']
handler.tags = ['info']

handler.command = /^hapus?$/i

module.exports = handler