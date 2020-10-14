let counter = 0
let index = 0
input.onPinPressed(TouchPin.P0, function () {
    counter = 0
    while (counter <= 5) {
        basic.showNumber(counter)
        counter += 1
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    index = 4
    while (index >= 0) {
        led.plot(index, index)
        index += -1
        basic.pause(200)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    counter = 0
    for (let counter = 0; counter <= 4; counter++) {
        basic.showNumber(counter)
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
