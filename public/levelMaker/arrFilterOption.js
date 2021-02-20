let indexes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']

let [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p] = indexes;

let grid = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
let additionalLetters = ['E', 'S', 'K', 'T', 'B', 'P', 'M', 'F'];

let [A1, B1, C1, D1, E1, F1, G1, H1, I1, J1, K1, L1, M1, N1, O1, P1] = grid;

let mainArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];

let result;
let randomBaseWord;
let randomBaseWordNoSplit;
let randomCombo;
let lengthOfBaseWordArr;
let indexOfrndWord;
let indexOfArrWithComobos;
let lengthOfResultsArr;
let indexOfrndCombo;
let lengthOfAdditionalLetters = additionalLetters.length;
let data = {};

let optA = [b, e, f];
let optB = [a, e, f, g, c];
let optC = [b, f, g, h, d];
let optD = [c, g, h];
let optE = [a, b, f, j, i];
let optF = [a, b, c, g, k, j, i, e];
let optG = [b, c, d, h, l, k, j, f];
let optH = [d, c, g, k, l];
let optI = [e, f, j, n, m];
let optJ = [e, f, g, k, o, n, m, i];
let optK = [f, g, h, l, p, o, n, j];
let optL = [h, g, k, o, p];
let optM = [i, j, n];
let optN = [m, i, j, k, o];
let optO = [n, j, k, l, p];
let optP = [o, k, l];

let optionsArr = [optA, optB, optC, optD, optE, optF, optG, optH, optI, optJ, optK, optL, optM, optN, optO, optP]; 

let arrayOf2 = [];
let arrayOf3 = [];
let arrayOf4 = [];
let arrayOf5 = [];
let arrayOf6 = [];
let arrayOf7 = [];

let arrayOf8 = [];
let arrayOf8A = [];
let arrayOf8B = [];
let arrayOf8F = [];
let arrayOf8K = [];
let arrayOf8M = [];
let arrayOf8P = [];
let arrayOf8S = [];
let arrayOf8T = [];

let arrayOf9 = [];
let arrayOf9A = [];
let arrayOf9B = [];
let arrayOf9F = [];
let arrayOf9K = [];
let arrayOf9M = [];
let arrayOf9P = [];
let arrayOf9S = [];
let arrayOf9T = [];

let arrayOf10 = [];
let arrayOf10A = [];
let arrayOf10B = [];
let arrayOf10F = [];
let arrayOf10K = [];
let arrayOf10M = [];
let arrayOf10P = [];
let arrayOf10S = [];
let arrayOf10T = [];

let arrayOf11 = [];
let arrayOf11A = [];
let arrayOf11B = [];
let arrayOf11F = [];
let arrayOf11K = [];
let arrayOf11M = [];
let arrayOf11P = [];
let arrayOf11S = [];
let arrayOf11T = [];

let arrayOf12 = [];
let arrayOf12A = [];
let arrayOf12B = [];
let arrayOf12F = [];
let arrayOf12K = [];
let arrayOf12M = [];
let arrayOf12P = [];
let arrayOf12S = [];
let arrayOf12T = [];

let arrayOf13 = [];
let arrayOf13A = [];
let arrayOf13B = [];
let arrayOf13F = [];
let arrayOf13K = [];
let arrayOf13M = [];
let arrayOf13P = [];
let arrayOf13S = [];
let arrayOf13T = [];

let store = [];
let wordForGrid = [];

result2 = gridCheck();
result = gridCheckAll(gridCheck());

//this code take text file with word bank and make arrays with diffrent length of words
let input = document.querySelector('input[type="file"]');
let wordbank = document.getElementById('wordbank');
let baseword = document.getElementById('basewords');

