// Your JS goes here
var container = document.createElement('div');
// container.style.width = 100%


document.body.append(container);

function createCheckerBoard() {
    for (var i = 0; i < 63; i++) {
    var randomColorOne = Math.ceil(Math.random() * 255);
    var randomColorTwo = Math.ceil(Math.random() * 255);
    var randomColorThree = Math.ceil(Math.random() * 255);
    var div = document.createElement('div');
        div.style.width = '11.1%';
        div.style.float = 'left';
        div.style.paddingBottom = '11.1%';
        container.append(div);
        div.style.background = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;
        

        // if (i % 2 === 0) {
        //     // div.style.background = 'black';
        // } else {
        //     div.style.background = 'red';
        // }
    }
}

createCheckerBoard();