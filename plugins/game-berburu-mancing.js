let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE.data.users[m.sender].as)
    let _timers = (500000 - __timers)
    let timers = clockString(_timers) 
    let user = global.DATABASE.data.users[m.sender]
    let buttons = [
{buttonId: 'id1', buttonText: {displayText: 'kolam'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\n*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Memancing*\n`,
    footerText: 'Z U L - B O T Z', 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.DATABASE.data.users[m.sender].as > 500000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 10)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`
let randomaku6 = `${Math.floor(Math.random() * 10)}`
let randomaku7 = `${Math.floor(Math.random() * 10)}`
let randomaku8 = `${Math.floor(Math.random() * 10)}`
let randomaku9 = `${Math.floor(Math.random() * 10)}`
let randomaku10 = `${Math.floor(Math.random() * 10)}`
let randomaku11 = `${Math.floor(Math.random() * 10)}`
let randomaku12 = `${Math.floor(Math.random() * 10)}`
.trim()

let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)
let rbrb7 = (randomaku7 * 1)
let rbrb8 = (randomaku8 * 1)
let rbrb9 = (randomaku9 * 1)
let rbrb10 = (randomaku10 * 1)
let rbrb11 = (randomaku11 * 1)
let rbrb12 = (randomaku12 * 1)

andy1 = `${rbrb1}`
andy2 = `${rbrb2}`
andy3 = `${rbrb3}`
andy4 = `${rbrb4}`
andy5 = `${rbrb5}`
andy6 = `${rbrb6}`
andy7 = `${rbrb7}`
andy8 = `${rbrb8}`
andy9 = `${rbrb9}`
andy10 = `${rbrb10}`
andy11 = `${rbrb11}`
andy12 = `${rbrb12}`

hsl = `
*《 Hasil Memancing Kali Ini 》*

 *🦀 = [ ${andy1} ]*			*🐠 = [ ${andy7} ]*
 *🦞 = [ ${andy2} ]*			 *🐟 = [ ${andy8} ]*
 *🦐 = [ ${andy3} ]*			 *🐬 = [ ${andy9} ]*
 *🦑 = [ ${andy4} ]*			 *🐳 = [ ${andy10} ]*
 *🐙 = [ ${andy5} ]*			 *🦈 = [ ${andy11} ]*
 *🐡 = [ ${andy6} ]*			*🐋 = [${andy12} ]*

 *© Z U L - B O T Z*
`
global.DATABASE.data.users[m.sender].paus += rbrb1
global.DATABASE.data.users[m.sender].kepiting += rbrb2
global.DATABASE.data.users[m.sender].gurita += rbrb3
global.DATABASE.data.users[m.sender].cumi += rbrb4
global.DATABASE.data.users[m.sender].buntal += rbrb5
global.DATABASE.data.users[m.sender].dory += rbrb6
global.DATABASE.data.users[m.sender].lumba += rbrb7
global.DATABASE.data.users[m.sender].lobster += rbrb8
global.DATABASE.data.users[m.sender].hiu += rbrb9
global.DATABASE.data.users[m.sender].udang += rbrb10
global.DATABASE.data.users[m.sender].ikan += rbrb11
global.DATABASE.data.users[m.sender].orca += rbrb12

setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 20000) 
               
                     setTimeout(() => {
                     m.reply(`*Perfect*`)
                      }, 18000)
                    
                     setTimeout(() => {
                     m.reply('Strike')
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply('Menunggu')
                     }, 14000) 
                     
                     setTimeout(() => {
                     m.reply('_Sedang Memancing..._')
                     }, 0) 
  user.as = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['mancing']
handler.tags = ['berburu']
handler.command = /^(mancing)$/i

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
