//5! = 5 x 4 x 3 x 2 x 1

function fatorial(n){
    var fat = 1
    for (let c = n; c > 0; c--) {
        fat *= c
    }
    return fat
}

let res = fatorial(5)
console.log(res)