let amigo = {nome: 'José',sexo: 'M',peso: 85.4, engordar(p=0){
    this.peso += p
    console.log('Engordou')
}}
amigo.engordar(10)


console.log(`o ${amigo.nome} tem ${amigo.peso}kg`)