# Implement a function that adds two numbers together and returns their sum in binary. 
# The conversion can be done before, or after the addition.
# The binary number returned should be a string.

def add_binary(a,b):
    sum=a+b
    result=''
    
    while(sum>0):
        result=(str)(sum%2)+result
        sum//=2
    return result
   
   