import React from "react";

const Input = ({ label, type, placeholder, className, value, setValue, labelClassName }) => {

  
  return (
    <div>
      <div className="mb-4">
        <label htmlFor={label} className={`block text-gray-600 text-sm mb-2 ${labelClassName}`}>
          {label}
        </label>
        <input
          type={type}
          id={label}
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          className={`w-full px-4 py-2 border-b-2 border-gray-900 rounded-md focus:outline-none ${className} `}
          required
        />
      </div>
    </div>
  );
};

export default Input;
