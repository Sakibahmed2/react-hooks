import React, { useState } from "react";

const UseStateExample = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);

    const inputName = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [inputName]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-4">
      <input
        onChange={handleChange}
        className="border-2 border-black py-3 px-2 rounded-md"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={handleChange}
        className="border-2 border-black py-3 px-2 rounded-md"
        type="text"
        name="email"
        id="email"
      />
      <button
        className="bg-sky-600 text-white rounded-md py-2 px-3 font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default UseStateExample;
