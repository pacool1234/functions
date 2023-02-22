// 1 - Functions
function resta (a, b) {
    return a - b
}
let a = 6
let b = 9
console.log(`Given ${a} and ${b}, function resta returns ${resta(a, b)}`)

function grader () {
    let mark = prompt('Tell me a number from 0 to 10: ')
    let markInt = parseInt(mark)
    switch (true) {
        case (markInt >= 9):
            console.log('Excellent')
            return ''
        case (markInt >= 7):
            console.log('Good')
            return ''
        case (markInt >= 5):
            console.log('Enough')
            return ''
        case (markInt >= 0):
            console.log('Not enough')
            return ''
    }
}
grader()

function numberDuplicator (num) {
    if (typeof num === 'number') {
        return 2 * num
    } else {
        console.log('I must be executed with an integer')
    }
}
let number = 8
console.log(`Given ${number}, function numberDuplicator returns ${numberDuplicator(number)}`)

function initialChar (str) {
    if (typeof str !== 'string') {
        console.log('Must be a string')
    } else if (str.length === 0) {
        console.log('Must be a non empty string')
    } else {
        return str[0]
    }
}
let str = 'Hello'
console.log(`The first character of ${str} is ${initialChar(str)}`)

function lastChar (str) {
    if (typeof str !== 'string') {
        console.log('Must be a string')
    } else if (str.length === 0) {
        console.log('Must be a non empty string')
    } else {
        return str[str.length - 1]
    }
}
let str2 = 'Good bye'
console.log(`The last character of ${str2} is ${lastChar(str2)}`)

function charCount (str) {
    if (typeof str !== 'string') {
        console.log('Must be a string')
    } else {
        return str.length
    }
}
let str3 = 'Sternochleidomastoidal'
console.log(`${str3} has ${charCount(str3)} characters`)

function isPalindrome (str) {
    if (typeof str !== 'string' || str.length === 0) {
        console.log('Invalid input')
    } else {
        let words = str.split('')
        for (let i = 0; i < str.length; i++) {
            if (words[i] !== str[str.length - (1+i)]) {
                return false
            }
        }
        return true
    }
}
let str4 = 'kayak'
console.log(`${str4} is a palindrome: ${isPalindrome(str4)}`)

function getPriceShow (number) {
    if (typeof number !== 'number') {
        console.log('Not a number')
    } else {
        let result = number.toFixed(2) + ' $'
        return result
    }
}

let num1 = 9
console.log(getPriceShow(num1))

function div (a, b) {
    return a / b
}
console.log(div(4, 5))

function fiveOrHigher (arr) {
    return arr.filter(x => x >= 5)
}
let arr1 = [4, 78, 33, 6]
console.log(fiveOrHigher(arr1))

function isPrime () {
    let str = prompt('Tell me an integer: ')
    let num = parseInt(str)
    for (let i = 2; i <= Math.ceil(num / 2); i++){
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime())

// Extras
function getOddNumbers (arr) {
    return arr.filter(x => x % 2 === 1)
}
let arr2 = [1,2,3,4,5,6,7,8,9]
console.log(getOddNumbers(arr2))

function sumArray (arr) {
    return arr.reduce((total, i) => total + i)
}
console.log(sumArray(arr2))

function multiplyArray (arr) {
    return arr.reduce((total, i) => total * i)
}
console.log(multiplyArray(arr2))

function checkPassword () {
    password = 'mango'
    for (let i = 1; i <= 3; i++) {
        let trial = prompt('What is the password?: ')
        if (trial === password) {
            console.log('Congratulations')
            return ''
        }
    }
    console.log('3 attempts failed')
}
checkPassword()

