$(document).ready(function() {
      var arr = [], len=100;
      var result;
      for (var i = 1; i <= len; i++) {
        if((i % 15)==0){
           result = "FizzBuzz";
        }
        else if((i % 3)==0){
           result = "Fizz";
        }
        else if((i % 5)==0){
           result = "Buzz";
        }
        else
        {
          result = i;
        }
        $("#fizzBuzzOuput").append(result," ");
        console.log(result);
      }
});

