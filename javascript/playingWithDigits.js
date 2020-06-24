// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

function digPow(n, p){
    let temp=n;
    let len=n.toString().length-1;
    let k=0;
    
    while(temp>0){
      k+=Math.pow((temp%10),p+len);
      len--;
      temp=Math.floor(temp/10);
    }
    
    if(k%n==0)  return k/n;
    else return -1; 
  }