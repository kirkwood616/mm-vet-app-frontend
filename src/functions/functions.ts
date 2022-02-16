import Pet from "../models/Pet";

export function getPetAge(pet: Pet): Number {
  let dob = new Date(pet.dateOfBirth);
  let month_diff = Date.now() - dob.getTime();
  let age_dt = new Date(month_diff);
  let year = age_dt.getUTCFullYear();
  let age = Math.abs(year - 1970);
  return age;
}

export function getDateTime(): String {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let time = `${String(today.getHours())}h:${String(
    today.getMinutes()
  )}m:${String(today.getSeconds())}s`;
  let dateTime = `${mm}/${dd}/${yyyy} @ ${time}`;
  return dateTime;
}
