import React from 'react';

const Button = ({ styles, level, onClick }) => {
  return (
    <button 
      type="button" 
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] 
      text-primary rounded-[100%] outline-none ml-20 ${styles}`}
      onClick={onClick}
    >
      {level}
    </button>
  );
}

export default Button;
