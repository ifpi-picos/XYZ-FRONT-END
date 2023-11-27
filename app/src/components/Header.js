// components/Header.js
"use client";
import "@/components/css/Header.css";
/* globals.css */

/* Outros estilos globais podem vir aqui */

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
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
  );
};

export default Header;
