const { execSync } = require('child_process')
const fs = require('fs')

let package = JSON.parse(fs.readFileSync('package.json'))
package.version = "0.0.0"
fs.writeFileSync('package.json', JSON.stringify(package, null, 2)+"\n")
