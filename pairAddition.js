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

  for (var i=0; i<arr.length; i++){

      if (objOfNumbers[arr[i]].length>0){
          console.log(arr[i]+" in objOfNumbers");
          if (objOfNumbers.hasOwnProperty(arg-arr[i])){
              if (objOfNumbers[arg-arr[i]].length>0){
                console.log(arg-arr[i]+" in objOfNumbers (a partner)")
                count += objOfNumbers[arr[i]][0];
                console.log("adding index of "+arr[i]+" which is "+objOfNumbers[arr[i]][0]+" count now is "+count);
                count += objOfNumbers[arg-arr[i]][0];
                console.log("adding index of "+(arg-arr[i])+" which is "+objOfNumbers[arg-arr[i]][0]+" count now is "+count);
                objOfNumbers[arr[i]].splice(0,1);

                objOfNumbers[arg-arr[i]].splice(0,1);

              }
          }
      }
      else {

      }

  }

  return count;
}

pairwise([1,4,4,2,3,0,5], 7);
