import Pet from "../models/Pet";

export function getPetAge(pet: Pet): Number {
  let dob = new Date(pet.dateOfBirth);
  let month_diff = Date.now() - dob.getTime();
  let age_dt = new Date(month_diff);
  let year = age_dt.getUTCFullYear();
  let age = Math.abs(year - 1970);
  return age;
}