//input for word bank
wordbank.addEventListener('change', function(e) {
    
    const reader = new FileReader()
    reader.onload = function () {
        const lines = reader.result.split('\n').map(function (line) {
            return line.split('\t');
        })
        
        let filterdArr = [];
        let filterdArrShortWords = [];

        for (let i = 0; i < lines.length; i++) {
            if (lines[i][2] !== undefined) {
                filterdArr.push(lines[i][2]);
            }
        }

        filterdArr.sort();

        let dashFilter = /-/;
        let whiteSpace = /\s/;


        for (let i = 0; i < filterdArr.length; i++) {
            if (filterdArr[i].length < 14 
                && filterdArr[i].length > 1
                && !dashFilter.test(filterdArr[i]) 
                && !whiteSpace.test(filterdArr[i])) {
                let toLower = filterdArr[i].toUpperCase();
                filterdArrShortWords.push(toLower);
            }
        }

        finalResults = [ ...new Set(filterdArrShortWords) ];
        console.log(finalResults);
        
        

        for (let i = 0; i < finalResults.length; i++) {
            if (finalResults[i].length === 2) {
                arrayOf2.push(finalResults[i])
            } else if (finalResults[i].length === 3) {
                arrayOf3.push(finalResults[i])
            } else if (finalResults[i].length === 4) {
                arrayOf4.push(finalResults[i])
            } else if (finalResults[i].length === 5) {
                arrayOf5.push(finalResults[i])
            } else if (finalResults[i].length === 6) {
                arrayOf6.push(finalResults[i])
            } else if (finalResults[i].length === 7) {
                arrayOf7.push(finalResults[i])
            } else if (finalResults[i].length === 8 && finalResults[i].charAt(0) === 'A') {
                arrayOf8A.push(finalResults[i])
            } else if (finalResults[i].length === 8 && finalResults[i].charAt(0) === 'B') {
                arrayOf8B.push(finalResults[i])
            } else if (finalResults[i].length === 8 && finalResults[i].charAt(0) === 'F') {
                arrayOf8F.push(finalResults[i])
            } else if (finalResults[i].length === 8 && finalResults[i].charAt(0) === 'K') {
                arrayOf8K.push(finalResults[i])
            } else if (finalResults[i].length === 8 && finalResults[i].charAt(0) === 'M') {
                arrayOf8M.push(finalResults[i])
            } else if (finalResults[i].length === 8 && finalResults[i].charAt(0) === 'P') {
                arrayOf8P.push(finalResults[i])
            } else if (finalResults[i].length === 8 && finalResults[i].charAt(0) === 'S') {
                arrayOf8S.push(finalResults[i])
            } else if (finalResults[i].length === 8 && finalResults[i].charAt(0) === 'T') {
                arrayOf8T.push(finalResults[i])
            } else if (finalResults[i].length === 8) {
                arrayOf8.push(finalResults[i])
            } else if (finalResults[i].length === 9 && finalResults[i].charAt(0) === 'A') {
                arrayOf9A.push(finalResults[i])
            } else if (finalResults[i].length === 9 && finalResults[i].charAt(0) === 'B') {
                arrayOf9B.push(finalResults[i])
            } else if (finalResults[i].length === 9 && finalResults[i].charAt(0) === 'F') {
                arrayOf9F.push(finalResults[i])
            } else if (finalResults[i].length === 9 && finalResults[i].charAt(0) === 'K') {
                arrayOf9K.push(finalResults[i])
            } else if (finalResults[i].length === 9 && finalResults[i].charAt(0) === 'M') {
                arrayOf9M.push(finalResults[i])
            } else if (finalResults[i].length === 9 && finalResults[i].charAt(0) === 'P') {
                arrayOf9P.push(finalResults[i])
            } else if (finalResults[i].length === 9 && finalResults[i].charAt(0) === 'S') {
                arrayOf9S.push(finalResults[i])
            } else if (finalResults[i].length === 9 && finalResults[i].charAt(0) === 'T') {
                arrayOf9T.push(finalResults[i])
            } else if (finalResults[i].length === 9) {
                arrayOf9.push(finalResults[i])
            } else if (finalResults[i].length === 10 && finalResults[i].charAt(0) === 'A') {
                arrayOf10A.push(finalResults[i])
            } else if (finalResults[i].length === 10 && finalResults[i].charAt(0) === 'B') {
                arrayOf10B.push(finalResults[i])
            } else if (finalResults[i].length === 10 && finalResults[i].charAt(0) === 'F') {
                arrayOf10F.push(finalResults[i])
            } else if (finalResults[i].length === 10 && finalResults[i].charAt(0) === 'K') {
                arrayOf10K.push(finalResults[i])
            } else if (finalResults[i].length === 10 && finalResults[i].charAt(0) === 'M') {
                arrayOf10M.push(finalResults[i])
            } else if (finalResults[i].length === 10 && finalResults[i].charAt(0) === 'P') {
                arrayOf10P.push(finalResults[i])
            } else if (finalResults[i].length === 10 && finalResults[i].charAt(0) === 'S') {
                arrayOf10S.push(finalResults[i])
            } else if (finalResults[i].length === 10 && finalResults[i].charAt(0) === 'T') {
                arrayOf10T.push(finalResults[i])
            } else if (finalResults[i].length === 10) {
                arrayOf10.push(finalResults[i])
            } else if (finalResults[i].length === 11 && finalResults[i].charAt(0) === 'A') {
                arrayOf11A.push(finalResults[i])
            } else if (finalResults[i].length === 11 && finalResults[i].charAt(0) === 'B') {
                arrayOf11B.push(finalResults[i])
            } else if (finalResults[i].length === 11 && finalResults[i].charAt(0) === 'F') {
                arrayOf11F.push(finalResults[i])
            } else if (finalResults[i].length === 11 && finalResults[i].charAt(0) === 'K') {
                arrayOf11K.push(finalResults[i])
            } else if (finalResults[i].length === 11 && finalResults[i].charAt(0) === 'M') {
                arrayOf11M.push(finalResults[i])
            } else if (finalResults[i].length === 11 && finalResults[i].charAt(0) === 'P') {
                arrayOf11P.push(finalResults[i])
            } else if (finalResults[i].length === 11 && finalResults[i].charAt(0) === 'S') {
                arrayOf11S.push(finalResults[i])
            } else if (finalResults[i].length === 11 && finalResults[i].charAt(0) === 'T') {
                arrayOf11T.push(finalResults[i])
            } else if (finalResults[i].length === 11) {
                arrayOf11.push(finalResults[i])
            } else if (finalResults[i].length === 12 && finalResults[i].charAt(0) === 'A') {
                arrayOf12A.push(finalResults[i])
            } else if (finalResults[i].length === 12 && finalResults[i].charAt(0) === 'B') {
                arrayOf12B.push(finalResults[i])
            } else if (finalResults[i].length === 12 && finalResults[i].charAt(0) === 'F') {
                arrayOf12F.push(finalResults[i])
            } else if (finalResults[i].length === 12 && finalResults[i].charAt(0) === 'K') {
                arrayOf12K.push(finalResults[i])
            } else if (finalResults[i].length === 12 && finalResults[i].charAt(0) === 'M') {
                arrayOf12M.push(finalResults[i])
            } else if (finalResults[i].length === 12 && finalResults[i].charAt(0) === 'P') {
                arrayOf12P.push(finalResults[i])
            } else if (finalResults[i].length === 12 && finalResults[i].charAt(0) === 'S') {
                arrayOf12S.push(finalResults[i])
            } else if (finalResults[i].length === 12 && finalResults[i].charAt(0) === 'T') {
                arrayOf12T.push(finalResults[i])
            } else if (finalResults[i].length === 12) {
                arrayOf12.push(finalResults[i])
            } else if (finalResults[i].length === 13 && finalResults[i].charAt(0) === 'A') {
                arrayOf13A.push(finalResults[i])
            } else if (finalResults[i].length === 13 && finalResults[i].charAt(0) === 'B') {
                arrayOf13B.push(finalResults[i])
            } else if (finalResults[i].length === 13 && finalResults[i].charAt(0) === 'F') {
                arrayOf13F.push(finalResults[i])
            } else if (finalResults[i].length === 13 && finalResults[i].charAt(0) === 'K') {
                arrayOf13K.push(finalResults[i])
            } else if (finalResults[i].length === 13 && finalResults[i].charAt(0) === 'M') {
                arrayOf13M.push(finalResults[i])
            } else if (finalResults[i].length === 13 && finalResults[i].charAt(0) === 'P') {
                arrayOf13P.push(finalResults[i])
            } else if (finalResults[i].length === 13 && finalResults[i].charAt(0) === 'S') {
                arrayOf13S.push(finalResults[i])
            } else if (finalResults[i].length === 13 && finalResults[i].charAt(0) === 'T') {
                arrayOf13T.push(finalResults[i])
            } else if (finalResults[i].length === 13) {
                arrayOf13.push(finalResults[i])
            }
        }


    }
   
    
    reader.readAsText(input.files[0])
}, false)



