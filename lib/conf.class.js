const NginxConfFile = require('nginx-conf').NginxConfFile;
const path = require('path')

module.exports = function (location) {
  return new Promise ((resolve, reject) => {
    NginxConfFile.create(location, function(err, conf) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(conf)
      resolve(conf)
    })
  })
}
