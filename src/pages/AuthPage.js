import { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <h1>Auth Page</h1>

      <button onClick={()=> setShowLogin(!showLogin)}>{showLogin ? "Sign Up" : "Log In"} </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      {/* <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} /> */}
    </div>
  );
}

export default AuthPage;
