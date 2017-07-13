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
  console.log(objOfNumbers);
  for (var i=0; i<arr.length; i++){
      console.log(objOfNumbers[arr[i]][0]);
      if (objOfNumbers[arr[i]]>0){
          console.log(arr[i]+" in objOfNumbers");
          if (objOfNumbers[arg-arr[i]]>0){
              console.log(arg-arr[i]+" in objOfNumbers (a partner)")
              count += objOfNumbers[arr[i]][0];
              count += objOfNumbers[arg-arr[i]][0];

              objOfNumbers[arr[i]].splice(0,1);

              objOfNumbers[arg-arr[i]].splice(0,1);
              console.log(objOfNumbers);
          }
      }
      else {

      }

  }

  return count;
}

pairwise([1,4,4,2,3,0,5], 7);
