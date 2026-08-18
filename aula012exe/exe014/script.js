function verificar(){
    var data = new Date() 
      var ano = data.getFullYear()
      var fano = document.getElementById(`txtano`)
      var res = document.querySelector(`div#res`)

      if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERROR] ano invalido ca`)
      } else{
        var fsex = document.getElementsByName (`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if(fsex[0].checked){
            genero = `Homem`
            if (idade >= 0 && idade <10){
              // Crianca
              img.setAttribute(`src`, `H-bebe.png`)
            } else if (idade < 21){
              // Jovem
              img.setAttribute(`src`, `M-jovem.png`)
            } else if (idade < 50){
              // adulto
              img.setAttribute(`src`, `H-adulto.png`)
            } else {
              //idoso
              img.setAttribute(`src`, `H-idoso.png`)
            }

        } else if (fsex[1].checked){
            genero = `Mulher`
            if (idade >= 0 && idade <10){
              // Crianca
              img.setAttribute(`src`, `F-bebe.png`)
            } else if (idade < 21){
              // Jovem
              img.setAttribute(`src`, `F-jovem.png`)
            } else if (idade < 50){
              // adulto
              img.setAttribute(`src`, `F-adulto.png`)
            } else {
              //idoso
              img.setAttribute(`src`, `F-idosa.png`)
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
      }
}