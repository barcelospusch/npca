"use client"

import { ArrowRightIcon, CameraIcon, GraduationCapIcon, MegaphoneSimpleIcon, MeteorIcon, NewspaperIcon } from "@phosphor-icons/react";
import Button from "@/components/Button.js";
import Link from "next/link";

function Pillar({ icon: Icon, title, children }) {
  return (
    <article className="pillar">
      <div className="icon">
        <Icon />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main>
      <section id="inicio" className="hero">
        <div className="eyebrow">ASTRONOMIA • CIÊNCIA CIDADÃ • EDUCAÇÃO</div>
        <h1>
          Núcleo de Pesquisa e<br />
          <em>Caça de Asteroides</em>
        </h1>
        <p>
          Uma rede de estudantes transformando curiosidade em investigação
          astronômica.
        </p>
        <div className="actions">
          <Button variant="red" href="/faca-parte">
            Saiba como participar <ArrowRightIcon size={18} />
          </Button>
          <Button href="/quem-somos">Conheça o NPCA</Button>
        </div>
        <div className="orbit">☄</div>
      </section>
      <section id="participar" className="notice">
        <div>
          <span className="tag">EDITAIS DISPONÍVEIS</span>
          <h2>Faça parte do NPCA</h2>
          <p>Nenhum edital disponível ainda :(</p>
        </div>
        <Button variant="black" href="/faca-parte#editais">
          Ver mais editais <ArrowRightIcon size={18} />
        </Button>
      </section>
      <section id="sobre" className="split">
        <div className="section-number">01 / SOBRE</div>
        <div>
          <h2>
            De Estudantes,
            <br />
            <em>Para Estudantes</em>
          </h2>
          <p className="lead">
            O Núcleo de Pesquisa e Caça de Asteroides (NPCA) nasceu do desejo
            de democratizar o acesso à ciência de ponta.
          </p>
          <p>
            Adotamos um modelo colaborativo multi-colegial, conectando jovens
            mentes de diferentes instituições de ensino numa rede permanente de
            investigação astronômica.
          </p>
          <Button variant="outline" href="/quem-somos">
            Nossa missão e história <ArrowRightIcon size={18} />
          </Button>
        </div>
      </section>
      <section id="institucional" className="pillars">
        <div className="section-number">02 / O QUE FAZEMOS</div>
        <h2>
          Os Nossos <em>Pilares Operacionais</em>
        </h2>
        <div className="pillar-grid">
          <Pillar icon={MeteorIcon} title="Caça de Asteroides">
            Análise minuciosa de imagens obtidas por telescópios internacionais
            de grande porte, com o objetivo de detectar e reportar novos corpos
            celestes em campanhas oficiais de ciência cidadã.
          </Pillar>
          <Pillar icon={GraduationCapIcon} title="Capacitação Científica">
            Desenvolvimento de cursos, workshops práticos e oficinas de análise
            de dados e software astronômico para que qualquer estudante,
            independentemente da sua base inicial, possa pesquisar.
          </Pillar>
          <Pillar icon={MegaphoneSimpleIcon} title="Divulgação e Extensão">
            Produção de conteúdo educativo, palestras e feiras de ciências para
            aproximar a comunidade escolar da astronomia e da tecnologia
            espacial.
          </Pillar>
        </div>
      </section>
      <section className="numbers">
        <div className="section-number">03 / IMPACTO</div>
        <h2>
          O NPCA em <em>Números</em>
        </h2>
        <div className="stats">
          <div>
            <strong>100%</strong>
            <span>
              Gerido por
              <br />
              Estudantes
            </span>
          </div>
          <div>
            <strong>17+</strong>
            <span>
              Alunos
              <br />
              Capacitados
            </span>
          </div>
          <div>
            <strong>1+</strong>
            <span>
              Instituições
              <br />
              Parceiras
            </span>
          </div>
        </div>
      </section>
      <section id="noticias" className="updates">
        <div>
          <div className="section-number">04 / CONECTE-SE</div>
          <h2>
            Fique por Dentro
            <br />
            <em>do NPCA</em>
          </h2>
        </div>
        <div className="links">
          <Link
            href="https://www.instagram.com/npca.brasil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CameraIcon />{" "}
            <span>
              <small>INSTAGRAM</small>@npca.brasil
            </span>
            <ArrowRightIcon />
          </Link>
          <Link href="/noticias">
            <NewspaperIcon />
            <span>
              <small>ATUALIZAÇÕES</small>Portal de Notícias e Avisos
            </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
