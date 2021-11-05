let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 INFO BOT 」
│
│> Bot Recoded By :
│• N I Z A M
│
│> Bot Dibuat Dengan :
│• JavaScript via NodeJS
│• FFmpeg
│
│> Thanks To :
│• Nurutomo
│• Anti Bot
│• Drawl Nag
│
│> Donasi :
│• INDOSAT [+6285643260438]
│• TELKOMSEL [+6285643260438]
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Udah jomblo*\n*Gans pula*\n*Ya Nizam Lah:v*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['p']
handler.command = /^(ingfo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
