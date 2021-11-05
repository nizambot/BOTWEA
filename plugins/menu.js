let fs = require ('fs')
let moment = require ('moment-timezone')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
let handler  = async (m, { conn, usedPrefix: _p }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, money, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      'main': 'ㅤ𝐌𝐀𝐈𝐍',
      'absen': 'ㅤ𝐀𝐁𝐒𝐄𝐍 𝐌𝐄𝐍𝐔',
      'game': 'ㅤ𝐆𝐀𝐌𝐄',
      'rpg': 'ㅤ𝐑𝐏𝐆',
      'xp': 'ㅤ𝐔𝐀𝐍𝐆 𝐃𝐀𝐍 𝐋𝐈𝐌𝐈𝐓',
      'sticker': 'ㅤ𝐒𝐓𝐈𝐂𝐊𝐄𝐑',
      'kerang': 'ㅤ𝐊𝐄𝐑𝐀𝐍𝐆 𝐀𝐉𝐀𝐈𝐁',
      'quotes': 'ㅤ𝐐𝐔𝐎𝐓𝐄𝐒',
      'group': 'ㅤ𝐆𝐑𝐎𝐔𝐏',
      'premium': 'ㅤ𝐏𝐑𝐄𝐌𝐈𝐔𝐌',
      'anime': 'ㅤ𝐖𝐈𝐌𝐁𝐔 :𝐕',
      'job': 'ㅤ𝐉𝐎𝐁 𝐌𝐄𝐍𝐔',
      'toko': 'ㅤ𝐓𝐎𝐊𝐎', 
      'primbon': 'ㅤ𝐏𝐑𝐈𝐌𝐁𝐎𝐍',
      'hadiah': 'ㅤ𝐇𝐀𝐃𝐈𝐀𝐇',
      'islam': 'ㅤ𝐇𝐀𝐋𝐀𝐋 𝐌𝐄𝐍𝐔',
      'internet': 'ㅤ𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓',
      'berita': 'ㅤ𝐁𝐄𝐑𝐈𝐓𝐀 𝐌𝐄𝐍𝐔',
      'nulis': 'ㅤ𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔',
      'serti': 'ㅤ𝐒𝐄𝐑𝐓𝐈𝐅𝐈𝐊𝐀𝐓 𝐌𝐄𝐍𝐔',
      'apk': 'ㅤ𝐀𝐏𝐊 𝐌𝐎𝐃',
      'expression': 'ㅤ𝐄𝐊𝐒𝐏𝐑𝐄𝐒𝐒𝐈𝐎𝐍',
      'logo': 'ㅤ𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔',
      'anonymous': 'ㅤ𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓',
      'downloader': 'ㅤ𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔',
      'sound': 'ㅤ𝐒𝐎𝐔𝐍𝐃 𝐌𝐄𝐍𝐔',
      'stalk': 'ㅤ𝐒𝐓𝐀𝐋𝐊',
      'tools': 'ㅤ𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔',
      'fun': 'ㅤ𝐅𝐔𝐍 𝐌𝐄𝐍𝐔',
      'owner': 'ㅤ𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔',
      'host': 'ㅤ𝐇𝐎𝐒𝐓',
      'advanced': 'ㅤ𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃',
      'info': 'ㅤ𝐈𝐍𝐆𝐅𝐎',
      '': 'ㅤ𝐆𝐀𝐓𝐀𝐔 𝐀𝐏𝐀𝐀𝐍',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
*╭─❒ 𝙄𝙏𝙎 PSYCO BOTZ*
*╰──────────────❒*
──❒ *INFO* ❒──
*Gunakan _Perintah (spasi) request_ Contoh : #play Noah Menghapus Jejakmu*
❒ *SEKIAN TERIMAKASIH* ❒

*╭─❒ Jadwal*
*╰────❒ ${jadwal()}*
*╭─❒𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍*
*│* ➤𝐍𝐀𝐌𝐀 : \`\`\`${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}\`\`\`
*│* ➤𝐗𝐏 : \`\`\`${Number(exp).toLocaleString().replace(/,/g, '.')}\`\`\`
*│* ➤𝐌𝐎𝐍𝐄𝐘 : \`\`\`${Number(money).toLocaleString().replace(/,/g, '.')}\`\`\`
*│* ➤𝐋𝐈𝐌𝐈𝐓 : \`\`\`${Number(limit).toLocaleString().replace(/,/g, '.')}\`\`\`
*╰──────────────────❒*
*╭─❒𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈*
*│* - Nizam : https://www.instagram.com/xnoob_ganz/
*╰──────────────────❒*
*╭─❒𝙄𝙉𝙂𝙁𝙊*
*│* ➤𝐉𝐀𝐌 : \`\`\`%time\`\`\`
*│* ➤𝐇𝐀𝐑𝐈 : \`\`\`%week %weton\`\`\`
*│* ➤𝐓𝐀𝐍𝐆𝐆𝐀𝐋 : \`\`\`%date\`\`\`
*╰──────────────────❒*
*╭─❒𝙄𝙉𝙁𝙊 𝘽𝙊𝙏*
*│* ➤ \`\`\`Nama : PSYCO BOTZ\`\`\`
*│* ➤ \`\`\`Owner : Nizam\`\`\`
*│* ➤ \`\`\`Recode : Nizam\`\`\`
*│* ➤ \`\`\`Total user :\`\`\` \`\`\`%totalreg\`\`\`
*│* ➤ \`\`\`Run Time :\`\`\` \`\`\`%uptime\`\`\`
*│* ➤ \`\`\`Grup wa:\`\`\`
*│* ➤ \`\`\`https://chat.whatsapp.com/FJdtdDteQkkBSXkAl44sey\`\`\` 
*╰──────────────────❒*


%readmore`
    let header = conn.menu.header || '╭─❒ ```%category```'
    let body   = conn.menu.body   || '│➣ ```%cmd%islimit```'
    let footer = conn.menu.footer || '*╰────────────────❒*\n'
    let after  = conn.menu.after  || '➣ ㅤ```T E N G S - T O``` \n\n*N U R U T O M O*\n*DONASI LAH BANG*'
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => ''+replace[name])
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => ''+replace[name])
        
  
conn.fakeReply(m.chat, `Loading...`, '0@s.whatsapp.net','*BENTAR BANG*')
conn.reply(m.chat, text.trim(),  {
 key: {
  participant: '0@s.whatsapp.net',
  remoteJid: 'status@broadcast'
 },
 message: {
  imageMessage: {
   caption: `*Hi, ${ucapan()} ${ucapin()} ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} ✨ ${kerjaan()}*`,
   jpegThumbnail: fs.readFileSync(`${pickRandom(['./src/logo.jpg', './src/xixi.jpg'])}`)
  }
 }
}) 

  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^bwha$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dini hari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
function ucapin() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "🌃"
    if (time >= 4) {
        res = "🌄"
    }
    if (time > 10) {
        res = "☀️"
    }
    if (time >= 15) {
        res = "🌆"
    }
    if (time >= 18) {
        res = "🌉"
    }
    return res
}
function kerjaan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Jam segini udah main hp"
    if (time >= 4) {
        res = "Ga sekolah bang?"
    }
    if (time > 10) {
        res = "Udah pulang sekolah?"
    }
    if (time >= 15) {
        res = "Istirahat dulu bang"
    }
    if (time >= 18) {
        res = "Tidur bang"
    }
    return res
}
function jadwal() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Turu"
    if (time >= 4) {
        res = "Sekumlah"
    }
    if (time > 10) {
        res = "Pulang sekumlah"
    }
    if (time >= 15) {
        res = "Main gem"
    }
    if (time >= 18) {
        res = "Turu"
    }
    return res
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
