import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";

const UsersContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      setData(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const props = {
    isLoading,
    error,
    data,
  };

  return <UsersList {...props} />;
};

export default UsersContainer;
