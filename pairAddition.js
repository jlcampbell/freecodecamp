function pairwise(arr, arg) {
  var numbers = arr;
  var count = 0;
  var uniqueNumbers = numbers.reduce(function(allNumbers, number){
    //number already in accumulator
    if (allNumbers.indexOf(number)>-1) {
    }
    //number's pair is one of the
    else if (numbers.indexOf(arg-number)>-1) {
      allNumbers.push(number);
      allNumbers.push(arg-number);
      count += numbers.indexOf(number)+numbers.indexOf(arg-number);
    }
    return allNumbers;
  }, []);

  return count;
}

pairwise([1,4,2,3,0,5], 7);
