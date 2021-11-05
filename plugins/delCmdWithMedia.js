module.exports = Object.assign(async function handler(m, { text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `Tidak ada hash`
    delete global.DATABASE._data.sticker[hash]
    let sticker = global.DATABASE._data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'You have no permission to delete this sticker command'
    m.reply(`Done!`)
}, {
    help: ['cmd'].map(v => 'del' + v + ' <text>'),
    tags: ['database'],
    owner: ['true'],
    command: ['delcmd']
})