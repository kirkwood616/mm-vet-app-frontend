import MedicalRecord from "./MedicalRecord";
import UserPicture from "./UserPicture";

interface Pet {
  _id?: string;
  ownerId: string;
  petFirstName: string;
  petLastName: string;
  species: string;
  breed: string;
  color: string;
  sex: string;
  dateOfBirth: string;
  isFixed: boolean;
  isMicroChipped: boolean;
  weight: number;
  diet: string;
  picture: UserPicture;
  medicalRecords: MedicalRecord[];
}

export default Pet;
