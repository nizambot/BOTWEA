let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*︵LIST HARGA SEWA BOT*

┏━❒ *DISKON 50%*
┗❒ *KHUSUS HARI JUMAT*

❒ *PAY :*

❒ *VIA GOPAY/DANA :*
  ╭─
  │ 5k SEMINGGU
  │15K SEBULAN
  ╰───► 20K PERMANEN

❒ *VIA PULSA :*
  ╭─
  │ 5k SEMINGGU
  │ 15K SEBULAN
  ╰────► 25K PERMANEN

❒ *VIA DM EPEP :*
   ╭─
   │ 20 DM SEMINGGU
   │ 70 DM SEBULAN
   ╰────► 140 DM MANEN

*NOTE : UNTUK SEWA PERMANEN ANDA DAPAT MEMASUKKAN BOT KE SEMUA GRUP YANG ANDA INGINKAN DAN ANDA DAPAT MENJADI USER PREMIUM*

*FITUR :* 
WELCOME IMAGE, ANTILINK, HIDETAG, ANTILINK YT, ANTILINK TIKTOK, VITUR GAME : CONTOH ADVENTURE, FAMILY100, JUDI, MANCING, MULUNG, BERBURU DLL..

*Reff 50% Berlaku 1 Minggu (HANYA UNTUK SEWA PERMANEN DAN PAYMENT GOPAY !!!)*



MAU TES BOT? BOLEH, FREE TES BOT SELAMA 1 JAM DI GRUP...

Minat? Chat
Grup : https://chat.whatsapp.com/H0MF4etPyC66WIwWuppuMl
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Ga minat gausah chat! ketik .penjual jika berminat*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['hooh']
handler.command = /^(jsb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
