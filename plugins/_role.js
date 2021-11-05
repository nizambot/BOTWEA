let handler = m => m

handler.before = function (m) {
  let user = global.DATABASE.data.users[m.sender]
        let role = (user.level <= 10) ? 'Bronze'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Silver'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Gold'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Platinum'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Diamond'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Master'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Master I'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Master II'
          : 'Grand Master'
  user.role = role
  return true
}

module.exports = handler
