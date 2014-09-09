$(document).ready(function() {
    var insertFizzBuzzString = function (size) {
      result = [];
      for (var i = 1; i <= size; i++) {
        if((i % 15)==0){
          result.push("FizzBuzz"," ");
        }
        else if((i % 3)==0){
          result.push("Fizz"," ");
        }
        else if((i % 5)==0){
          result.push("Buzz"," ");
        }
        else
        {
          result.push(i," ");
        }
        //$("#qunit-tests").append(result, " ");
      }
      return result;
    };
    var fizzBuzz = function () {
      var sizeNum=15,resultFizzBuzz;
      sizeNum = +(prompt("Enter a number from 15 to 100"));
      resultFizzBuzz=insertFizzBuzzString(sizeNum);
      $("#fizzBuzzOuput").append(resultFizzBuzz);
      console.log(resultFizzBuzz.join("\n"));
    };
    fizzBuzz();
});

