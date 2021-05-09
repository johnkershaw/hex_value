input.onButtonPressed(Button.A, function () {
    num = num * 2
    num += 0
})
input.onButtonPressed(Button.AB, function () {
    num = 0
})
input.onButtonPressed(Button.B, function () {
    num = num * 2
    num += 1
})
function to_hex (bin_num: number) {
    if (bin_num < 10) {
        return convertToText(bin_num)
    } else if (bin_num == 10) {
        return "A"
    } else if (bin_num == 11) {
        return "B"
    } else if (bin_num == 12) {
        return "C"
    } else if (bin_num == 13) {
        return "D"
    } else if (bin_num == 14) {
        return "E"
    } else if (bin_num == 15) {
        return "F"
    } else {
        return "X"
    }
}
let num = 0
num = 0
basic.forever(function () {
    basic.showString("" + (to_hex(num)))
})
