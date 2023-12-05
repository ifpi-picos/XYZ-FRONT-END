import React from "react";
import SlideNavbar from "@/components/cadastro";;
import AnotherComponent from '@/components/login';
import '@/components/css/login.css';


const Cadastra = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:"center"}}>GYM ACADEMY</h1>
        <div className="main">
     
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup" style={formContainerStyle}>
        <SlideNavbar title="Sign up" />
          </div>

         <div className="login" style={formContainerStyle}>
         <AnotherComponent title="Login" />
   
    </div>
    </div>
    </div>
  
  );
};

export default Cadastra;
const formContainerStyle = {
  fontFamily: 'Jost, sans-serif',
  textAlign: 'center',
  marginTop: '50px',
};


