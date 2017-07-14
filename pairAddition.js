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
  console.log(objOfNumbers);
  var a = 0;
  for (var key in objOfNumbers){

      if (arg-key==key){
          if (objOfNumbers[key].length%2 == 1){

              objOfNumbers[key].splice(-1);
          }

      }
      if (objOfNumbers[key].length>objOfNumbers[arg-key].length){
          a=objOfNumbers[key].length-objOfNumbers[arg-key].length;
          objOfNumbers[key].splice(-a);
      }
      if (objOfNumbers[arg-key].length>objOfNumbers[key].length){
          a=objOfNumbers[arg-key].length-objOfNumbers[key].length;
          objOfNumbers[arg-key].splice(-a);
      }

      var count2 = objOfNumbers[key].reduce(function(accum,num){
          return accum+num;
      },0);
      count+=count2;


  }



  return count;
}


pairwise([1,4,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4)
pairwise([1, 1, 1], 2)
pairwise([0, 0, 0, 0, 1, 1], 1)
pairwise([], 100)
