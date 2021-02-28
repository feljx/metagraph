const { resolve } = require('path')

//
// Output folder and static assets config
//

const config = {
    folderIn: resolve(process.cwd(), 'src'),
    folderOut: resolve(process.cwd(), 'dist'),
    folderStatic: resolve(process.cwd(), 'src', 'static')
}

module.exports = {
    config
}
