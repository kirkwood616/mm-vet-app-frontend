import axios from "axios";
import User from "../models/User";
import Pet from "../models/Pet";
import MessageBoardPost from "../models/MessageBoardPost";
// import MedicalRecord from "../models/MedicalRecord";

// CUSTOMERS
export function fetchAllUsers(): Promise<User[]> {
  return axios
    .get("http://localhost:5001/mm-vet-app/us-central1/api/users")
    .then((res) => res.data);
}

export function fetchUser(id: string): Promise<User> {
  return axios
    .get(`http://localhost:5001/mm-vet-app/us-central1/api/users/${id}`)
    .then((res) => res.data);
}

export function fetchUserByEmail(email: string): Promise<User> {
  return axios
    .get(`http://localhost:5001/mm-vet-app/us-central1/api/user/${email}`)
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
    .get(`http://localhost:5001/mm-vet-app/us-central1/api/pet/${id}`)
    .then((res) => res.data);
}

export function updatePet(id: string, pet: Pet): Promise<Pet> {
  return axios
    .put(`http://localhost:5001/mm-vet-app/us-central1/api/pet/${id}`, pet)
    .then((res) => res.data);
}

// MEDICAL RECORDS
// export function fetchAllMedicalRecords(): Promise<MedicalRecord[]> {
//   return axios
//     .get("http://localhost:5001/mm-vet-app/us-central1/api/medical-records")
//     .then((res) => res.data);
// }

// MESSAGE BOARD
export function fetchGeneralPosts(): Promise<MessageBoardPost[]> {
  return axios
    .get(
      `http://localhost:5001/mm-vet-app/us-central1/api/message-board/general`
    )
    .then((res) => res.data);
}

export function postMessageToBoard(
  post: MessageBoardPost
): Promise<MessageBoardPost> {
  console.log("IN SERVICE!");

  return axios
    .post<MessageBoardPost>(
      "http://localhost:5001/mm-vet-app/us-central1/api/message-board",
      post
    )
    .then((res) => res.data);
}

// export function sendGeneralPost(
//   post: MessageBoardPost
// ): Promise<MessageBoardPost> {
//   return axios
//     .post<MessageBoardPost>(
//       `http://localhost:5001/mm-vet-app/us-central1/api/message-board/general`,
//       post
//     )
//     .then((res) => res.data);
// }
