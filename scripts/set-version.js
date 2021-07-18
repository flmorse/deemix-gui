const { execSync } = require('child_process')
const fs = require('fs')

function generateVersion(){
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const commitsNumber = String(execSync('git rev-list --count HEAD')).trim()
  const commitHash = String(execSync('git rev-parse --short=10 HEAD')).trim()

  return `${year}.${month}.${day}-r${commitsNumber}.${commitHash}`
}

let package = JSON.parse(fs.readFileSync('package.json'))
package.version = generateVersion()
fs.writeFileSync('package.json', JSON.stringify(package, null, 2)+"\n")
