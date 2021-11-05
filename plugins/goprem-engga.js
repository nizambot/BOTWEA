let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
okelah
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Waduh*', 'status@broadcast')
}
handler.command = /^(ndak)$/i

module.exports = handler