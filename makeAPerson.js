var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var nameArray = [];
    nameArray[0] = firstAndLast.split(" ")[0];
    nameArray[1] = firstAndLast.split(" ")[1];

    this.getFirstName = function() {
      return nameArray[0];
    };

    this.getLastName = function() {
      return nameArray[1];
    }

    this.getFullName = function() {
      return nameArray[0]+" "+nameArray[1];
    };

    this.setFirstName = function(first) {
      nameArray[0] = first;
      return;
    };
    this.setLastName = function(last) {
      nameArray[1] = last;
      return;
    }
    this.setFullName = function(firstAndLast) {
      nameArray[0] = firstAndLast.split(" ")[0];
      nameArray[1] = firstAndLast.split(" ")[1];
      return;
    }
    return "";
};

var bob = new Person('Bob Ross');
bob.getFullName();
