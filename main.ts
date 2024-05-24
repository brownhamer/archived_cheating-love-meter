let num = 0
let prv = 9
let min = 0
let max = 9
let str = "="

input.onButtonPressed(Button.A, function () {
    min = 0
    max = 4
    str = "-"
})

input.onButtonPressed(Button.B, function () {
    min = 5
    max = 9
    str = "+"
})

basic.forever(function () {
    num = randint(min, max)
    if (num == prv) {
        basic.showString(str)
    }
    else {
        basic.showNumber(num)
        prv = num
    }
})
