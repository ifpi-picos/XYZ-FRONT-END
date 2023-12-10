// components/Header.js
"use client";
import "@/components/css/Header.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <a  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></a>
    <header>
      <h1 className="titulo">
        <span className="laranja">GYM</span> ACADEMY
      </h1>
      <nav className={`navbar ${isMenuOpen ? "active2" : ""}`}>
        <div className="btn">
          <i className="fas fa-times close-btn" onClick={toggleMenu}></i>
        </div>
        <a href="/" className="active">
          INÍCIO
        </a>
        <a href="#sobre">SOBRE</a>
        <a href="#informacoes">INFORMAÇÕES</a>
        <a href="#contato">CONTATOS</a>
      </nav>
      <div className="btn">
        <i className="fas fa-bars menu-btn" onClick={toggleMenu}></i>
      </div>
    </header>
    </>
  );
};

export default Header;
