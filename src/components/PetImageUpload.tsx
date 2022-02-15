import "./PetImageUpload.css";
import { FormEvent, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import Pet from "../models/Pet";
import { fetchPet, updatePet } from "../services/VetApiService";
import UserPicture from "../models/UserPicture";

function PetImageUpload() {
  let { user } = useContext(UserContext);
  let { userPets } = useContext(UserContext);
  let { handleUserPets } = useContext(UserContext);
  let { id } = useParams();
  let i = userPets.findIndex((pet) => pet._id === id);
  const [baseImage, setBaseImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // console.log(baseImage);

  const onChangeImage = async (e: any) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setBaseImage(base64 as string);
    } else {
      setBaseImage("");
    }
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

  function apiDelay() {
    setTimeout(function () {
      handleUserPets(user);
    }, 2000);
    setTimeout(function () {
      setBaseImage("");
      setIsLoading(false);
      navigate(`/pet-profile/${userPets[i]._id}`);
    }, 3000);
  }

  function handleImageUpload(e: FormEvent) {
    if (!baseImage) {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      setIsLoading(true);
      let newImage: UserPicture = {
        picture: baseImage,
      };
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
        picture: newImage,
        medicalRecords: userPets[i].medicalRecords,
      };
      updatePet(id!, newPetPicture);
      apiDelay();
    }
  }

  return (
    <div className="PetImageUpload">
      <h1>UPLOAD PICTURE</h1>
      <div className="petImageUploadForm">
        <form action="put" className="imageUpload" onSubmit={handleImageUpload}>
          <label htmlFor="petPicture">
            <input
              type="file"
              id="petPicture"
              name="petPicture"
              key={baseImage || ""}
              accept=".jpg, .jpeg, .png "
              onChange={(e) => {
                onChangeImage(e);
              }}
            />
          </label>
          {baseImage ? (
            <p>
              <img src={baseImage} alt="User Selected" />{" "}
              <span
                className="removeImage"
                onClick={() => {
                  setBaseImage("");
                }}
              >
                REMOVE
              </span>
            </p>
          ) : (
            <p className="noImageSelected">No Image Selected</p>
          )}
          {baseImage ? (
            <button type="submit" className="uploadButton">
              UPLOAD PICTURE
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className={isLoading ? "loadingScreen" : "hiddenLoadScreen"}>
        <div className={isLoading ? "lds-hourglass" : "hiddenLoadScreen"}></div>
      </div>
    </div>
  );
}

export default PetImageUpload;
