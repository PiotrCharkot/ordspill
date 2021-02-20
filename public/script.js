getData();

//declare variables
let A1, B1, C1, D1, E1, F1, G1, H1, I1, J1, K1, L1, M1, N1, O1, P1;
let S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13;

const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');
const x = document.getElementById('i');
const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');
const m = document.getElementById('m');
const n = document.getElementById('n');
const o = document.getElementById('o');
const p = document.getElementById('p');
const y = document.getElementById('y');

let pointsDisplay = document.getElementById('points');
let maxPointsDisplay = document.getElementById('max-points');
let wordsDisplay = document.getElementById('player-words');
let maxWordsToDisplay = document.getElementById('max-words');
let playerAnswer = document.getElementById('word');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('sek');
let breakeSpan = document.getElementById('subtitles-time');
let playersList = document.getElementById('players-list');
let playersListText = document.getElementById('my-place-text');
let myPlace = document.getElementById('my-place');
let logReg = document.getElementById('logReg');
let logout = document.getElementById('logout');
let nameDisplay = document.getElementById('uname');
let showWordDiv = document.getElementById('showWord');

let optA = ['b', 'e', 'f'];
let optB = ['a', 'e', 'f', 'g', 'c'];
let optC = ['b', 'f', 'g', 'h', 'd'];
let optD = ['c', 'g', 'h'];
let optE = ['a', 'b', 'f', 'j', 'i'];
let optF = ['a', 'b', 'c', 'g', 'k', 'j', 'i', 'e'];
let optG = ['b', 'c', 'd', 'h', 'l', 'k', 'j', 'f'];
let optH = ['d', 'c', 'g', 'k', 'l'];
let optI = ['e', 'f', 'j', 'n', 'm'];
let optJ = ['e', 'f', 'g', 'k', 'o', 'n', 'm', 'i'];
let optK = ['f', 'g', 'h', 'l', 'p', 'o', 'n', 'j'];
let optL = ['h', 'g', 'k', 'o', 'p'];
let optM = ['i', 'j', 'n'];
let optN = ['m', 'i', 'j', 'k', 'o'];
let optO = ['n', 'j', 'k', 'l', 'p'];
let optP = ['o', 'k', 'l'];

let wordArray = [];
let answers = [];
let points = 0;
let arrForEvents = [];
let arrForSquares = [];
let arrOfSquareDivs = [a, b, c, d, e, f, g, h, x, j, k, l, m, n, o, p];
let solution;
let clockCounter;
let timeToReload;
let maxPoints = 0;
let maxWords;
let randomCombo;
let onBreake = false;
let breakeOfset = 20;
let ofset = 1;
let postTime = 800000;
let id;
let name = '';
let longestAnswer = '';
let lastButOne;
let lastElement;



//getting data from server

