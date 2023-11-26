"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import "@/components/admin/css/progressao.css";
import HeaderAdmin from "./admin/HeaderAdmin";
import CardProgressos from "./admin/Progressao";
import CustomSelect from "./admin/Seelct";

export default function Admin({ Receitas }) {
  const [receitas, setReceitas] = useState(Receitas);

  const handleDeletar = async (id) => {
    try {
      const response = await fetch(`https://gym-academy-back-end-six.vercel.app/deletar-receita/${id}`, {
        method: "Delete",
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.ok) {
        const updatedReceitas = receitas.filter((receita) => receita._id !== id);
        setReceitas(updatedReceitas);
        window.location.href = "/admin"
      }
    } catch (error) {
      console.error("Erro ao deletar a receita", error);
    }
  };

  return (
    <section style={{ backgroundColor: "white" }}>
      <HeaderAdmin />
      <CardProgressos />
      <CustomSelect />
      {receitas.map((receita, index) => (
        <section key={index} className="container-fluid" id="informacoes" style={{ textAlign: "center", marginTop: "10%" }}>
          <div className="container">
            <h1 className="h1-principal-branco">Receitas</h1>

            <div className="row">
              <div className="col-7">
                <div className="card" style={{ textAlign: "center", alignItems: "center", marginLeft: "28%", width: "120%" }}>
                  <img src={receita.imagem} width="50%" alt={`imagem de ${receita.titulo}`} />
                  <h1>{receita.titulo}</h1>
                  <p>{receita.descricao}</p>
                  <h2>Ingredientes:</h2>
                  <ul>
                   {receita.ingredientes}
                  </ul>
                  <h2>Modo de Preparo:</h2>
                  <p>{receita.modoPreparo}</p>
                  <div>
                    <Link href={`alterar-receita/${receita._id}`}>Editar</Link>
                    <button onClick={() => handleDeletar(receita._id)}>Deletar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

