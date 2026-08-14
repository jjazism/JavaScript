console.log("oi")

var hora = 23

if (hora < 12 ){
    console.log(`sao exatas ${hora} horas, bom dia`)
}
    else if (hora <= 18){
        console.log(`sao exatas ${hora} horas, boa tarde`)
    } else if (hora > 18 && hora < 22)  {
        console.log(`sao exatas ${hora} horas, boa noite`)
    } else {
        console.log (`boa madru`)
    }

//  se a hora for menor que 12 vai retornar bom dia
//  se a hora for menor que 18 ou igual vai retornar boa tarde 
//  se nao vai retornar boa noite