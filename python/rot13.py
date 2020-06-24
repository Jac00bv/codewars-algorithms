# ROT13 is a simple letter substitution cipher that replaces a letter with
# the letter 13 letters after it in the alphabet. ROT13 is an example of
# the Caesar cipher.
# Create a function that takes a string and returns the string ciphered with
# Rot13. If there are numbers or special characters included in the string,
# they should be returned as they are. Only letters from the latin/english
# alphabet should be shifted, like in the original Rot13 "implementation".

def rot13(message):
    text=''
    for i in message:
        if i.islower():
            text+=chr((ord(i)+13 -97)%26+97)
        elif i.isupper():
            text+=chr((ord(i)+13 -65)%26+65)
        else:
            text+=i
    return text