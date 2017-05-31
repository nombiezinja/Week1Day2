function calculateDayInYear(date) {
  var splitDate = date.split('/'); //split at / output into array
  var year = Number(splitDate[0]); //turns array[0] into number
  var month = Number(splitDate[1]);//same
  var day = Number(splitDate[2]);//same
  var febDays = daysInFeb(year);//calls function determining number of days in feb according to year
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) { //if all three of these are true
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year); //spits out sentence
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) { //checks if month input data is valid
    return month && month >= 1 && month <= 12; //fixed to include 12
  }

  function validDay(month, day) {//checks if day input data is valid
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1]; //fixed to include number
  }

  function calculateDayNumber(month, day) {
    var dayOfYear = 0;

    for (var i = 1; i < month; i++) { //loops through 1 - current month
      dayOfYear += DAYS_IN_MONTH[i - 1]; //for every loop the output day of year is equal
      //to calling the number of days in current month

    }
    return dayOfYear + day;
  }

  function daysInFeb(year) {
    if (year % 4 === 0) {
      return 29
    }
    return 28
  }
}
//   function isLeapYear(year) {
//     return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
//   }
// }

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}

var date = process.argv[2];

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

//problem when running code: produces same day for everyday of the same month