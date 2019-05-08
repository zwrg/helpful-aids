require('babel-register')({
    presets: ['env']
});

module.exports = require("./" + process.argv.slice(2).toString().slice(0, -3));