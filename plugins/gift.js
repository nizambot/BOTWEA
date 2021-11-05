let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Randommu!`, m)
    if (args[0] == ZULGG' || args[0] == 'Zul4You' || args[0] == 'AIUEO' || args[0] == 'ZulGanzy') {

     await conn.send2Button(m.chat, "*SELAMAT!*\n\nKamu telah mendapatkan\nMONEY BANYAK\nDan LIMIT BANYAK", '© Z U L - B O T Z', 'Get again', '.random ZULGG', 'Goprem', '.goprem', { sendEphemeral: true, quoted: m })
     //   conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\nXP 99999999999\nMONEY 99999999999\nDan LIMIT 99999999999', m)
    global.DATABASE._data.users[m.sender].money += 99999999999 //tambah aja bang
    global.DATABASE._data.users[m.sender].limit += 99999999999 //tambah aja kalo mau
    } else {
   await conn.sendButton(m.chat, "*KODE RANDOM TIDAK VALID!*\n\nSilahkan hubungi Owner untuk beli kode random yang valid dengan cara ketik !belikode atau dapatkan kode random secara gratis dengan cara menghubungi owner!", '© Z U L - B O T Z', 'Belikode', '.belikode', { sendEphemeral: true, quoted: m })}
   //   conn.reply(m.chat, `*KODE RANDOM TIDAK VALID!*\n\nSilahkan hubungi Owner untuk beli kode random yang valid dengan cara ketik !belikode atau dapatkan kode random secara gratis dengan cara menghubungi owner!`, m)
    }
    
handler.help = ['random <kode>']
handler.tags = ['hadiah']
handler.command = /^(random)$/i
handler.premium = true
handler.private = true

handler.limit = false

module.exports = handler
