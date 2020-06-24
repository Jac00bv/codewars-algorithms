// The maximum sum subarray problem consists in finding the maximum sum of
// a contiguous subsequence in an array or list of integers.
// Easy case is when the list is made up of only positive numbers and the
// maximum sum is the sum of the whole array. If the list is made up of 
// only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum.
// Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    let max=0;
    let temp=0;
    for(let i=0;i<arr.length;i++){
      for(let j=i;j<arr.length;j++){
          temp+=arr[j];
          if(temp>max) max=temp;
      }
      temp=0;
    }
    return max;
  }