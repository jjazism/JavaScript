let num = [2,3,4,5,7]
num[3] = 9
num.push(1)
num.push(10)
num.sort()
console.log (num)
console.log (`vetor na segunda posição é ${num[2]}`)
console.log(`o vetor tem ${num.length} posições`)

let pos = num.indexOf(2)

if(pos == -1){
    console.log("numero nao encontrado")
} else{
    console.log(`Numero  ${pos} encontrado`)
}

//"Um array é uma variável composta que tem vários elementos. Cada elemento é composto por seu valor e por uma chave (key) de identificação". 8