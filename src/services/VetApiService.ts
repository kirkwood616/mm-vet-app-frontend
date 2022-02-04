import axios from "axios";
import Customer from "../models/Customer";
import Pet from "../models/Pet";
import MedicalRecord from "../models/MedicalRecord";

// CUSTOMERS
export function fetchAllCustomers(): Promise<Customer[]> {
  return axios
    .get("http://localhost:5001/mm-vet-app/us-central1/api/customers")
    .then((res) => res.data);
}

export function fetchCustomer(id: string): Promise<Customer> {
  return axios
    .get(`http://localhost:5001/mm-vet-app/us-central1/api/customers/${id}`)
    .then((res) => res.data);
}

// PETS
export function fetchAllPets(): Promise<Pet[]> {
  return axios
    .get("http://localhost:5001/mm-vet-app/us-central1/api/pets")
    .then((res) => res.data);
}

export function fetchPet(id: string): Promise<Pet> {
  return axios
    .get(`http://localhost:5001/mm-vet-app/us-central1/api/pets/${id}`)
    .then((res) => res.data);
}

// MEDICAL RECORDS
// export function fetchAllMedicalRecords(): Promise<MedicalRecord[]> {
//   return axios
//     .get("http://localhost:5001/mm-vet-app/us-central1/api/medical-records")
//     .then((res) => res.data);
// }
