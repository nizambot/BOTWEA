const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix }) => {
let prem = `Kenapa kak?`.trim()

await conn.send2Button(m.chat, prem.trim(), '© Z U L - B O T Z', 'Gpp', '.yl', 'Mau lihat menu', '.bwha', { sendEphemeral: true, quoted: m })}


handler.help = ['hai']
handler.tags = ['hai']
handler.command = /^(ai)$/i

module.exports = handler