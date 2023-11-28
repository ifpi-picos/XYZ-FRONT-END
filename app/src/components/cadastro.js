
"use client";
import React, { useState, useEffect } from "react";
import '@/components/css/login.css';
import Link from 'next/link';
import login from "@/components/img/l.png";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("O e-mail é obrigatório")
    .max(255, "e-mail muito longo"),
  senha: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "min 6 caracteres")
    .max(8, "max 12 caracteres"),
});

const SlideNavbar = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async data => {
    try {
      const response = await fetch(`https://gym-academy-back-end-six.vercel.app/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
       
      if(response.ok){
        const responseData = await response.json()
        console.log(responseData)
      }
    
    } catch (error) {
      console.error("Erro ao fazer login: Status inesperado", error);
    }
  };
  return (
    <div>
      <h1>GYM ACADEMY</h1>
     
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup" style={formContainerStyle}>
          <form>
            <label htmlFor="chk" aria-hidden="true">Cadastrar</label>
            <input type="text" name="txt" placeholder="Seu nome" required="" />
            <input type="email" name="email" placeholder="E-mail" required="" />
            <input type="password" name="pswd" placeholder="senha" required="" />
            <button>Cadastrar</button>
          </form>
        </div>

        <div className="login" style={formContainerStyle}>
          <form onSubmit={handleSubmit()}>
            <label htmlFor="chk" aria-hidden="true">Entrar</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  type="email"
                  name="email"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
            <Controller
              name="senha"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  name="senha"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.senha && (
              <div className="error">{errors.senha.message}</div>
            )}

            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SlideNavbar;

const formContainerStyle = {
  fontFamily: 'Jost, sans-serif',
  textAlign: 'center',
  marginTop: '50px',
};
