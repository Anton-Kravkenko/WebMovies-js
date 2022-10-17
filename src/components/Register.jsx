import React from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { db } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
const Register = () => {
  let navigate = useNavigate();
  const User = auth.currentUser;
  const [email, SetEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [file, SetFile] = React.useState("");
  const [error, SetError] = React.useState("");
  const [Password, SetPassword] = React.useState("");
  const [Confirm_register, SetConfirm_register] = React.useState("");
  const [isAdmin, SetisAdmin] = React.useState(false);

  const HandleSubmitRegister = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, `${displayName}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
              Password,
              isAdmin,
            });

            //create empty user chats on firestore
          
          } catch (err) {
            console.log(err.message);
          }
        });
      });

      setTimeout(() => {
        return navigate("/Main");
      }, 1000);
    } catch (err) {
      SetError(err.message);
    }
  };

  return (
    <div className="Main__wraper_Content">
      <div className="Form_wrapper">
        <form onSubmit={HandleSubmitRegister}>
          <h1 className="Form_name_text">Register</h1>

          <input
            type={"text"}
            placeholder={"Name"}
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
          />

          <input
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(event) => SetEmail(event.target.value)}
          />
          <input
            type={"password"}
            placeholder={"Password"}
            value={Password}
            onChange={(event) => SetPassword(event.target.value)}
          />
          <input
            type={"file"}
            placeholder={"File"}
            value={file}
            className="Chose_File_in_register"
            onChange={(event) => SetFile(event.target.value)}
          />
          {error && (
            <p className="Error_message_in_register_and_login_page">{error}</p>
          )}
          {Confirm_register && (
            <p className="Happy_message">{Confirm_register}</p>
          )}
          <button type={"submit"} className="Btn_in_form">
            Register
          </button>
          <Link className="Link_in_Register_and_login_page" to={"/Login"}>
            {" "}
            Go to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