//input for base word
baseword.addEventListener('change', function(e) {
    //console.log(baseword.files);
    const readerOfBase = new FileReader()
    readerOfBase.onload = function () {
        wordForGrid = readerOfBase.result.split(',');
        
        //console.log(wordForGrid);
    }

    
    readerOfBase.readAsText(baseword.files[0])
}, false)

let btn = document.getElementById('btn');
btn.addEventListener('click', makeCombinations);  //btn that run algotithm that makes all possible combos



//function that loops through main grid and make two letters long combos

function gridCheck() {

    let resultsArray = [];

    for (let j = 0; j < mainArr.length; j++) {

       for (let el of optionsArr[j]) {
           let twoLetters = [mainArr[j], el];
           resultsArray.push(twoLetters);
       }
    }
    return resultsArray;
}


//function that takes combos with two el and make all the other cominations

function gridCheckAll(shorterArr) {

    let resultsArr = [];

    for (let i = 0; i < shorterArr.length; i++) {
        
        let leng = shorterArr[i].length;
        
        if (shorterArr[i][leng - 1] === a) {
            
            for (let el of optA) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === b) {
            
            for (let el of optB) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === c) {
            
            for (let el of optC) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === d) {
            
            for (let el of optD) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === e) {
            
            for (let el of optE) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === f) {
            
            for (let el of optF) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === g) {
            
            for (let el of optG) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === h) {
            
            for (let el of optH) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === i) {
            
            for (let el of optI) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === j) {
            
            for (let el of optJ) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === k) {
            
            for (let el of optK) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === l) {
            
            for (let el of optL) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === m) {
            
            for (let el of optM) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === n) {
            
            for (let el of optN) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === o) {
            
            for (let el of optO) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } else if (shorterArr[i][leng - 1] === p) {
            
            for (let el of optP) {
                let addedOpt = [ ...shorterArr[i], el ];
                let noDuplicats = [...new Set(addedOpt)];
                if (noDuplicats.length > leng) {
                resultsArr.push(noDuplicats);
                }
            }
        } 
    }

    store.push(resultsArr);

    if (resultsArr[0].length < 13) {
        gridCheckAll(resultsArr)
    }
    
    return store;

}


