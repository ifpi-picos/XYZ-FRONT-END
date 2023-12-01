// components/Formulario.js
"use client"

// components/Formulario.js
import Image from 'next/image';
import logo from "@/components/img/login.jpg"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { Controller,useForm } from "react-hook-form";
import "@/components/formularios/form.css"

const schema = yup.object().shape({
nome: yup.string().required("nome obrigatório"),
descricao: yup.string().required("decrição obrigatória"),
ingredientes: yup.string().required("ingredientes obrigatório"),
modoDePreparo: yup.string().required("modo de preparo obrigatório")
})
const AlterarReceitaForm = ({id}) => {
  
const  {
control,
handleSubmit,
formState:{errors},

}  = useForm(yupResolver(schema))
console.log(id)
const onSubmit = async formdata  => {
  try {
    const response = await fetch(`https://gym-academy-back-end-six.vercel.app/alterar-receita/${id}`,{
      method:"PUT",
      headers:{
        "content-type": "application/json",
      },
      body:JSON.stringify(formdata)
    })
    if(response.ok){
      const info = await response.json()
      window.location .href = "/"
      console.log(info)
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
    </div>
  );
};

export default AlterarReceitaForm;
