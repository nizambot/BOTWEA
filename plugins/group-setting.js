let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
      conn.send2Button(m.chat, 'Mau apa bang?', '© Z U L - B O T Z'', 'Buka aja bang', '.group open', 'Tutup aja bang', '.group close', { sendEphemeral: true, quoted: m })}
	} else if(args[0] == 'open') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
	} else if(args[0] == 'close') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
      conn.send2Button(m.chat, 'Mau apa bang?', '© Z U L - B O T Z'', 'Buka aja bang', '.group open', 'Tutup aja bang', '.group close', { sendEphemeral: true, quoted: m })}
    }
}         
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler