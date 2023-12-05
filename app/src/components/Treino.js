import "@/components/css/home.css";
import Header from "@/components/Header";
import "@/components/menu2";
import Footer from "@/components/footer";
import Image from "next/image";
import img from "@/components/img/headertreinopoo.jpg";
import sobre from "@/components/img/treino.png";
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "@/components/menu2";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="inicio"
        id="inicio"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        <div className="container">
          <h2>
            Ajudamos você a <br /> tirar dúvidas sobre
          </h2>

          <h1>MUSCULAÇÃO</h1>

          <a href="#informacoes">COMEÇAR AGORA</a>
        </div>
      </section>

      <main>
        <section class="container" id="sobre">
          <h1 class="h1-principal-laranja">SOBRE O TREINO</h1>
          <div class="row">
            <div class="col-6">
              <Image
                className="img-treino"
                src={sobre}
                width={300}
                height={300}
                alt="imagem de um homem segurando pesos"
              />
            </div>
            <div className="col-6 sobre-conteudo">
              <p>
                <span className="cinza-claro">O </span>
                <span className="laranja">Treino</span> de musculação é um
                programa de exercícios voltado para o desenvolvimento e
                fortalecimento dos músculos do corpo.
              </p>
              <p>
                Ele utiliza pesos, máquinas de musculação e exercícios com o
                peso corporal para criar resistência e estimular o crescimento
                muscular.
              </p>
            </div>
          </div>
        </section>

        <section class="container-fluid" id="informacoes">
          <div class="container">
            <h1 class="h1-principal-branco">QUAIS TREINOS DESEJA ACESSAR?</h1>

            <div class="row">
           
            <div className="col-6">
      <a href="treinos/peito" className="cardlink">
        <div className="card">
    
      
          <span className="oi">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "1px",
              }}
              
            />
            <h1 style={{ textAlign: "center",fontSize: "30px", }}>PEITO</h1>
             <p style={{ textAlign: "center" }}>
                    Desenvolva um peito forte para benefícios físicos e visuais
                    </p>
          </span>
        </div>
      </a>
    </div>
    <div className="col-6">
      <a href="/costa" className="cardlink">
        <div className="card">
          <span className="oi">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "1px",
              }}
            />
              <h1 style={{ textAlign: "center",fontSize: "30px", }}>COSTA</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça suas costas para benefícios funcionais e estéticos
                    </p>
          </span>
        </div>
      </a>
    </div>
            
    <div className="col-6">
      <a href="/" className="cardlink">
        <div className="card">
          <span className="oi">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "1px",
              }}
            />
            <h1 style={{ textAlign: "center",fontSize: "30px", }}>BÍCEPS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça seus bíceps para ganhos funcionais e visuais
                    </p>
          </span>
        </div>
      </a>
    </div>
    <div className="col-6">
      <a href="/" className="cardlink">
        <div className="card">
          <span className="oi">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "1px",
              }}
            />
              <h1 style={{ textAlign: "center",fontSize: "30px", }}>TRÍCEPS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça os tríceps para ganhos funcionais e visuais                    </p>
          </span>
        </div>
      </a>
    </div>

    <div className="col-6">
      <a href="/" className="cardlink">
        <div className="card">
          <span className="oi">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "1px",
              }}
            />
             <h1 style={{ textAlign: "center",fontSize: "30px", }}>OMBROS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça os ombros para benefícios visuais e funcionais
                    </p>
          </span>
        </div>
      </a>
    </div>

    <div className="col-6">
      <a href="/" className="cardlink">
        <div className="card">
          <span className="oi">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "1px",
              }}
            />
             <h1 style={{ textAlign: "center",fontSize: "30px", }}>PANTURRILHA</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça as panturrilhas e essenciais para o suporte do corpo                    </p>
          </span>
        </div>
      </a>
    </div>

    <div className="col-6">
      <a href="/" className="cardlink">
        <div className="card">
          <span className="oi">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "1px",
              }}
            />
             <h1 style={{ textAlign: "center",fontSize: "30px", }}>PERNAS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça as pernas para benefícios funcionais e uma base sólida
                    </p>
          </span>
        </div>
      </a>
    </div>
    
    <div className="col-6">
      <a href="/" className="cardlink">
        <div className="card">
          <span className="oi">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "1px",
              }}
            />
             <h1 style={{ textAlign: "center",fontSize: "30px", }}>GLÚTEOS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça os glúteos promove estabilidade e mobilidade
                    </p>
          </span>
        </div>
      </a>
    </div>

            </div>
          </div>
        </section>
      </main>
      <>
        <Footer />
      </>
    </>
  );
}