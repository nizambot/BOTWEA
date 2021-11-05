let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Randommu!`, m)
    if (args[0] == 'ZulGanXp' || args[0] == 'ExpExp' || args[0] == 'ExpWoe' || args[0] == 'PengenXp') {

     await conn.send2Button(m.chat, "*SELAMAT!*\n\nKamu telah mendapatkan\nXP 10000", '© ZUL × BOT', 'Get again', '.random ZulGanXp', 'Udah', '.yl', { sendEphemeral: true, quoted: m })
     //   conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\nXP 99999999999\nMONEY 99999999999\nDan LIMIT 99999999999', m)
    global.DATABASE._data.users[m.sender].exp += 10000 //tambah aja sendiri
    } else {
   await conn.sendButton(m.chat, "*KODE RANDOM TIDAK VALID!*\n\nSilahkan hubungi Owner untuk beli kode random yang valid dengan cara ketik !belikode atau dapatkan kode random secara gratis dengan cara menghubungi owner!", '© ZUL × BOT', 'Belikode', '.belikode', { sendEphemeral: true, quoted: m })}
   //   conn.reply(m.chat, `*KODE RANDOM TIDAK VALID!*\n\nSilahkan hubungi Owner untuk beli kode random yang valid dengan cara ketik !belikode atau dapatkan kode random secara gratis dengan cara menghubungi owner!`, m)
    }
    
handler.help = ['randomxp <kode>']
handler.tags = ['hadiah']
handler.command = /^(randomxp)$/i
handler.premium = true

handler.limit = false

module.exports = handler