// components/Formulario.js
"use client"

// components/Formulario.js

import Image from 'next/image';
import logo from "@/components/img/login.jpg"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { Controller,useForm } from "react-hook-form";

const schema = yup.object().shape({
nome: yup.string().required("nome obrigatório"),
descricao: yup.string().required("decrição obrigatória"),
ingredientes: yup.string().required("ingredientes obrigatório"),
modoDePreparo: yup.string().required("modo de preparo obrigatório")
})
const Formulario = () => {
  
const  {
control,
handleSubmit,
formState:{errors},

}  = useForm(yupResolver(schema))

const onSubmit = async formdata  => {
  try {
    const response = await fetch("https://gym-academy-back-end-six.vercel.app/nova-receita",{
      method:"Post",
      headers:{
        "content-type": "application/json",
      },
      body:JSON.stringify(formdata)
    })
    if(response.ok){
      const info = await response.json()
      window.location.href = "/admin"
    }
  }
  catch(erro){
    console.error(erro)
  }
}
  return (
  
    <div className="form-container">
    
      <Image
                 
                 src={logo}
                 width={100}
                 height={100}
                 alt="sobre"
                 
                 layout="fixed" 
                 objectFit="cover"
               className="imagem" />
      <h2>Formulário de Receita</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="imagemReceita">Imagem</label>
          <input
            
            type="file"
            id="imagemReceita"
            accept="image/*"
          />
        
        </div>

        <div className="form-group">
          <label htmlFor="nomeReceita">Nome da Receita</label>
          <Controller
           control={control}
           name="nome"
           render={({field})=>(
            <input 
              type= "text"
              name="nome"
              value= {field.value}
              onChange={field.onChange}
            />
  )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <Controller
           control={control}
           name="descricao"
           render={({field})=>(
            <textarea
            name="descricao"

              value= {field.value}
              onChange={field.onChange}
            />
           )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ingredientes">Ingredientes</label>
          <Controller
           control={control}
           name="ingredientes"
           render={({field})=>(
            <textarea
            name="ingredientes"

              value= {field.value}
              onChange={field.onChange}
            />
           )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="modoDePreparo">Mode De Preparo</label>
          <Controller
           control={control}
           name="modoDePreparo"
           render={({field})=>(
            <textarea
            name="modoDePreparo"

              value= {field.value}
              onChange={field.onChange}
            />
           )}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <style jsx>{`
      
      .backButton {
        display: inline-block;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        cursor: pointer;
      }
      
      .backButton:hover {
        background-color: #0056b3;
      }
      
      
        .form-container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          border: 2px solid orange;
          border-radius: 10px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h2 {
          color: orange;
          text-align: center;
        }

        .form-group {
          width: 100%;
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: orange;
        }

        input,
        textarea,
        button {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          box-sizing: border-box;
        }

        .error-message {
          color: red;
          margin-top: 5px;
        }

        button {
          background-color: orange;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Formulario;
