input.onButtonPressed(Button.A, function () {
    basic.showString("Ask A Question")
})
input.onGesture(Gesture.Shake, function () {
    random = randint(0, 2)
    if (random == 2) {
        basic.showString("Yes")
    } else if (random == 1) {
        basic.showString("No")
    } else {
        basic.showString("Maybe")
    }
})
let random = 0
basic.showIcon(IconNames.Target)
