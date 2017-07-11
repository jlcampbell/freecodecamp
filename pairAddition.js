function pairwise(arr, arg) {
  var count = 0;
  var uniqueNumbers = arr.reduce(function(allNumbers, number){
    //number already in accumulator
    if (allNumbers.indexOf(number)>-1) {
    }
    //number's pair is one of the
    else if (arr.indexOf(arg-number)>-1) {
      allNumbers.push(number);
      allNumbers.push(arg-number);
      count += arr.indexOf(number)+arr.indexOf(arg-number);
    }
    return allNumbers;
  }, []);

  return count;
}

pairwise([1,4,2,3,0,5], 7);
