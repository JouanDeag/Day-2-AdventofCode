const fs = require('fs');
var array = [];
var horizontal = 0;
var vertical = 0;
var aim = 0;

// CONFIGURATION
const stage = 1;
const input = fs.readFileSync('./input.txt', 'utf-8');
var instructions = input.split('\r\n');

// Converting input into usable data
instructions.forEach(element => {
    instructions = element.split(' ');
    array.push(instructions)
});

// Stage 1

instr(array, aim)

function instr(array, aim) {
    if (stage == 1) {
        for (let i = 0; i < array.length; i++) {
            move(array[i][0], array[i][1])
        }
    } else {
        movetwo(array, aim)
    }
    
}

function move(direction, value) {
    if (direction == 'up') {
        vertical = vertical-parseInt(value);
    } else if (direction == 'down') {
        vertical = vertical+parseInt(value);
    } else {
        horizontal = horizontal+parseInt(value);
    }
}

console.log('--------------------');
console.log('Horizontal: ' + horizontal);
console.log('Vertical: ' + vertical);
console.log('Sum: ' + horizontal*vertical);

// Stage 2

function movetwo(array) {
    var aim = 0;
    var direction = '';
    var value = 0;
    var horizontal2 = 0;
    var vertical2 = 0;
    for (let i = 0; i < array.length; i++) {

        direction = array[i][0];
        value = parseInt(array[i][1]);
        if (direction == 'up') {
            aim = aim-value;
        } else if (direction == 'down') {
            aim = aim+value;
        } else {
            horizontal2 = horizontal2+value;
            vertical2 = vertical2+value*aim;
        }
    }
    console.log('-----------');
    console.log('Horizontal2: ' + horizontal2);
    console.log('Vertical2: ' + vertical2);
    console.log('Sum2: ' + horizontal2*vertical2);
}