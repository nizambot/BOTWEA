let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
y
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*y*', 'status@broadcast')
}
handler.command = /^(okelah)$/i

module.exports = handler
