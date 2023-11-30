



import React from 'react';


const SlideNavbar = () => {
  return (
    <div>
      <input type="checkbox" id="chk" aria-hidden="true" />
     
      

       
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="E-mail" required="" />
            <input type="password" name="pswd" placeholder="senha" required="" />
            <button>Login</button>
          </form>
        </div>
      
 
  );
};

export default SlideNavbar;

