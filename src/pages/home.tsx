import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navbar } from "../components/navbar";

export function Home() {
  const { authenticate, unauthenticate, isAuth } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      {isAuth ? (
        <button onClick={unauthenticate}>Logout</button>
      ) : (
        <button onClick={authenticate}>Login</button>
      )}
    </>
  );
}
