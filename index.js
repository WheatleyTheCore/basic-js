var fs = require('fs') //lets us access and read files
var chalk = require('chalk') //lets us color the output


fs.readFile('./data.txt', 'utf8', (err, data) => {
    let content = data.split(' '); //makes an array of all the words of data.txt
    let color = content[0]; //makes a variable called color that has the value of the first word in data.txr
    let txt = content[1]; //makes a variable called txt with the value of the second word in data.txt
    console.log(chalk[color](txt)); //prints the second word in data.txt colored as the first word in data.txt on the next line of the console
})
