import useUsersData from "../hooks/useUsersData";
import UsersList from "./UsersList";

const UsersContainer = () => {
  const { data, isLoading, error } = useUsersData();

  const props = {
    isLoading,
    error,
    data,
  };

  return <UsersList {...props} />;
};

export default UsersContainer;
