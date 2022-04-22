function isLeap(year){    
    
      if (year % 4 === 0 && year % 100 != 0) {
      return "Leap Year";

      }

      if (year % 4 === 0 && year % 100 === 0  && year % 400 === 0){
      return "Leap Year";

      }

      else {
      return "Not a leap year";
      }   

}   
alert(isLeap(2020))
