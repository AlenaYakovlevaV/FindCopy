// let x = document.getElementsByClassName('size')[0].value;
let x = 4;
const pictureList = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
addPicture();
let countPush = 0;
let number1, number2;

function addPicture() {
    shuffle(pictureList);
    count = 0;
    for (let i=0; i<x; i++) {
        for (let j=0; j<x; j++) {
            number = pictureList[count];
            drawPicture(number);
            count++;
        }
    }
}

function shuffle(arr) {
    return arr.sort(()=>Math.random()-0.5);
}

function drawPicture(number) {
    const picture = document.createElement('div');
    picture.classList.add('card', 'flex');
    picture.textContent = number;
    picture.addEventListener('click', function() {
        picture.classList.add('card-click');
        countPush++;
        if (countPush == 1) {
            number1 = picture;
            number2 = 0;
        } else if(countPush == 2) {
            number1 = number1;
            number2 = picture;
            if (number1.textContent == number2.textContent) {
                number1.classList.add('card-open');
                number2.classList.add('card-open');
                console.log(pictureList);
                for (let i=pictureList.length; i>0; i--) {
                    if (pictureList[i] == number1.textContent) {
                        pictureList.splice(i,1);
                    }
                }
                console.log(pictureList);
            } else {
                setTimeout(function() {
                    number1.classList.remove('card-click');
                    number2.classList.remove('card-click');
                }, 700);
            }
            countPush = 0;
        }
        if (pictureList.length == 1) {
            const button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = 'Сыграть еще раз';
            document.getElementById('container').appendChild(button);
            button.addEventListener('click', ()=> {
                location. reload();
            })
        }
    })

    document.getElementById('play-area').append(picture);
}
