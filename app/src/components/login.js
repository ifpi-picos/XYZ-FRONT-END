
"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const onSubmit = async data => {
    console.log("Login form data", data);

    try {
      const response = await fetch(`https://gym-academy-back-end-six.vercel.app/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Login form data", response);

      if(response.status === 200){
        const responseData = await response.json()
        console.log(responseData.token)
       // window.location.href = "/principal";

      }
      else{
        console.log(response.status)
      }
    
    } catch (error) {
      console.error("Erro ao fazer login: Status inesperado", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="chk" aria-hidden="true">Entrar</label>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            placeholder="Senha"
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
      
  );
};

export default SlideNavbar;

