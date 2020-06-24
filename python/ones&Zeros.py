# Given an array of ones and zeroes, convert the equivalent binary value to an integer.
# Eg: [0, 0, 0, 1] is treated as 0001
# which is the binary representation of 1.

def binary_array_to_number(arr):
  binary=0
  p=0
  arr.reverse()
  for i in arr:
      binary+=i*(2**p)
      p+=1
  return binary