async function getData() {

const resName = await fetch('/name');
const uname = await resName.json();
console.log(uname);
if (uname === 'Anonym') {
    name = uname;
    console.log(name);
    logout.classList.add('hide')
} else {
    name = uname;
    console.log(name);
    nameDisplay.textContent = name;
    logReg.classList.add('hide');
    logout.classList.remove('hide')
}


const response = await fetch('/grid');
const serverGrid = await response.json();
console.log(serverGrid);

A1 = serverGrid.A1;
B1 = serverGrid.B1;
C1 = serverGrid.C1;
D1 = serverGrid.D1;
E1 = serverGrid.E1;
F1 = serverGrid.F1;
G1 = serverGrid.G1;
H1 = serverGrid.H1;
I1 = serverGrid.I1;
J1 = serverGrid.J1;
K1 = serverGrid.K1;
L1 = serverGrid.L1;
M1 = serverGrid.M1;
N1 = serverGrid.N1;
O1 = serverGrid.O1;
P1 = serverGrid.P1;

a.textContent = A1;
b.textContent = B1;
c.textContent = C1;
d.textContent = D1;
e.textContent = E1;
f.textContent = F1;
g.textContent = G1;
h.textContent = H1;
x.textContent = I1;
j.textContent = J1;
k.textContent = K1;
l.textContent = L1;
m.textContent = M1;
n.textContent = N1;
o.textContent = O1;
p.textContent = P1;


S3 = serverGrid.answer3letters;
S4 = serverGrid.answer4letters;
S5 = serverGrid.answer5letters;
S6 = serverGrid.answer6letters;
S7 = serverGrid.answer7letters;
S8 = serverGrid.answer8letters;
S9 = serverGrid.answer9letters;
S10 = serverGrid.answer10letters;
S11 = serverGrid.answer11letters;
S12 = serverGrid.answer12letters;
S13 = serverGrid.answer13letters;

solution = [ ...S3, ...S4, ...S5, ...S6, ...S7, ...S8, ...S9, ...S10, ...S11, ...S12, ...S13  ];


clockCounter = serverGrid.clockCounter;
randomCombo = serverGrid.randomCombo;

id = Math.random();  

//count max-points
let arrOfSolutions = [S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13]
for (let i = 0; i < arrOfSolutions.length; i++) {
    if (arrOfSolutions[i] != []) {
        for (let j = 0; j < arrOfSolutions[i].length; j++) {
            maxPoints += Math.pow(arrOfSolutions[i][j].length - 2, 2)
        } 
    }
}   

maxPointsDisplay.textContent = maxPoints;
console.log('clock counter', clockCounter);


//count max-word

maxWords = S3.length + S4.length + S5.length + S6.length + S7.length + 
S8.length + S9.length + S10.length + S11.length + S12.length + S13.length;

maxWordsToDisplay.textContent = maxWords;

console.log(maxWords);

//display time of a game

timeDisplay(clockCounter);


//post results to server


postTime = (clockCounter - breakeOfset) * 1000;
console.log(postTime);
setTimeout( async () => {

    removeEventsBreak();
    longestAnswer = findLongest(answers);
    displayLongest(randomCombo);
    addToListResults(S13, S12, S11, S10, S9, S8, S7, S6, S5, S4, S3)

    gameData = { points, id, name, longestAnswer };

    resultsOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
    };

    let resultResponse = await fetch('/results', resultsOptions);
    let parsedResults = await resultResponse.json();
    console.log(parsedResults);
    console.log(playersList);

    updatePlayersList(parsedResults, id);

}, postTime)



//reloads page (pass the time that depends on clockcounter)

timeToReload = clockCounter * 1000;

reloader(timeToReload);

}


//display time on screen
function timeDisplay(time) {
    
    let restSec;
    let restMin;

    if (time < 20) {
        onBreake = true;
    }

    if (onBreake) {
        console.log('break');
        console.log(time);
        console.log(clockCounter);
        breakeSpan.textContent = 'PAUSE TID: '
        setInterval(() => {
            minutes.textContent = 0;
            seconds.textContent = time;
            if (seconds.textContent.length < 2) {
                seconds.textContent = '0' + time;
            }
            time--;
        }, 1000)   
    } else {
        if (time - breakeOfset > 59) {
            restMin = 1;
            minutes.textContent = restMin;
            restSec = time - breakeOfset - 60;
            seconds.textContent = restSec;
            
            let over60 = setInterval(() => {
                if (restMin === 0 && restSec === 0) {
                    minutes.textContent = 0;
                    seconds.textContent = '0' + 0;
                    onBreake = true;
                    clearInterval(over60)
                    timeDisplay(time - ofset);
                    return;
                }
                if (restSec === 0) {
                    restMin--;
                    time--;
                    minutes.textContent = restMin;
                    restSec = 59;
                }
                seconds.textContent = restSec;
                if (seconds.textContent.length < 2) {
                    seconds.textContent = '0' + restSec;
                }
                restSec--;
                time--;
            }, 1000)  
        
        } else {
            restMin = 0;
            restSec = time - breakeOfset;
            minutes.textContent = restMin;
            let under60 = setInterval(() => {
                if (restSec === 0 && restMin === 0) {
                    minutes.textContent = 0;
                    seconds.textContent = '0' + 0;
                    onBreake = true;
                    clearInterval(under60)
                    timeDisplay(time - 2 * ofset);
                    return;
                }
                seconds.textContent = restSec;
                if (seconds.textContent.length < 2) {
                    seconds.textContent = '0' + restSec;
                }
                restSec--;
                time--;
            }, 1000) 
        }
    }
}

