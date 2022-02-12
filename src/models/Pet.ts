import MedicalRecord from "./MedicalRecord";

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
  picture: string;
  medicalRecords: MedicalRecord[];
}

export default Pet;
