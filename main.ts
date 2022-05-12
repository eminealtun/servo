let acı = 90
robotbit.Servo(robotbit.Servos.S1, acı)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, pins.map(
    input.acceleration(Dimension.X),
    0,
    1023,
    10,
    175
    ))
    basic.pause(200)
})
