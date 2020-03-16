/* Numbers class */

/* Increment */
var age = 20
// age = age + 1 // 21
age += 1 // 21

/* Decrement */
var wigth = 60
//wigth = wigth - 2 // 58
wigth -= 2 //58

/* Sum */
var sandwich = 1
//wigth = wigth + sandwich // 59
wigth += sandwich //59

/* Subtraction */
var playBasketball = 3
//wigth = wigth - playBasketball // 56
wigth -= playBasketball // 56

/* Decimals */
var winePrice = 82.4
//var total = winePrice * 3 // 247.200000...2 this is bad, the right way is:
var total = winePrice * 100 * 3 / 100 // 247.2 with more precision.
// But if we don't know the quantity of decimals, we need to do this for more presicion:
total = Math.round(winePrice * 100 * 3) / 100 // 247.2 using the Math.round function.
// Now if we want 247.20 with two decimals, it's okay we can do this with toFixed(decimals number) function:
var totalStr = total.toFixed(2) // '247.20'
// Okay, now to transform that string totalStr to number, do this:
var total2 = parseFloat(totalStr) // 247.20

/* Division */
var pizza = 8
var people = 2
var portionPerEachPeople = pizza / people // 4