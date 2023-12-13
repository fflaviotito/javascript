let n = [8, 1, 7, 4, 2, 9]

for (let c = 0; c < n.length; c++) {
    console.log(`A posição ${c} tem o valor ${n[c]}`)
}


for (let c in n) {
    console.log(`Posição de número ${c} tem o valor ${n[c]}`)
}