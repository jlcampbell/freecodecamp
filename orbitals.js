function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var answer= [];
  for (var i=0; i<arr.length; i++){
    var flyingObject = arr[i];
    var a = flyingObject.avgAlt+earthRadius;
    delete flyingObject.avgAlt;
    flyingObject.orbitalPeriod = Math.round(2*Math.PI*Math.pow((Math.pow(a, 3)/GM), 0.5));
    answer.push(flyingObject);
  }
  return answer;
}


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
