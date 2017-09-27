Solution: 

function dontGiveMeFive(start, end){
  var count = 0;
  for(i=start; i<=end; i++){
    if (!/5/.test(i)) {
      count++
    }
  }
  return count;
}

TESTS:

Test Results:
 KataTests
 exampleTests (2 of 2 Assertions)
 moreTests (5 of 5 Assertions)
 randomTests (30 of 30 Assertions)
Completed in 13ms
You have passed all of the tests! :)