var instructions = require('fs').readFileSync('./input.txt', 'utf8').toString().split('\r\n');
var [horizontal, vertical, aim, array, stage] = [0, 0, 0, [], 2];

// Converting input into usable data
instructions.forEach(e => {
    instructions = e.split(' ');
    array.push(instructions)
});

// Stage 1
if (stage == 1) {
    move(array);
} else {
    movetwo(array, aim);
}

function move(array) {
    for (let i = 0; i < array.length; i++) {
        direction = array[i][0];
        value = parseInt(array[i][1]);
        if (direction == 'up') {
            vertical = vertical - parseInt(value);
        } else if (direction == 'down') {
            vertical = vertical + parseInt(value);
        } else {
            horizontal = horizontal + parseInt(value);
        }
    }

    console.log('Horizontal: ' + horizontal);
    console.log('Vertical: ' + vertical);
    console.log('Product: ' + horizontal * vertical);
}

// Stage 2
function movetwo(array, aim) {
    var [direction, value, horizontal2, vertical2] = ['', 0, 0, 0];
    for (let i = 0; i < array.length; i++) {
        [direction, value] = [array[i][0], parseInt(array[i][1])];
        if (direction == 'up') {
            aim -= value;
        } else if (direction == 'down') {
            aim += value;
        } else {
            horizontal2 += value;
            vertical2 += value * aim;
        }
    }
    console.log('Horizontal: ' + horizontal2);
    console.log('Vertical: ' + vertical2);
    console.log('Product: ' + horizontal2 * vertical2);
}