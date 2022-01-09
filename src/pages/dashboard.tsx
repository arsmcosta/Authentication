import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
     <h1>email: {user?.email}</h1>
     <h2>permissions: {user?.permissions}</h2>
     <h3>roles: {user?.roles}</h3>
    </>
   
  )
}
