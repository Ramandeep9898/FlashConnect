import { useState } from "react";
import Login from "../../Components/Login.Component/Login";
import SignUp from "../../Components/Signup.Component/Signup";

export function Auth() {
  const [authVal, setAuthVal] = useState(true);

  return (
    <main className="sm-main-auth">
      {authVal ? (
        <Login setAuthVal={setAuthVal} />
      ) : (
        <SignUp setAuthVal={setAuthVal} />
      )}
    </main>
  );
}
