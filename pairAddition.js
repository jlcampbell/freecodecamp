//need to take in array and arg
//need to look at each element of array
//see if that element's pair is in array
//see if that element has already been paired
//see if that element's pair has already been paired

//an object with {argument:index}. when a value gets used it is removed from
//the object

function pairwise(arr, arg) {
  var count = 0;
  var objOfNumbers = arr.reduce(function(accum, number, numberIndex){
    if (accum.hasOwnProperty(number)){
        accum[number].push(numberIndex);
    }
    else {
        accum[number]=[numberIndex];
    }
    return accum;
  }, {});

  for (i=0; i<arr.length; i++){

      if (arr[i] in objOfNumbers){
          console.log(arr[i]+"in objOfNumbers");
          if (arg-arr[i] in objOfNumbers){
              count += objOfNumbers[arr[i][0]];
              count += objOfNumbers[(arg-arr[i])[0]];
              delete objOfNumbers[arr[i][0]];
              delete objOfNumbers[(arg-arr[i])[0]];
              console.log(objOfNumbers);
          }
      }

  }

  return count;
}

pairwise([1,4,4,2,3,0,5], 7);
