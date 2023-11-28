"use client"
import Link from 'next/link';
import "@/components/css/treinos.css";

const tiposDeTreino = ['peito', 'costas', 'biceps', 'triceps', 'panturrilhas', 'ombros', 'pernas', 'gluteos'];

const TreinoPage = ({params}) => {
  const  treino  = params.tipo;
  // Simulando dados do treino específiconos.css
  const dadosDoTreino = {
    peito: {
      nome: 'Peito',
      descricao: 'Descrição do treino de peito...',
      imagem: '/img/peito.png',
      gif: 'imagem',
      instrucoes: 'Instruções do treino de peito...',
    },
    // Adicione informações para outros tipos de treino
  };

  return (
    <div>
      <section className="inicio container-fluid" id="inicio">
        <div className="container">
          <h2>Ajudamos você a <br /> tirar dúvidas sobre</h2>
          <h1>MUSCULAÇÃO</h1>
          <a href="#informacoes">COMEÇAR AGORA</a>
        </div>
      </section>

      <main>
        <section className="container" id="sobre">
          <h1 className="h1-principal-laranja">SOBRE O TREINO</h1>
          <div className="row">
            
          </div>
        </section>

        <div className="container">
          {treino ? (
            <div className="row">
              <div className="col-7">
                <div className="card">
                  <h1 className="nresp">{dadosDoTreino[treino].nome}</h1>
                  <img src={dadosDoTreino[treino].imagem} width="70%" alt={`Imagem de ${dadosDoTreino[treino].nome}`} />
                  <p>{dadosDoTreino[treino].descricao}</p>
                  <h3>Como executar:</h3>
                  {/* <img src={dadosDoTreino[treino].gif} width="50%" alt={`GIF de ${dadosDoTreino[treino].nome}`}/>*/} 
                  <p>{dadosDoTreino[treino].instrucoes}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              {tiposDeTreino.map((tipo) => (
                <div key={tipo} className="col-7">
                  <Link href={`/?treino=${tipo}`} as={`/${tipo}`}>
                    <a>
                      <div className="card">
                        <h1 className="nresp">{tipo}</h1>
                        <p className="parad">. </p>
                        {/* ... Adicione mais informações sobre cada tipo de treino se necessário */}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TreinoPage;
