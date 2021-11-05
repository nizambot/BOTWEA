let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
https://github.com/Nurutomo/wabot-aq
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ini bang*', 'status@broadcast')
}
handler.help = ['scbot']
handler.tags = ['info']
handler.command = /^(sc|scbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
