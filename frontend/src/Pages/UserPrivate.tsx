import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Protected = (props: { Component: any; }) => {
  let login = localStorage.getItem('login');

  const { Component } = props;
  const navigate = useNavigate();

    console.log("protected",login);
    if (!login) {
      console.log(login);
      navigate('/userlogin');
    }
    
  return (
    <div>
      <Component />
    </div>
  )
}

