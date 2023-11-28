"use client"
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import logo from "@/components/img/login.jpg"

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="sobre"
        className="imagemr"
      />
      <h2>Formulário de Treino</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
          <label htmlFor="tipoTreino">Tipo de Treino</label>
          <select
            {...register('tipoTreino', {
              required: 'Este campo é obrigatório',
            })}
            id="tipoTreino"
          >
            <option value="peito">Peito</option>
            <option value="costa">Costas</option>
            <option value="biceps">Bíceps</option>
            <option value="triceps">Tríceps</option>
            <option value="panturrilhas">Panturrilhas</option>
            <option value="ombros">Ombros</option>
            <option value="pernas">Pernas</option>
            <option value="gluteos">Glúteos</option>
          </select>
          {errors.tipoTreino && (
            <p className="error-message">{errors.tipoTreino.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="nomeTreino">Nome do Treino</label>
          <input
            {...register('nomeTreino', {
              required: 'Este campo é obrigatório',
            })}
            type="text"
            id="nomeTreino"
          />
          {errors.nomeTreino && (
            <p className="error-message">{errors.nomeTreino.message}</p>
          )}
        </div>

  

        <div className="form-group">
          <label htmlFor="imagemTreino">Escolha uma Imagem</label>
          <input
            {...register('imagemTreino', {
              required: 'Este campo é obrigatório',
            })}
            type="file"
            id="imagemTreino"
            accept="image/*"
          />
          {errors.imagemTreino && (
            <p className="error-message">{errors.imagemTreino.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="descricaoTreino">Descrição do Treino</label>
          <textarea
            {...register('descricaoTreino', {
              required: 'Este campo é obrigatório',
            })}
            id="descricaoTreino"
          />
          {errors.descricaoTreino && (
            <p className="error-message">{errors.descricaoTreino.message}</p>
          )}
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
        label {
          display: block;
          margin-bottom: 5px;
          color: orange;
        }
      
        input,
        textarea,
        button,
        select {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          box-sizing: border-box;
        }
      
        
        #tipoTreino {
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 8px;
          color: #333;
        }
      
        #tipoTreino option {
          background-color: white;
          color: #333;
        }
      
        
      `}</style>
    </div>
  );
};

export default Formulario;
