input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        gauche.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(500)
        gauche.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (AB == 1) {
        Frein.showColor(neopixel.colors(NeoPixelColors.Red))
        AB = 0
    } else if (AB == 0) {
        Frein.showColor(neopixel.colors(NeoPixelColors.Black))
        AB = 1
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        droit.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(500)
        droit.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    }
})
let AB = 0
let Frein: neopixel.Strip = null
let gauche: neopixel.Strip = null
let droit: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.clear()
droit = strip.range(0, 13)
gauche = strip.range(13, 23)
Frein = strip.range(0, 24)
