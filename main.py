strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.clear()

def on_forever():
    strip.show_rainbow(1, 360)
basic.forever(on_forever)
