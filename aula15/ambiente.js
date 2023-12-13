let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(8)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)