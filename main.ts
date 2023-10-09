function girar_izq () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 1)
}
function reversa () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
}
function derecha () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P3, 0)
}
function girar_der () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 1)
}
function avanzar () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P3, 1)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "parar") {
        basic.showIcon(IconNames.Meh)
        parar()
    } else if (receivedString == "izquierda") {
        basic.showArrow(ArrowNames.East)
        girar_izq()
    } else if (receivedString == "derecha") {
        basic.showArrow(ArrowNames.West)
        girar_der()
    } else if (receivedString == "avanzar") {
        basic.showArrow(ArrowNames.South)
        avanzar()
    } else if (receivedString == "reversa") {
        basic.showArrow(ArrowNames.North)
        reversa()
    } else if (receivedString == "der") {
        basic.showArrow(ArrowNames.NorthEast)
        derecha()
    } else if (receivedString == "izq") {
        basic.showArrow(ArrowNames.NorthWest)
        izquierda()
    }
})
function parar () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
}
function izquierda () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
}
parar()
basic.showIcon(IconNames.Silly)
radio.setTransmitPower(7)
radio.setGroup(103)
basic.forever(function () {
	
})
