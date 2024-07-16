import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Password = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full py-3 mr-3 text-sm bg-transparent rounded outline-none"
      ></input>

      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="cursor-pointer text-primary"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="cursor-pointer text-slate-400"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default Password;
