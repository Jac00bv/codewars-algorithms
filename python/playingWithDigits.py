# Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

# we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
# In other words:

# Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

def dig_pow(n, p):
    temp=n
    length=len(str(n))-1
    k=0
    
    while(temp>0):
      k+=(temp%10)**(p+length)
      length=length-1
      temp=temp//10
    
    return k/n if k%n == 0 else -1