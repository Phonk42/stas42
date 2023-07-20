function getSqrt(number: any): any {
    if(number === undefined) return "Будь ласка, введіть число!"
    if(typeof number !== 'number') return "Повинно бути числове значення."
    if(number < 0) return "Введіть додатнє число."
    if(number > 0){
        let sqrt = Math.sqrt(number)
        return sqrt
    }
}
console.log(getSqrt(9))
console.log(getSqrt("9"))
console.log(getSqrt(-9))
console.log(getSqrt(undefined))
