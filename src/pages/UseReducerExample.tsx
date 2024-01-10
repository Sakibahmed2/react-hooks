import React, { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = { name: "", email: "" };

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      break;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-x-4">
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border-2 border-black py-3 px-2 rounded-md"
          type="text"
          name="name"
          id="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
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
    </div>
  );
};

export default UseReducerExample;
