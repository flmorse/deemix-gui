const fs = require('fs')
const generateVersion = require('./gen-version.js')

let package = JSON.parse(fs.readFileSync('package.json'))
package.version = generateVersion()
fs.writeFileSync('package.json', JSON.stringify(package, null, 2)+"\n")
