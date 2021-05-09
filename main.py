def on_button_pressed_a():
    global num
    num = num * 2
    num += 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global num
    num = num * 2
    num += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def to_hex(bin_num: number):
    if bin_num < 10:
        return convert_to_text(bin_num)
    elif bin_num == 10:
        return "A"
    elif bin_num == 11:
        return "B"
    elif bin_num == 12:
        return "C"
    elif bin_num == 13:
        return "D"
    elif bin_num == 14:
        return "E"
    elif bin_num == 15:
        return "F"
    else:
        return "X"

num = 0

def on_forever():
    basic.show_string(to_hex(num))
basic.forever(on_forever)
