function integerDivision(dividendo, divisor){
    if(dividendo < divisor){
        return 0
    }
    return 1 + integerDivision(dividendo - divisor, divisor)
}