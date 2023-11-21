// pages/treino.js
"use client";
import "@/components/css/tabela.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import "@/components/menu2";
import Image from "next/image";
import sobree from "@/components/img/sobretabela.png";
import img from "@/components/img/headertabela.jpg";
import Modal from 'react-modal';



const TrainingTable = () => {
  const [exercises, setExercises] = useState([
    { name: 'Supino', sets: 3, repetitions: 12, load: 50 },
    { name: 'Agachamento', sets: 4, repetitions: 10, load: 80 },
    { name: 'Remada', sets: 3, repetitions: 12, load: 40 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExercise, setNewExercise] = useState({
    name: '',
    sets: 0,
    repetitions: 0,
    load: 0,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExercise({ ...newExercise, [name]: value });
  };

  const addExercise = () => {
    setExercises([...exercises, newExercise]);
    closeModal();
    setNewExercise({ name: '', sets: 0, repetitions: 0, load: 0 });
  };

  const removeExercise = (index) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
  };

  return (
    <>
<Header />

    <section
      className="inicio container-fluid"
      id="inicio"
      style={{
        backgroundImage: `url(${img.src})`,
      }}
    >
      <div className="container">
        <h2>
          Tabela de treino
          <br /> sugerida para
        </h2>
        <h1>INICIANTES</h1>
        <a href="#informacoes">COMEÇAR AGORA</a>
      </div>
    </section>

    <main>
      <section className="container" id="sobre">
        <h1 className="h1-principal-laranja">SOBRE A TABELA DE TREINO</h1>
        <div className="row">
          <div className="col-6">
            <Image
              className="tabelasobre"
              src={sobree}
              width={400}
              height={300}
              alt="sobre"
            />
          </div>
          <div className="col-6 sobre-conteudo">
            <p>
              <span className="laranja">A Tabela </span>
              <span className="cinza-claro">de Treino</span> é uma ferramenta
              usada para planejar e organizar os exercícios, séries e
              repetições a serem realizados durante um programa de treinamento
              de musculação.
            </p>

            <p >
              Ela é projetada para ajudar os indivíduos a alcançarem seus
              objetivos de condicionamento físico, como ganho de força,
              hipertrofia muscular ou perda de gordura.
            </p>
          </div>
        </div>
      </section>
      </main>
    <div style={{ background:"#ff4200", textAlign:"center"}} >
      <div  style={{ background:"#ff4200",}}>
      <h1 style={{textAlign: "center", color: "white", fontSize: "40px"}}>Meu treino</h1>
      <button onClick={openModal}>Adicionar exercício</button>

      </div>
      <table id="tabela-treino" style={{ background:"white"}}>
        <thead>
          <tr>
            <th>Exercício</th>
            <th>Séries</th>
            <th>Repetições</th>
            <th>Carga (kg)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.name}</td>
              <td>{exercise.sets}</td>
              <td>{exercise.repetitions}</td>
              <td>{exercise.load}</td>
              <td>
                <button onClick={() => removeExercise(index)}>Remover exercício</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div id="acoes">
      <div style={{ textAlign: 'center' }}>
      <button
        style={{
          padding: '10px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          margin: '0 auto', 
          display: 'block',
        }}
      >
        Salvar
      </button>
    </div>
      
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2 style={{ textAlign: "center", marginBottom: "2%", marginTop:"2%"}} >Adicionar Exercício</h2>
   
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', textAlign: "center" }}>
        <label>Nome do exercício:</label>
        <input style={{ marginBottom: '10px', padding: '5px', border: '3px solid #ccc', borderRadius: '10px'  }} type="text" name="name" value={newExercise.name} onChange={handleInputChange} required />
</div>

<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', textAlign: "center" }}>
        <label>Séries:</label>
        <input     style={{ marginBottom: '10px', padding: '5px', border: '3px solid #ccc', borderRadius: '10px'  }}
 type="number" name="sets" value={newExercise.sets} onChange={handleInputChange} required />
</div>

<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', textAlign: "center" }}>
        <label>Repetições:</label>
        <input style={{ marginBottom: '10px', padding: '5px', border: '3px solid #ccc', borderRadius: '10px'  }} type="number" name="repetitions" value={newExercise.repetitions} onChange={handleInputChange} required />
</div>

<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', textAlign: "center" }}>
        <label>Carga (kg):</label>
        <input style={{ marginBottom: '10px', padding: '5px', border: '3px solid #ccc', borderRadius: '10px'  }} type="number" name="load" value={newExercise.load} onChange={handleInputChange} required />
</div>

<div style={{textAlign: "center"}}>
      <button
        onClick={addExercise}
        style={{
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginRight: '10px',
          cursor: 'pointer'
        }}
      >
        Adicionar
      </button>
      <button
        onClick={closeModal}
        style={{
          padding: '10px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Cancelar
      </button>
    </div>
      </Modal>
    
    <Footer />
    </div>
    </>
  );
};

export default TrainingTable;

