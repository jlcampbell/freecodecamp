function pairwise(arr, arg) {

  var count = arr.reduce(function(counter, number, currentIndex, remainingNumbers){
    //number has not yet been paired
    if (remainingNumbers.indexOf(number)>-1) {
      if (remainingNumbers.indexOf(arg-number)>-1 {
      counter += currentIndex;
      //allNumbers.push(arg-number);
      counter += arr.indexOf(number)+arr.indexOf(arg-number);
    }
    return counter;
  }, []);

  return count;
}

pairwise([1,4,2,3,0,5], 7);


//take in an array
//each element of array check to see if that elements partner
//is also there
//record original index of each, add to counter
//remove both elements
//continue for all remaining elements
