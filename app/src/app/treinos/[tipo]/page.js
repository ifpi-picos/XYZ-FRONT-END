import Link from 'next/link';
import "@/components/css/treinos.css";
import Header from "@/components/Header";
import Image from 'next/image';
import sobree from "@/components/img/flexoes.gif";
import img from "@/components/img/peito.jpg";

async function pegarTreinos(tipo) {
  const res = await fetch(`https://gym-academy-back-end-six.vercel.app//treinos-por-tipo/${tipo}`, {
    cache: "no-store",
  });
  const info = await res.json();
  return info;
}

const TreinoPage = async ({ params }) => {
  const treino = params.tipo;
  const treinos = await pegarTreinos(params.tipo);

  return (
    <>
      <div>
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
            Venha conhecer <br />
            os diferentes tipos de
          </h2>
          <h1>TREINOS</h1>
          <a href="#">COMEÇAR AGORA</a>
        </div>
      </section>

        <section>
            <div>
              <section className="container" id="sobre">
                <h1 className="h1-principal-laranja"> Sobre {params.tipo}</h1>
                <div className="row">
                  {/* Conteúdo relacionado a cada treino */}
                </div>
              </section>
              {treinos.map((treinoInfo, index) => (

              <div key={index} className="container2">
                {treino ? (
                  <div className="row">
                    <div className="col-7">
                      <div className="card">
                        <h1 className="nresp7">{treinoInfo.nomeDoTreino}</h1>
                        <Image
                          className="alimenta"
                          src={sobree}
                          width={100}
                          height={200}
                          alt="sobre"
                        />
                        <p>{treinoInfo.descricao}</p>
                        <h3 style={{textAlign:"left", marginLeft:"-3%", fontSize:"23px"}}>Como executar:</h3>
                        <p style={{textAlign:"left", marginLeft:"-3%"}}>{treinoInfo.comoExecutar}</p>
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
                  ))}
            </div>
        </section>
      </div>
    </>
  );
};

export default TreinoPage;