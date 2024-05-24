let max = 0
let min = 0
min = 0
max = 99

input.onButtonPressed(Button.A, function () {
    min = 0
    max = 49
})

input.onButtonPressed(Button.B, function () {
    min = 50
    max = 99
})

input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(min, max))
})
