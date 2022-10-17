import React from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [email, SetEmail] = React.useState("");
  const [Password, SetPassword] = React.useState("");
  const [error, SetError] = React.useState("");
  const [Confirm_Login, SetConfirm_Login] = React.useState("");
  const HandleSubmitLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        SetConfirm_Login("You account Login!");

        setTimeout(() => {
          return navigate("/Main");
        }, 1000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        SetError(errorMessage);
      });
  };
  return (
    <div className="Main__wraper_Content">
      <div className="Form_wrapper">
        <form onSubmit={HandleSubmitLogin}>
          <h1 className="Form_name_text">Login</h1>
          <input
            type={"text"}
            placeholder={"Email"}
            value={email}
            onChange={(event) => SetEmail(event.target.value)}
          />
          <input
            type={"password"}
            placeholder={"password"}
            value={Password}
            onChange={(event) => SetPassword(event.target.value)}
          />
          {error && (
            <p className="Error_message_in_register_and_login_page">{error}</p>
          )}
          {Confirm_Login && <p className="Happy_message">{Confirm_Login}</p>}
          <button type={"submit"} className="Btn_in_form">
            Login
          </button>

          <Link className="Link_in_Register_and_login_page" to={"/Register"}>
            {" "}
            If you not have acount, register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
