import axios from "axios";
import User from "../models/User";
import Pet from "../models/Pet";
import MessageBoardPost from "../models/MessageBoardPost";

/////////////// CUSTOMERS ///////////////
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

/////////////// PETS ///////////////

// GET (ALL)
export function fetchAllPets(): Promise<Pet[]> {
  return axios
    .get("http://localhost:5001/mm-vet-app/us-central1/api/pets")
    .then((res) => res.data);
}

// GET (ONE)
export function fetchPet(id: string): Promise<Pet> {
  return axios
    .get(`http://localhost:5001/mm-vet-app/us-central1/api/pet/${id}`)
    .then((res) => res.data);
}

// PUT
export function updatePet(id: string, pet: Pet): Promise<Pet> {
  return axios
    .put(`http://localhost:5001/mm-vet-app/us-central1/api/pet/${id}`, pet)
    .then((res) => res.data);
}

/////////////// MESSAGE BOARD ///////////////

// GET
export function fetchGeneralPosts(): Promise<MessageBoardPost[]> {
  return axios
    .get(
      `http://localhost:5001/mm-vet-app/us-central1/api/message-board/general`
    )
    .then((res) => res.data);
}

// POST
export function postMessageToBoard(
  post: MessageBoardPost
): Promise<MessageBoardPost> {
  return axios
    .post<MessageBoardPost>(
      "http://localhost:5001/mm-vet-app/us-central1/api/message-board",
      post
    )
    .then((res) => res.data);
}

// PUT
export function updateMessageFromBoard(
  id: string,
  postEdit: MessageBoardPost
): Promise<MessageBoardPost> {
  return axios
    .put<MessageBoardPost>(
      `http://localhost:5001/mm-vet-app/us-central1/api/message-board/${id}`,
      postEdit
    )
    .then((res) => res.data);
}

// DELETE
export function deleteMessageFromBoard(id: string): Promise<MessageBoardPost> {
  return axios
    .delete<MessageBoardPost>(
      `http://localhost:5001/mm-vet-app/us-central1/api/message-board/${id}`
    )
    .then((res) => res.data);
}
