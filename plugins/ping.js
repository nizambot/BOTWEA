let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('_Testing speed..._')
  let neww = performance.now()
  m.reply(neww - old + 'ms')
}
handler.help = ['ping']
handler.tags = ['info', 'tools']

handler.command = /^(ping|pg)$/i
module.exports = handler
