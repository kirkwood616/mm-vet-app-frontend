// import "./PetImageUpload.css";
import { FormEvent, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";
import Pet from "../models/Pet";

function PetImageUpload() {
  let { user } = useContext(UserContext);
  let { userPets } = useContext(UserContext);
  let { handleUserPets } = useContext(UserContext);
  let { id } = useParams();
  let i = userPets.findIndex((pet) => pet._id === id);
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64 as string);
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  console.log(i);

  function handleImageUpload(e: FormEvent) {
    if (!baseImage) {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      let newPetPicture: Pet = {
        ownerId: userPets[i].ownerId,
        petFirstName: userPets[i].petFirstName,
        petLastName: userPets[i].petLastName,
        species: userPets[i].species,
        breed: userPets[i].breed,
        color: userPets[i].color,
        sex: userPets[i].sex,
        dateOfBirth: userPets[i].dateOfBirth,
        isFixed: userPets[i].isFixed,
        isMicroChipped: userPets[i].isMicroChipped,
        weight: userPets[i].weight,
        diet: userPets[i].diet,
        picture: baseImage,
        medicalRecords: userPets[i].medicalRecords,
      };
      setBaseImage("");
      handleUserPets(user);
      // console.log(newPetPicture);
    }
  }

  return (
    <div className="PetImageUpload">
      <h1>HELLO CLARICE</h1>
      <form action="put" onSubmit={handleImageUpload}>
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
        <img src={baseImage} alt="" width={"200px"} />
        <button type="submit">UPLOAD PICTURE</button>
      </form>
    </div>
  );
}

export default PetImageUpload;
