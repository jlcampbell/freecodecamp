function pairwise(arr, arg) {
  var count = 0;
  var objOfNumbers = arr.reduce(function(accum, number, numberIndex){
     if (arr.indexOf(arg-number)>-1){
        if (accum.hasOwnProperty(number)){
            accum[number].push(numberIndex);
        }
        else {
            accum[number]=[numberIndex];
        }
     }
    return accum;
  }, {});

  for (var key in objOfNumbers){
      if (arg-key==key){
          if (objOfNumbers[key].length%2 == 1){
              console.log(objOfNumbers[key].length%2);
              objOfNumbers[key].splice(-1);
          }
          console.log(objOfNumbers);
      }
  }

 

  return objOfNumbers;
}


pairwise([1,4,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4)
pairwise([1, 1, 1], 2)
pairwise([0, 0, 0, 0, 1, 1], 1)
pairwise([], 100)
