// Your JS goes here
var container = document.createElement('div');
// container.style.width = 100%


document.body.append(container);

function createCheckerBoard() {
    var randomColorOne = Math.ceil(Math.random() * 100);
    var randomColorTwo = Math.ceil(Math.random() * 100);
    var randomColorThree = Math.ceil(Math.random() * 100);
    var randomColorFour = Math.ceil(Math.random() * (255 - 150) + 150);
    var randomColorFive = Math.ceil(Math.random() * (255 - 150) + 150);
    var randomColorSix = Math.ceil(Math.random() * (255 - 150) + 150);
    for (var i = 0; i < 63; i++) {
    var div = document.createElement('div');
        div.style.width = '11.1%';
        div.style.float = 'left';
        div.style.paddingBottom = '11.1%';
        container.append(div);

        if (i % 2 === 0) {
            div.style.background = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;
        } else {
            div.style.background = `rgb(${randomColorFour},${randomColorFive},${randomColorSix})`;
        }
        

        randomColorOne += 2;
        randomColorTwo += 2;
        randomColorThree += 2;
        randomColorFour -= 2;
        randomColorFive -= 2;
        randomColorSix -= 2;


    }
}

createCheckerBoard();