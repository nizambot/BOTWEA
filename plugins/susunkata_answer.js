const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suka/i.test(m.quoted.text)) return !0
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    if (!(id in conn.susunkata)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == conn.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))
        if (/^.*suka$/i.test(m.text)) return !0
        if (m.text.toLowerCase() == json.data.jawaban.toLowerCase().trim()) {
            global.DATABASE.data.users[m.sender].exp += conn.susunkata[id][2]
            m.reply(`*Benar!*\n+${conn.susunkata[id][2]} XP`)
            clearTimeout(conn.susunkata[id][3])
            delete conn.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.data.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
