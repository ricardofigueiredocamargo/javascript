let num = [5, 8, 2, 9, 3]

/*
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[1]}`)

for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}
*/

/*
for (let pos in num) {
    console.log(num[pos])
}
*/

let pos = num.indexOf(12)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(pos)
}