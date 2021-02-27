require('./application')

// DEV RELOAD
try {
    const options = {
        debug: true,
        ignore: [ 'src' ]
    }
    require('electron-reloader')(module, options)
} catch (err) {
    console.log(err)
}
