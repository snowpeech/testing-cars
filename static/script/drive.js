const FORWARD = 'FORWARD';
const REVERSE = 'REVERSE';
const NORTH = 'NORTH';
const SOUTH = 'SOUTH';
const EAST = 'EAST';
const WEST = 'WEST';
const RIGHT = 'RIGHT';
const LEFT = 'LEFT';

function reverse(car) { //tested
    let direction = getDirection(car);
    moveIt(car, direction, REVERSE);
}

function forward(car) { //tested
    let direction = getDirection(car);
    moveIt(car, direction, FORWARD);
}

function turnRight(car) {
    let direction = getDirection(car);
    
    car.className = turnIt(car.className, direction, RIGHT);
}

function turnLeft(car) {
    let direction = getDirection(car);

    car.className = turnIt(car.className, direction, LEFT);
}

function turnIt(classes, direction, cmd) {
    let newClassesString;
    switch(direction) {
        case NORTH:
            if(cmd == RIGHT) {
                newClassesString = classes.replace("north", 'east');
            }
            else if (cmd == LEFT) {
                newClassesString = classes.replace("north", 'west');
            }
            break;
        case SOUTH:
            if(cmd == RIGHT) {
                newClassesString = classes.replace("south", 'west');
            }
            else if (cmd == LEFT) {
                newClassesString = classes.replace("south", 'east');
            }
            break;
        case EAST:
            if(cmd == RIGHT) {
                console.log(classes)
                newClassesString = classes.replace('east', 'south');
                console.log(classes)
            }
            else if (cmd == LEFT) {
                newClassesString = classes.replace("east", 'north');
            }
            break;
        case WEST:
            if(cmd == RIGHT) {
                newClassesString = classes.replace("west", 'north');
            }
            else if (cmd == LEFT) {
                newClassesString = classes.replace("west", 'south');
            }
            break;
    }

    return newClassesString;
}
function moveIt(car, direction, cmd){
    const MOVE_VALUE = 10;
    

    switch(direction) {
        case NORTH:
            var top = car.style.top.replace('px','');
            var left = car.style.left.replace('px','');
            if(cmd == FORWARD) {
                car.style.top = (parseInt(top) - MOVE_VALUE)+'px';
            }
            else if (cmd == REVERSE) {
                car.style.top = (parseInt(top) + MOVE_VALUE)+'px';
            }
            break;

        case SOUTH:
            var top = car.style.top.replace('px','');
            var left = car.style.left.replace('px','');
            if(cmd == FORWARD) {
                car.style.top = (parseInt(top) + MOVE_VALUE)+'px';
            }
            else if (cmd == REVERSE) {
                car.style.top = (parseInt(top) - MOVE_VALUE)+'px';
            }
            break;

        case EAST:
            var top = car.style.top.replace('px','');
            var left = car.style.left.replace('px','');
            if(cmd == FORWARD) {
                car.style.left = (parseInt(left) + MOVE_VALUE)+'px';
            }
            else if (cmd == REVERSE) {
                car.style.left = (parseInt(left) - MOVE_VALUE)+'px';
            }
            break;

        case WEST:
            var top = car.style.top.replace('px','');
            var left = car.style.left.replace('px','');

            if(cmd == FORWARD) {
                car.style.left = (parseInt(left) - MOVE_VALUE)+'px';
            }
            else if (cmd == REVERSE) {
                car.style.left = (parseInt(left) + MOVE_VALUE)+'px';
            }
            break;
    }
}

function getDirection(car) {
    var classes = car.className;
    var direction = "";
    if(classes.indexOf('north')>0) {direction = NORTH;}
    else if(classes.indexOf('south')>0) {direction = SOUTH;}
    else if(classes.indexOf('east')>0) {direction = EAST;}
    else if(classes.indexOf('west')>0) {direction = WEST;}
    return direction;
}