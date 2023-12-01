import React from "react";


interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  onClick:any;
  radius: string;
  padding: string,
}

const CommonButton: React.FC<Props> = ({ 
    border,
    color,
    children,
    onClick, 
    radius,
    padding,
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         padding,
         
      }}
    >
    {children}
    </button>
  );

}

export default CommonButton;
