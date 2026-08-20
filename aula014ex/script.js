function calcular (){
    let inicio = document.getElementById(`inicio`)
    let fim = document.getElementById(`fim`)
    let passo = document.getElementById(`passo`)
    let res = document.getElementById(`res`)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERROR] Faltam Dados!!")
    } else{
        res.innerHTML = "Contando... :"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            window.alert(`Passo invalido! considerando PASSO 1`)
            p = 1
        }

        if ( i < f){ // CONTAGEM CRESCENTE "Enquanto o valor inicial (c) for menor ou igual ao número final (f), a gente mostra o valor atual e soma o valor do passo (p) até ultrapassar o número final."
        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            }
        } else { // CONTAGEM REGRESSIVA ( ENQUANTO O NUMERO INICIAL FOR MAIOR QUE O NUMERO FINAL)
            for (let c = i ; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }   
    } res.innerHTML += `\u{1F3C1}`
}

/* 
1. O for

A estrutura geral de um for é:

for (inicialização; condição; atualização) {
    // código que será repetido
}

No seu caso:

for (let c = i; c <= f; c += p) {

temos 3 partes:

          1              2             3
          ↓              ↓             ↓
for (let c = i;      c <= f;       c += p) {
2. let c = i
let c = i

Essa é a inicialização.

Você está criando uma variável chamada c e colocando nela o valor de i.

Lembra que anteriormente você fez:

let i = Number(inicio.value)

Então, se o usuário colocou:

Início: 1

temos:

i = 1

Consequentemente:

let c = i

significa:

let c = 1

Então o contador começa em 1.

3. c <= f
c <= f

Essa é a condição do for.

Ela significa:

"Enquanto c for menor ou igual a f, continue repetindo."

Imagine que o usuário colocou:

Início: 1
Fim: 10
Passo: 2

Então:

i = 1
f = 10
p = 2

O for começa com:

c = 1

Agora ele pergunta:

1 <= 10 ?

Sim! Então executa o código dentro das { }.

Depois c muda para 3.

Pergunta novamente:

3 <= 10 ?

Sim.

Depois:

5 <= 10 ?

Sim.

Depois:

7 <= 10 ?

Sim.

Depois:

9 <= 10 ?

Sim.

Depois:

11 <= 10 ?

Não!

Então o for para.*/