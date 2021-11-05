const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, usedPrefix }) => {
let prem = `Pilih bang…`.trim()

await conn.send2Button(m.chat, prem.trim(), '© ZUL×BOT', 'Jasa Sewa bot', '.zul1', 'Penjual nomor OTP Canada', '.pj2', { sendEphemeral: true, quoted: m })}


handler.help = ['groupbot']
handler.tags = ['penjual']
handler.command = /^(penjual)$/i

module.exports = handler