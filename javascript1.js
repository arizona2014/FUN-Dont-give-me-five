function dontGiveMeFive(start, end){
  var count = 0;
  for(i=start; i<=end; i++){
    if(i<=9){
      if(i % 5 !== 0) count++;    
    } else {
      if(i % 5 !== 0)  count++;    
      if(i % 10 === 0) count++;
    }
  }
  return count;
}