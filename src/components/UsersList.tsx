const UsersList = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return <p className="text-4xl text-purple-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-4xl text-red-500">Something went wrong.....</p>;
  }

  return (
    <div>
      {data?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default UsersList;
