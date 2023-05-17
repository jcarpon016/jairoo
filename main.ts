let fijar_b_a = 0
basic.forever(function () {
    let b = 0
    fijar_b_a = 255 - input.lightLevel()
    led.setBrightness(b)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
