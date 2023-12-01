"use client"
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import logo from "@/components/img/login.jpg"
import "@/components/formularios/form.css"

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

   
    </div>
  );
};

export default Formulario;
