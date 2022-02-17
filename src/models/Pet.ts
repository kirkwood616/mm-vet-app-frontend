import MedicalRecord from "./MedicalRecord";
import UserPicture from "./UserPicture";
import Vaccination from "./Vaccinations";

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
  vaccinations: Vaccination[];
}

export default Pet;
