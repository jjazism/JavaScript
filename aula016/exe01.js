function parimpar(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

var num = parimpar(4)
console.log(num)