//reloads page at the end
function reloader(time) {
    
    setTimeout(() => {
        location.reload(true)
    }, time)

}


//event handler for squares

const btn = document.getElementById('btn');

btn.addEventListener('click', confirmWord)

a.addEventListener('click', addLetterA);
b.addEventListener('click', addLetterB);
c.addEventListener('click', addLetterC);
d.addEventListener('click', addLetterD);
e.addEventListener('click', addLetterE);
f.addEventListener('click', addLetterF);
g.addEventListener('click', addLetterG);
h.addEventListener('click', addLetterH);
x.addEventListener('click', addLetterI);
j.addEventListener('click', addLetterJ);
k.addEventListener('click', addLetterK);
l.addEventListener('click', addLetterL);
m.addEventListener('click', addLetterM);
n.addEventListener('click', addLetterN);
o.addEventListener('click', addLetterO);
p.addEventListener('click', addLetterP);


function addLetterA() {
    a.classList.add('square_checked');
    wordArray.push(a.textContent);
    arrForEvents.push('a');
    arrForSquares.push(a);
    removeEvents(optA);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterB() {
    b.classList.add('square_checked');
    wordArray.push(b.textContent);
    arrForEvents.push('b');
    arrForSquares.push(b);
    removeEvents(optB);
    showWord(wordArray);
    removeLast();
    return wordArray;
    
}

function addLetterC() {
    c.classList.add('square_checked');
    wordArray.push(c.textContent);
    arrForEvents.push('c');
    arrForSquares.push(c);
    removeEvents(optC);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterD() {
    d.classList.add('square_checked');
    wordArray.push(d.textContent);
    arrForEvents.push('d');
    arrForSquares.push(d);
    removeEvents(optD);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterE() {
    e.classList.add('square_checked');
    wordArray.push(e.textContent);
    arrForEvents.push('e');
    arrForSquares.push(e);
    removeEvents(optE);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterF() {
    f.classList.add('square_checked');
    wordArray.push(f.textContent);
    arrForEvents.push('f');
    arrForSquares.push(f);
    removeEvents(optF);
    showWord(wordArray);
    removeLast()
    return wordArray;
}

function addLetterG() {
    g.classList.add('square_checked');
    wordArray.push(g.textContent);
    arrForEvents.push('g');
    arrForSquares.push(g);
    removeEvents(optG);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterH() {
    h.classList.add('square_checked');
    wordArray.push(h.textContent);
    arrForEvents.push('h');
    arrForSquares.push(h);
    removeEvents(optH);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterI() {
    x.classList.add('square_checked');
    wordArray.push(x.textContent);
    arrForEvents.push('i');
    arrForSquares.push(i);
    removeEvents(optI);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterJ() {
    j.classList.add('square_checked');
    wordArray.push(j.textContent);
    arrForEvents.push('j');
    arrForSquares.push(j);
    removeEvents(optJ);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterK() {
    k.classList.add('square_checked');
    wordArray.push(k.textContent);
    arrForEvents.push('k');
    arrForSquares.push(k);
    removeEvents(optK);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterL() {
    l.classList.add('square_checked');
    wordArray.push(l.textContent);
    arrForEvents.push('l');
    arrForSquares.push(l);
    removeEvents(optL);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterM() {
    m.classList.add('square_checked');
    wordArray.push(m.textContent);
    arrForEvents.push('m');
    arrForSquares.push(m);
    removeEvents(optM);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterN() {
    n.classList.add('square_checked');
    wordArray.push(n.textContent);
    arrForEvents.push('n');
    arrForSquares.push(n);
    removeEvents(optN);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterO() {
    o.classList.add('square_checked');
    wordArray.push(o.textContent);
    arrForEvents.push('o');
    arrForSquares.push(o);
    removeEvents(optO);
    showWord(wordArray);
    removeLast();
    return wordArray;
}

function addLetterP() {
    p.classList.add('square_checked');
    wordArray.push(p.textContent);
    arrForEvents.push('p');
    arrForSquares.push(p);
    removeEvents(optP);
    showWord(wordArray);
    removeLast();
    return wordArray;
}



//functions checking words and answers

function confirmWord() {
    
    let word = wordArray.join('');
    showWordDiv.textContent = '';

    //check if answer is passed second time
    if (isInAnswers(word)) {
        //add and remove style
        flushOrange();
        console.log('already in answers');
    } else {
        if (isWord(word)) {
            flushGreen();
            addToList(word);
            console.log('sucess'); 
        } else {
            flushRed();
        }
    }

    pointsDisplay.textContent = points;
    wordsDisplay.textContent = answers.length;
    wordArray = [];
    arrForEvents = [];
    removeClasses();
    reAddEvents();
    removeEventForLastLetter();
    console.log(word);
    console.log(answers);
    console.log(points);
}


function isWord(word) {

    for ( let i = 0; i <= solution.length; i++ ) {
        if (solution[i] === word) {
            answers.push(word);
            points += Math.pow(word.length -2, 2);
            wordArray = [];
            return true;
        }
    }
    
}

function isInAnswers(word) {

    for ( let i = 0; i <= answers.length; i++ ) {
        if (answers[i] === word) {
            return true;
        }
    }    
}


//add events to neigbours of last choosen div

function removeEvents(option) {

    a.removeEventListener('click', addLetterA);
    b.removeEventListener('click', addLetterB);
    c.removeEventListener('click', addLetterC);
    d.removeEventListener('click', addLetterD);
    e.removeEventListener('click', addLetterE);
    f.removeEventListener('click', addLetterF);
    g.removeEventListener('click', addLetterG);
    h.removeEventListener('click', addLetterH);
    x.removeEventListener('click', addLetterI);
    j.removeEventListener('click', addLetterJ);
    k.removeEventListener('click', addLetterK);
    l.removeEventListener('click', addLetterL);
    m.removeEventListener('click', addLetterM);
    n.removeEventListener('click', addLetterN);
    o.removeEventListener('click', addLetterO);
    p.removeEventListener('click', addLetterP);
    


    for (let i = 0; i <= option.length; i++) {
        if (option[i] === 'a') {
            a.addEventListener('click', addLetterA);
        } else if (option[i] === 'b') {
            b.addEventListener('click', addLetterB);
        } else if (option[i] === 'c') {
            c.addEventListener('click', addLetterC);
        } else if (option[i] === 'd') {
            d.addEventListener('click', addLetterD);
        } else if (option[i] === 'e') {
            e.addEventListener('click', addLetterE);
        } else if (option[i] === 'f') {
            f.addEventListener('click', addLetterF);
        } else if (option[i] === 'g') {
            g.addEventListener('click', addLetterG);
        } else if (option[i] === 'h') {
            h.addEventListener('click', addLetterH);
        } else if (option[i] === 'i') {
            x.addEventListener('click', addLetterI);
        } else if (option[i] === 'j') {
            j.addEventListener('click', addLetterJ);
        } else if (option[i] === 'k') {
            k.addEventListener('click', addLetterK);
        } else if (option[i] === 'l') {
            l.addEventListener('click', addLetterL);
        } else if (option[i] === 'm') {
            m.addEventListener('click', addLetterM);
        } else if (option[i] === 'n') {
            n.addEventListener('click', addLetterN);
        } else if (option[i] === 'o') {
            o.addEventListener('click', addLetterO);
        } else if (option[i] === 'p') {
            p.addEventListener('click', addLetterP);
        }
    }


    for (let i = 0; i <= arrForEvents.length; i++) {
        if (arrForEvents[i] === 'a') {
            a.removeEventListener('click', addLetterA);
        } else if (arrForEvents[i] === 'b') {
            b.removeEventListener('click', addLetterB);
        } else if (arrForEvents[i] === 'c') {
            c.removeEventListener('click', addLetterC);
        } else if (arrForEvents[i] === 'd') {
            d.removeEventListener('click', addLetterD);
        } else if (arrForEvents[i] === 'e') {
            e.removeEventListener('click', addLetterE);
        } else if (arrForEvents[i] === 'f') {
            f.removeEventListener('click', addLetterF);
        } else if (arrForEvents[i] === 'g') {
            g.removeEventListener('click', addLetterG);
        } else if (arrForEvents[i] === 'h') {
            h.removeEventListener('click', addLetterH);
        } else if (arrForEvents[i] === 'i') {
            x.removeEventListener('click', addLetterI);
        } else if (arrForEvents[i] === 'j') {
            j.removeEventListener('click', addLetterJ);
        } else if (arrForEvents[i] === 'k') {
            k.removeEventListener('click', addLetterK);
        } else if (arrForEvents[i] === 'l') {
            l.removeEventListener('click', addLetterL);
        } else if (arrForEvents[i] === 'm') {
            m.removeEventListener('click', addLetterM);
        } else if (arrForEvents[i] === 'n') {
            n.removeEventListener('click', addLetterN);
        } else if (arrForEvents[i] === 'o') {
            o.removeEventListener('click', addLetterO);
        } else if (arrForEvents[i] === 'p') {
            p.removeEventListener('click', addLetterP);
        }
    }



    console.log(arrForEvents)
    console.log(wordArray);

}

function reAddEvents() {
    a.addEventListener('click', addLetterA);
    b.addEventListener('click', addLetterB);
    c.addEventListener('click', addLetterC);
    d.addEventListener('click', addLetterD);
    e.addEventListener('click', addLetterE);
    f.addEventListener('click', addLetterF);
    g.addEventListener('click', addLetterG);
    h.addEventListener('click', addLetterH);
    x.addEventListener('click', addLetterI);
    j.addEventListener('click', addLetterJ);
    k.addEventListener('click', addLetterK);
    l.addEventListener('click', addLetterL);
    m.addEventListener('click', addLetterM);
    n.addEventListener('click', addLetterN);
    o.addEventListener('click', addLetterO);
    p.addEventListener('click', addLetterP);
}

function addToList(word) {
    playerAnswer.innerHTML += word + "<br>";
}

function removeClasses() {

    for (let i = 0; i < arrOfSquareDivs.length; i++) {
        arrOfSquareDivs[i].classList.remove('square_checked');
    }
    
}


function removeEventsBreak() {

    a.removeEventListener('click', addLetterA);
    b.removeEventListener('click', addLetterB);
    c.removeEventListener('click', addLetterC);
    d.removeEventListener('click', addLetterD);
    e.removeEventListener('click', addLetterE);
    f.removeEventListener('click', addLetterF);
    g.removeEventListener('click', addLetterG);
    h.removeEventListener('click', addLetterH);
    x.removeEventListener('click', addLetterI);
    j.removeEventListener('click', addLetterJ);
    k.removeEventListener('click', addLetterK);
    l.removeEventListener('click', addLetterL);
    m.removeEventListener('click', addLetterM);
    n.removeEventListener('click', addLetterN);
    o.removeEventListener('click', addLetterO);
    p.removeEventListener('click', addLetterP);
    
    btn.removeEventListener('click', confirmWord)

    removeClasses();


}


function addToListResults(s13, s12, s11, s10, s9, s8, s7, s6, s5, s4, s3) {
    
    let checkBox = true;

    playerAnswer.innerHTML = "<br>";

    if (s13.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>13-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s13.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s13[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s13[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s13[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s12.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>12-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s12.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s12[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s12[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s12[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s11.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>11-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s11.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s11[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s11[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s11[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s10.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>10-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s10.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s10[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s10[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s10[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s9.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>9-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s9.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s9[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s9[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s9[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s8.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>8-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s8.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s8[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s8[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s8[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s7.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>7-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s7.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s7[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s7[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s7[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s6.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>6-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s6.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s6[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s6[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s6[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s5.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>5-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s5.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s5[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s5[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s5[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s4.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>4-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s4.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s4[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s4[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s4[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }

    if (s3.length > 0) {
        playerAnswer.innerHTML += "<span id='answerTitle'>3-bokstavsord</span>" + "<br>"
        for (let i = 0; i < s3.length; i++) {
            checkBox = true;
            for (let j = 0; j < answers.length; j++) {
                if (answers[j] === s3[i]) {
                    playerAnswer.innerHTML += "<span id='answerPlayer'>" + s3[i] + "</span>" + "<br>";
                    checkBox = false;
                }
            }

            if (checkBox) {
                playerAnswer.innerHTML += s3[i] + "<br>";
            }
        }
        playerAnswer.innerHTML += "<br>"
    }



}


function flushOrange() {
    console.log(arrForEvents);
    for (let i = 0; i < arrForSquares.length; i++) {
        arrForSquares[i].classList.add('orange');
    }

    setTimeout(() => {
        for (let i = 0; i < arrForSquares.length; i++) {
            arrForSquares[i].classList.remove('orange');
        }
        arrForSquares = [];
    }, 150)

}

function flushGreen() {
    console.log(arrForEvents);
    for (let i = 0; i < arrForSquares.length; i++) {
        arrForSquares[i].classList.add('green');
    }

    setTimeout(() => {
        for (let i = 0; i < arrForSquares.length; i++) {
            arrForSquares[i].classList.remove('green');
        }
        arrForSquares = [];
    }, 150)

}

function flushRed() {
    console.log(arrForEvents);
    for (let i = 0; i < arrForSquares.length; i++) {
        arrForSquares[i].classList.add('red');
    }

    setTimeout(() => {
        for (let i = 0; i < arrForSquares.length; i++) {
            arrForSquares[i].classList.remove('red');
        }
        arrForSquares = [];
    }, 150)

}

function displayLongest(combo) {
    for (let i = 0; i < combo.length; i++) {
        if (combo[i] === 'a') {
            a.classList.add('green');
        } else if (combo[i] === 'b') {
            b.classList.add('green');
        } else if (combo[i] === 'c') {
            c.classList.add('green');
        } else if (combo[i] === 'd') {
            d.classList.add('green');
        } else if (combo[i] === 'e') {
            e.classList.add('green');
        } else if (combo[i] === 'f') {
            f.classList.add('green');
        } else if (combo[i] === 'g') {
            g.classList.add('green');
        } else if (combo[i] === 'h') {
            h.classList.add('green');
        } else if (combo[i] === 'i') {
            x.classList.add('green');
        } else if (combo[i] === 'j') {
            j.classList.add('green');
        } else if (combo[i] === 'k') {
            k.classList.add('green');
        } else if (combo[i] === 'l') {
            l.classList.add('green');
        } else if (combo[i] === 'm') {
            m.classList.add('green');
        } else if (combo[i] === 'n') {
            n.classList.add('green');
        } else if (combo[i] === 'o') {
            o.classList.add('green');
        } else if (combo[i] === 'p') {
            p.classList.add('green');
        }
    }
}


function findLongest(answers) {

    answers.sort((a,b) => {
        return b.length - a.length;
    });

    return answers[0];

}

function updatePlayersList(parsedResults, id) {
    
    
    let place = 1;

    playersListText.style.display = "inline"
    console.log(parsedResults.winnerList.length);
    
    for (let i = 0; i < parsedResults.winnerList.length; i++) {
        

        if (place % 2 === 0) {
            if (parsedResults.winnerList[i].id === id) {
                myPlace.textContent = place;
                playersList.innerHTML += `<div id="list-item3">
                <div id="placeName">${place}. ${parsedResults.winnerList[i].name}</div>
                <div id="listPoints">${parsedResults.winnerList[i].points}</div> <br>
            </div>`
            } else {
                playersList.innerHTML += `<div id="list-item">
                <div id="placeName">${place}. ${parsedResults.winnerList[i].name}</div>
                <div id="listPoints">${parsedResults.winnerList[i].points}</div> <br>
            </div>`
            }
        } else {
            if (parsedResults.winnerList[i].id === id) {
                myPlace.textContent = place;
                playersList.innerHTML += `<div id="list-item3">
                <div id="placeName">${place}. ${parsedResults.winnerList[i].name}</div>
                <div id="listPoints">${parsedResults.winnerList[i].points}</div> <br>
            </div>`
            } else {
                playersList.innerHTML += `<div id="list-item2">
                <div id="placeName">${place}. ${parsedResults.winnerList[i].name}</div>
                <div id="listPoints">${parsedResults.winnerList[i].points}</div> <br>
            </div>`
            }
        }
        
        
        place++;
    }
}

function showWord(wordArray) {

    showWordDiv.textContent = '';

    for (let i = 0; i < wordArray.length; i++) {
        
        showWordDiv.textContent += wordArray[i];
    }
    
}

//remove last choosen div from array
function removeLast() {

    console.log(arrForSquares);

    if (arrForSquares.length < 2) {
        lastElement = arrForSquares[arrForSquares.length - 1];
        lastElement.addEventListener('click', removeLastLetter);
        console.log(arrForSquares);
    } else if (arrForSquares.length > 1) {
        lastElement.removeEventListener('click', removeLastLetter);
        lastElement = arrForSquares[arrForSquares.length - 1];
        lastElement.addEventListener('click', removeLastLetter);
    }
}

//callback for event of removing last letter from array
function removeLastLetter() {
    
    if (arrForSquares.length < 2) {
        lastElement.removeEventListener('click', removeLastLetter);
        chooseEvent();
        lastElement.classList.remove('square_checked');
        arrForSquares = [];
        arrForEvents.pop();
        wordArray.pop(); 
        showWord(wordArray)
        reAddEvents();
        console.log(arrForSquares);
    } else if (arrForSquares.length > 1) {
        lastElement.removeEventListener('click', removeLastLetter);
        chooseEvent();
        lastElement.classList.remove('square_checked');
        arrForSquares.pop();
        arrForEvents.pop();
        wordArray.pop();
        showWord(wordArray);
        lastElement = arrForSquares[arrForSquares.length - 1];
        lastElement.addEventListener('click', removeLastLetter);
        chooseOptionBack()
    }

}

//chose add event based on div
function chooseEvent() {
   
    if (lastElement === a) {
        lastElement.addEventListener('click', addLetterA);
    } else if (lastElement === b) {
        lastElement.addEventListener('click', addLetterB);
    } else if (lastElement === c) {
        lastElement.addEventListener('click', addLetterC);
    } else if (lastElement === d) {
        lastElement.addEventListener('click', addLetterD);
    } else if (lastElement === e) {
        lastElement.addEventListener('click', addLetterE);
    } else if (lastElement === f) {
        lastElement.addEventListener('click', addLetterF);
    } else if (lastElement === g) {
        lastElement.addEventListener('click', addLetterG);
    } else if (lastElement === h) {
        lastElement.addEventListener('click', addLetterH);
    } else if (lastElement === x) {
        lastElement.addEventListener('click', addLetterI);
    } else if (lastElement === j) {
        lastElement.addEventListener('click', addLetterJ);
    } else if (lastElement === k) {
        lastElement.addEventListener('click', addLetterK);
    } else if (lastElement === l) {
        lastElement.addEventListener('click', addLetterL);
    } else if (lastElement === m) {
        lastElement.addEventListener('click', addLetterM);
    } else if (lastElement === n) {
        lastElement.addEventListener('click', addLetterN);
    } else if (lastElement === o) {
        lastElement.addEventListener('click', addLetterO);
    } else if (lastElement === p) {
        lastElement.addEventListener('click', addLetterP);
    }
}

//chose neighbours to readd events based on div that was removed from array
function chooseOptionBack() {

    if (lastElement === a) {
        removeEvents(optA)
    } else if (lastElement === b) {
        removeEvents(optB)
    } else if (lastElement === c) {
        removeEvents(optC)
    } else if (lastElement === d) {
        removeEvents(optD)
    } else if (lastElement === e) {
        removeEvents(optE)
    } else if (lastElement === f) {
        removeEvents(optF)
    } else if (lastElement === g) {
        removeEvents(optG)
    } else if (lastElement === h) {
        removeEvents(optH)
    } else if (lastElement === x) {
        removeEvents(optI)
    } else if (lastElement === j) {
        removeEvents(optJ)
    } else if (lastElement === k) {
        removeEvents(optK)
    } else if (lastElement === l) {
        removeEvents(optL)
    } else if (lastElement === m) {
        removeEvents(optM)
    } else if (lastElement === n) {
        removeEvents(optN)
    } else if (lastElement === o) {
        removeEvents(optO)
    } else if (lastElement === p) {
        removeEvents(optP)
    }

}

function removeEventForLastLetter() {
    for (let i = 0; i < arrOfSquareDivs.length; i++) {
        arrOfSquareDivs[i].removeEventListener('click', removeLastLetter);
    }
}