import { useQuery } from "@apollo/client";

import { AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = () => {
  const { data, loading } = useQuery(AUTHORIZED_USER);
  return { authorizedUser: data?.authorizedUser, loading };
};

export default useAuthorizedUser;