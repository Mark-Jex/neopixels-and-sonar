let Distance_Object = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    Distance_Object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(Distance_Object)
})
