import { useEffect, useRef } from "react";
import CustomInput from "../components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>Use ref</h1>
      <form>
        <CustomInput ref={myRef} className="border-2 border-blue-500" />

        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefExample;
