import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AProtected = (props: { Component: any; }) => {
  let login = localStorage.getItem('Alogin');

  const { Component } = props;
  const navigate = useNavigate();

    console.log("protected",login);
    if (!login) {
      console.log(login);
      navigate('/adminlogin');
    }
    
  return (
    <div>
      <Component />
    </div>
  )
}

