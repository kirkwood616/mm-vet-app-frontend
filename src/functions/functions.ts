// export function getPetAge(date: string): Number {
//   let dob = new Date(date);
//   let month_diff = Date.now() - dob.getTime();
//   let age_dt = new Date(month_diff);
//   let year = age_dt.getUTCFullYear();
//   let age = Math.abs(year - 1970);
//   return age;
// }

export function getPetAge(input: string): Number {
  let date = input;
  let year = date.slice(6);
  let mmdd = date.slice(0, 5);
  let intlDate = year + "-" + mmdd;
  let newDate: any = new Date();
  let newIntlDob: any = new Date(intlDate);
  let ageInMilliseconds = newDate - newIntlDob;

  return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
}

export function getFormattedDateAndTime(date: Date) {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + "" + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    " " +
    strTime
  );
}

export function getFormattedDate(date: Date) {
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}

export function getFormattedTimeFromInput(time: string): String {
  let hours = Number(time.slice(0, 2));
  let mins = Number(time.slice(3));
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutes = mins < 10 ? `0${mins}` : String(mins);
  let strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

export function getFormattedDateFromInput(date: string): String {
  let year = date.slice(0, 4);
  let mmdd = date.slice(5);
  return `${mmdd}-${year}`;
}
