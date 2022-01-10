import { useContext, useEffect } from "react";
import { withSSRAuth } from "../../utils/withSSRAuth";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";

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
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
