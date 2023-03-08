let numbers = []
let text = document.getElementById('possible-combinations')
let comb = document.getElementById('combinations')
let n = 0
let res = null

function doPossibleCombinations() {
    console.clear()
    n = document.getElementById('input').value;
    for (i = 1; i < n; i++){
        for(x = i + 1; x <= n; x++){
            res = (i + '-' + x)
            numbers.push(' ' + res)
            console.log(res)
        }        
    }
    text.innerHTML = `Hay un total de ${ numbers.length } combinaciones posibles para el número ${n}`
    comb.innerHTML = `Las combinaciones de ${n} son: ${numbers}`
    numbers = []
}

//console.log(takeNum()) 