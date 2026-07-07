let time = "07:05:45PM";

function timeConversion(s = "") {
  let tempNumber = 0;

  let tempStr = "";

  if (s.includes("AM")) {
    return s.slice(0, s.length - 2);
  } else if (s.includes("PM")) {
    tempStr = s.slice(0, 2);

    tempNumber = Number(tempStr);

    tempNumber = tempNumber + 12;

    if (tempNumber == 24) {
      tempStr = "00";
    } else {
      tempStr = String(tempNumber);
    }

    s = tempStr + s.slice(2, s.length - 2);
  }

  return s;
}

//optimized solition
function timeConversion1(s = "") {
  let period = s.slice(s.length - 2, s.length);
  let clock = s.slice(0, 2);
  let restOfString = s.slice(2, s.length - 2);
  clock = Number(clock);

  if (period === "AM") {
    s = s.slice(0, s.length - 2);
  } else if (period === "PM" && clock != 12) {
    clock = clock + 12;
    clock = clock.toString();
    s = clock + restOfString;
  } else {
    clock = clock.toString();
    s = clock + restOfString;
  }

  return s;
}

//more optimized

function timeConversion2(s = "") {
  const period = s.slice(-2);
  let hour = Number(s.slice(0, 2));
  const rest = s.slice(2, -2);
  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  const hourStr = String(hour).padStart(2, "0");

  return hourStr + rest;
}

console.log(timeConversion2(time));