//function that create words from given grid and check if words are actual words

function makeWord(arr, actualWords, actualWordsA, actualWordsB, actualWordsF, actualWordsK, actualWordsM, actualWordsP, actualWordsS, actualWordsT) {
    
    let arrOffWords = [];
    let tepmAnswer = [];
    
    //recreat grid here

    for (let i = 0; i < arr.length; i++) {

        let word = [];
            for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] === "a") {
                        word[j] = A1;
                    } else if (arr[i][j] === "b") {
                        word[j] = B1;
                    } else if (arr[i][j] === "c") {
                        word[j] = C1;
                    } else if (arr[i][j] === "d") {
                        word[j] = D1;
                    } else if (arr[i][j] === "e") {
                        word[j] = E1;
                    } else if (arr[i][j] === "f") {
                        word[j] = F1;
                    } else if (arr[i][j] === "g") {
                        word[j] = G1;
                    } else if (arr[i][j] === "h") {
                        word[j] = H1;
                    } else if (arr[i][j] === "i") {
                        word[j] = I1;
                    } else if (arr[i][j] === "j") {
                        word[j] = J1;
                    } else if (arr[i][j] === "k") {
                        word[j] = K1;
                    } else if (arr[i][j] === "l") {
                        word[j] = L1;
                    } else if (arr[i][j] === "m") {
                        word[j] = M1;
                    } else if (arr[i][j] === "n") {
                        word[j] = N1;
                    } else if (arr[i][j] === "o") {
                        word[j] = O1;
                    } else if (arr[i][j] === "p") {
                        word[j] = P1;
                    }
            }
            let readyWord = word.join('');
            readyWord = readyWord.toUpperCase();
            arrOffWords.push(readyWord);
        
    }

    

    const arrOffWordsNoCopies = [ ...new Set(arrOffWords)];
    console.log(arrOffWordsNoCopies);
    //check here if combo words from grid are actual words
    for (let i = 0; i < arrOffWordsNoCopies.length; i++) {
        if (arrOffWordsNoCopies[0].length > 7) {
        if (arrOffWordsNoCopies[i].charAt(0) === 'A') {
            for (let j = 0; j < actualWordsA.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWordsA[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        } else if (arrOffWordsNoCopies[i].charAt(0) === 'B') {
            for (let j = 0; j < actualWordsB.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWordsB[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        } else if (arrOffWordsNoCopies[i].charAt(0) === 'F') {
            for (let j = 0; j < actualWordsF.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWordsF[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        } else if (arrOffWordsNoCopies[i].charAt(0) === 'K') {
            for (let j = 0; j < actualWordsK.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWordsK[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        } else if (arrOffWordsNoCopies[i].charAt(0) === 'M') {
            for (let j = 0; j < actualWordsM.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWordsM[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        } else if (arrOffWordsNoCopies[i].charAt(0) === 'P') {
            for (let j = 0; j < actualWordsP.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWordsP[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        } else if (arrOffWordsNoCopies[i].charAt(0) === 'S') {
            for (let j = 0; j < actualWordsS.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWordsS[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        } else if (arrOffWordsNoCopies[i].charAt(0) === 'T') {
            for (let j = 0; j < actualWordsT.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWordsT[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        } else {
            for (let j = 0; j < actualWords.length; j++) {
                if (arrOffWordsNoCopies[i] === actualWords[j]) {
                    tepmAnswer.push(arrOffWordsNoCopies[i]);
                }
            }
        }
    } else {
        
        for (let j = 0; j < actualWords.length; j++) {
            if (arrOffWordsNoCopies[i] === actualWords[j]) {
                tepmAnswer.push(arrOffWordsNoCopies[i])
            }
        }
        
    }
    
    
}

    return tepmAnswer;   
 
}


//function that calls function makeWord and collects all answers

function makeCombinations() {

    makeRnd();
    
    //update grid, change variables A1 B1 C1 etc.
    gridUpdate(randomCombo, randomBaseWord);
    
    // console.log(arrayOf8);
    // console.log(arrayOf8A);
    // console.log(arrayOf8B);
    // console.log(arrayOf8F);
    // console.log(arrayOf8K);
    // console.log(arrayOf8M);
    // console.log(arrayOf8P);
    // console.log(arrayOf8S);
    // console.log(arrayOf8T);

    // console.log(arrayOf2);
    // console.log(arrayOf3);
    // console.log(arrayOf4);
    // console.log(arrayOf5);
    // console.log(arrayOf6);
    // console.log(arrayOf7);
    // console.log(arrayOf8);
    // console.log(arrayOf9);
    // console.log(arrayOf10);
    // console.log(arrayOf11);
    // console.log(arrayOf12);
    // console.log(arrayOf13);
    let answer3letters = makeWord(result[0], arrayOf3);
    let answer4letters = makeWord(result[1], arrayOf4);
    let answer5letters = makeWord(result[2], arrayOf5);
    let answer6letters = makeWord(result[3], arrayOf6);
    let answer7letters = makeWord(result[4], arrayOf7);
    let answer8letters = makeWord(result[5], arrayOf8, arrayOf8A, arrayOf8B, arrayOf8F, arrayOf8K, arrayOf8M, arrayOf8P, arrayOf8S, arrayOf8T);
    let answer9letters = makeWord(result[6], arrayOf9, arrayOf9A, arrayOf9B, arrayOf9F, arrayOf9K, arrayOf9M, arrayOf9P, arrayOf9S, arrayOf9T);
    let answer10letters = makeWord(result[7], arrayOf10, arrayOf10A, arrayOf10B, arrayOf10F, arrayOf10K, arrayOf10M, arrayOf10P, arrayOf10S, arrayOf10T);
    let answer11letters = makeWord(result[8], arrayOf11, arrayOf11A, arrayOf11B, arrayOf11F, arrayOf11K, arrayOf11M, arrayOf11P, arrayOf11S, arrayOf11T);
    let answer12letters = makeWord(result[9], arrayOf12, arrayOf12A, arrayOf12B, arrayOf12F, arrayOf12K, arrayOf12M, arrayOf12P, arrayOf12S, arrayOf12T);
    let answer13letters = makeWord(result[10], arrayOf13, arrayOf13A, arrayOf13B, arrayOf13F, arrayOf13K, arrayOf13M, arrayOf13P, arrayOf13S, arrayOf13T);

    // let arrOfAnswers = [answer3letters, answer4letters, answer5letters, answer6letters, answer7letters, 
    //     answer8letters, answer9letters, answer10letters, answer11letters, answer12letters, answer13letters]

    //     for (let i = 0; i <= arrOfAnswers.length; i++) {
    //         for (let j = 0; j <= arrOfAnswers[i].length; j++) {
    //             arrOfAnswers[i][j].toUpperCase();
    //         }
    //     }
    console.log(answer3letters);
    console.log(answer4letters);
    console.log(answer5letters);
    console.log(answer6letters);
    console.log(answer7letters);
    console.log(answer8letters);
    console.log(answer9letters);
    console.log(answer10letters);
    console.log(answer11letters);
    console.log(answer12letters);
    console.log(answer13letters);

    data = { A1, B1, C1, D1, E1, F1, G1, H1, I1, J1, K1, L1, M1, N1, O1, P1, answer3letters, 
        answer4letters, answer5letters, answer6letters, answer7letters, answer8letters, answer9letters, 
        answer10letters, answer11letters, answer12letters, answer13letters, randomBaseWordNoSplit, randomCombo}

    //send data to database
    sendData();

    //clear array with answer that were send to database!

    //repeat sendData()
}

//function that sends data to server database

async function sendData() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const dataToServer = await fetch('/gridMaker', options);
    const responseFromServer = await dataToServer.json();
    console.log(responseFromServer);
    
    makeCombinations();

}


//function that updates grid before making combinations of letters

function gridUpdate(rndCombo, rndBaseWord) {

    for (let i = 0; i <= rndCombo.length; i++) {
        if (rndCombo[i] === 'a') {
            A1 = rndBaseWord[i];
        } else if (rndCombo[i] === 'b') {
            B1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'c') {
            C1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'd') {
            D1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'e') {
            E1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'f') {
            F1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'g') {
            G1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'h') {
            H1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'i') {
            I1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'j') {
            J1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'k') {
            K1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'l') {
            L1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'm') {
            M1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'n') {
            N1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'o') {
            O1 = rndBaseWord[i]
        } else if (rndCombo[i] === 'p') {
            P1 = rndBaseWord[i]
        }
    }

    if (A1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        A1 = additionalLetters[randomIndex];
    }

    if (B1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        B1 = additionalLetters[randomIndex];
    }

    if (C1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        C1 = additionalLetters[randomIndex];
    }

    if (D1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        D1 = additionalLetters[randomIndex];
    }


    if (E1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        E1 = additionalLetters[randomIndex];
    }


    if (F1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        F1 = additionalLetters[randomIndex];
    }


    if (G1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        G1 = additionalLetters[randomIndex];
    }


    if (H1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        H1 = additionalLetters[randomIndex];
    }


    if (I1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        I1 = additionalLetters[randomIndex];
    }


    if (J1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        J1 = additionalLetters[randomIndex];
    }


    if (K1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        K1 = additionalLetters[randomIndex];
    }


    if (L1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        L1 = additionalLetters[randomIndex];
    }


    if (M1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        M1 = additionalLetters[randomIndex];
    }


    if (N1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        N1 = additionalLetters[randomIndex];
    }


    if (O1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        O1 = additionalLetters[randomIndex];
    }


    if (P1 === '') {
        let randomIndex = Math.floor(Math.random()*lengthOfAdditionalLetters);
        P1 = additionalLetters[randomIndex];
    }

    

}

//function that choose random base word and random combo

function makeRnd() {
    lengthOfBaseWordArr = wordForGrid.length;
    
    indexOfrndWord = Math.floor(Math.random()*lengthOfBaseWordArr);
      
    randomBaseWordNoSplit = wordForGrid[indexOfrndWord];
    console.log(randomBaseWordNoSplit);
    
    indexOfArrWithComobos = randomBaseWordNoSplit.length - 3;

    lengthOfResultsArr = result[indexOfArrWithComobos].length;
    indexOfrndCombo = Math.floor(Math.random()*lengthOfResultsArr);

    randomBaseWord = randomBaseWordNoSplit.split('');
    console.log(randomBaseWord);

    randomCombo = result[indexOfArrWithComobos][indexOfrndCombo];
    console.log(randomCombo);

}

