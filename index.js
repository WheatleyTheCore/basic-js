var fs = require('fs')
var chalk = require('chalk')


fs.readFile('./data.txt', 'utf8', (err, data) => {
    let content = data.split(' ');
    let color = content[0];
    let txt = content[1];
    console.log(chalk[color](txt));
})
