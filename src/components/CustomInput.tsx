import { forwardRef } from "react";

type TCustomInputProps = {
  className: string;
};

const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, inputRef) => {
    return (
      <input
        className={className}
        ref={inputRef}
        type="text"
        name="name"
        id="name"
      />
    );
  }
);

export default CustomInput;
