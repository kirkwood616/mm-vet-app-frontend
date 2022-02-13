// import "./PetImageUpload.css";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";

function PetImageUpload() {
  let { user } = useContext(UserContext);
  let { userPets } = useContext(UserContext);
  let { index } = useParams();

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
  console.log(baseImage);

  return (
    <div className="PetImageUpload">
      <h1>HELLO CLARICE</h1>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <img src={baseImage} alt="" width={"200px"} />
    </div>
  );
}

export default PetImageUpload;
