const fs = require('fs');
const prompt = require('prompt-sync')();
const nReadlines = require('n-readlines');
const broadbandLines = new nReadlines('games');


function read_data () {
    var i = 0;
    let line;
    let lineNumber = 1;

    while (line = broadbandLines.next()) {
        while (line.toString('ascii')[i] != ':') {
            i++
        }
        console.log(line.toString('ascii').substring(0, i));
        i = 0;
        lineNumber++;
    }
}

function new_games () {
    const name = prompt('');

}

function menu () {
    console.log("Hello to pc2console");
    console.log("1 - Start games");
    console.log("2 - Add new games");

    const option = prompt('enter number : ');
    if (option === '1') {
        read_data();
    } else if (option === '2') {
        new_games();
    } else {
        console.log("Bad option");
        return (0);
    }
}

menu();