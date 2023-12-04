
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
  nome: yup
  .string()
  .required("Nome obrigatório")
  .min(3, "Tamanho muito grande")
  .max(255, "Tamanho muito grande"),
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
        window.location.href = "/";

      }
      else{
        console.log(response.status)
      }
    
    } catch (error) {
      console.error("Erro ao fazer login: Status inesperado", error);
    }
  };

  const onSubmitRegister = async formData => {

    try {
      const response = await fetch(
        `https://gym-academy-back-end-six.vercel.app/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        window.location.href = "/principal";
      }

      if (response.status === 400) {
        setErrorMessage("Email ou senha incorretos");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
        <input type="checkbox" id="chk" aria-hidden="true" />

          
          <form onSubmit={handleSubmit(onSubmitRegister)}>
          <label htmlFor="chk" aria-hidden="true">Cadastrar</label>

          <Controller
                  name="nome"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={errors.nome ? "erro" : ""}
                      type="text"
                      name="nome"
                      value={field.value}
                      placeholder="Nome"
                      onChange={(e) => {
                        if (e.target.value.length <= 255) {
                          field.onChange(e);
                        }
                      }}
                    
                      {...field}
                    />
                  )}
                />
                {errors.nome && (
                  <div className="error">{errors.nome.message}</div>
                )}
                <Controller
                
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={errors.email ? "erro" : ""}
                      type="email"
                      name="email"
                      placeholder="Email"

                      value={field.value}
                      onChange={(e) => {
                        if (e.target.value.length <= 255) {
                          field.onChange(e);
                        }
                      }}
                     
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <div className="error">{errors.email.message}</div>
                )}

                <Controller
                  control={control}
                  name="senha"
                  render={({ field }) => (
                    <input
                      className={errors.senha ? "erro" : ""}
                      type="password"
                      name="senha"
                      placeholder="Senha"
                      value={field.value}
                      onChange={(e) => {
                        if (e.target.value.length <= 12) {
                          field.onChange(e);
                        }
                      }}
                    
                      {...field}
                    />
                  )}
                />
                {errors.senha && (
                  <div className="error">{errors.senha.message} </div>
                )}
              
                  

  
            <button>Cadastrar</button>
          </form>
        </div>

      
    
 
  );
};

export default SlideNavbar;

 /*
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
  nome: yup
  .string()
  .required("Nome obrigatório")
  .min(3, "Tamanho muito grande")
  .max(255, "Tamanho muito grande"),
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
        window.location.href = "/";

      }
      else{
        console.log(response.status)
      }
    
    } catch (error) {
      console.error("Erro ao fazer login: Status inesperado", error);
    }
  };

  const onSubmitRegister = async formData => {

    try {
      const response = await fetch(
        `https://gym-academy-back-end-six.vercel.app/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        window.location.href = "/";
      }

      if (response.status === 400) {
        setErrorMessage("Email ou senha incorretos");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>GYM ACADEMY</h1>
     
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup" style={formContainerStyle}>
          
          <form onSubmit={handleSubmit(onSubmitRegister)}>
          <label htmlFor="chk" aria-hidden="true">Cadastrar</label>

          <Controller
                  name="nome"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={errors.nome ? "erro" : ""}
                      type="text"
                      name="nome"
                      value={field.value}
                      placeholder="Nome"
                      onChange={(e) => {
                        if (e.target.value.length <= 255) {
                          field.onChange(e);
                        }
                      }}
                    
                      {...field}
                    />
                  )}
                />
                {errors.nome && (
                  <div className="error">{errors.nome.message}</div>
                )}
                <Controller
                
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={errors.email ? "erro" : ""}
                      type="email"
                      name="email"
                      placeholder="Email"

                      value={field.value}
                      onChange={(e) => {
                        if (e.target.value.length <= 255) {
                          field.onChange(e);
                        }
                      }}
                     
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <div className="error">{errors.email.message}</div>
                )}

                <Controller
                  control={control}
                  name="senha"
                  render={({ field }) => (
                    <input
                      className={errors.senha ? "erro" : ""}
                      type="password"
                      name="senha"
                      placeholder="Senha"
                      value={field.value}
                      onChange={(e) => {
                        if (e.target.value.length <= 12) {
                          field.onChange(e);
                        }
                      }}
                    
                      {...field}
                    />
                  )}
                />
                {errors.senha && (
                  <div className="error">{errors.senha.message} </div>
                )}
              
                  

  
            <button>Cadastrar</button>
          </form>
        </div>

        <div className="login" style={formContainerStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
}; */