/* MEMOIZACION */
function factorial(n){
    if(!this.cache){
        this.cache = {}
    }
    debugger
    if(this.cache[n]){
        return this.cache[n]
    }

    if(n === 1){
        return 1
    }
    debugger
    this.cache[n] = n * factorial(n - 1)
    return this.cache[n]
}