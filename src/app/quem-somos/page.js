"use client";

import Button from "@/components/Button.js";
import { ArrowRightIcon, StarIcon } from "@phosphor-icons/react";
import { organizationalUnits } from "../../data/organizationalUnits";

const activities = [
  {
    title: "Formação Técnica",
    description:
      "Desenvolvemos cursos introdutórios de astronomia, treinamentos práticos em softwares astronômicos e oficinas especializadas de análise de imagens.",
  },
  {
    title: "Pesquisa Científica",
    description:
      "Engajamos nossos membros em campanhas reais de caça de asteroides, projetos científicos originais, relatórios e apresentações acadêmicas.",
  },
  {
    title: "Eventos Acadêmicos",
    description:
      "Organizamos workshops temáticos, ciclos de palestras abertas, feiras científicas e seminários estudantis para integrar a comunidade.",
  },
  {
    title: "Divulgação Científica",
    description:
      "Produzimos conteúdo educativo acessível, fazemos apresentações em escolas e criamos projetos para popularizar a astronomia e as ciências espaciais.",
  },
];

const values = [
  ["Excelência Acadêmica", "Busca contínua pelo rigor científico."],
  [
    "Colaboração e Liderança",
    "Protagonismo estudantil com espírito de equipe e cooperação mútua.",
  ],
  [
    "Inovação Tecnológica",
    "Uso de ferramentas e dados modernos aplicados à astronomia de impacto real.",
  ],
  [
    "Ética e Transparência",
    "Respeito aos princípios éticos na pesquisa, na educação e na convivência institucional.",
  ],
];
const directorates = organizationalUnits.filter(
  (unit) => unit.type === "Diretoria",
);
const programs = organizationalUnits.filter((unit) => unit.type === "Programa");

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="section-number">NPCA / QUEM SOMOS</div>
        <h1>Quem somos</h1>
      </section>
      <section className="about-mission">
        <div className="about-content">
          <div className="about-heading">
            <div className="section-number">01 / PROPÓSITO</div>
            <h2>
              Nossa <em>missão</em>
            </h2>
          </div>
          <div className="about-prose">
            <p>
              O Núcleo de Pesquisa e Caça de Asteroides (NPCA) é uma iniciativa
              educacional e científica gerida por estudantes, voltada à formação
              de jovens pesquisadores nas áreas de astronomia, ciência espacial
              e análise de dados astronômicos.
            </p>
            <p>
              Nossa finalidade principal é estabelecer uma equipe permanente de
              caça de asteroides, capacitando os alunos a participarem
              ativamente de programas nacionais e internacionais de
              identificação e monitoramento de objetos próximos à Terra.
              Adotamos um modelo colaborativo multi-colegial que conecta
              estudantes de diferentes instituições de ensino em uma forte rede
              de pesquisa, aprendizagem e desenvolvimento científico.
            </p>
            <p>
              Acreditamos que o contato direto com métodos científicos reais
              aproxima os jovens da pesquisa acadêmica de ponta e impulsiona a
              formação da próxima geração de profissionais nas áreas de Ciência,
              Tecnologia, Engenharia e Matemática (STEM) no Brasil.
            </p>
          </div>
        </div>
      </section>
      <section className="about-activities">
        <div className="section-number">02 / NOSSA ATUAÇÃO</div>
        <h2>O que fazemos?</h2>
        <div className="about-activity-list">
          {activities.map(({ title, description }) => (
            <article className="about-activity" key={title}>
              <StarIcon size={18} fill="currentColor" aria-hidden="true" />
              <p>
                <strong>{title}:</strong> {description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-vision">
        <div className="section-number">03 / FUTURO</div>
        <h2>Visão</h2>
        <p>
          Tornar-se uma referência estudantil nacional em pesquisa astronômica e
          caça de asteroides, reconhecida pela excelência científica, inovação
          educacional e cooperação institucional de impacto.
        </p>
      </section>
      <section className="about-values">
        <div className="section-number">04 / PRINCÍPIOS</div>
        <h2>Nossos valores</h2>
        <p className="about-values-intro">
          Nossa atuação é guiada por pilares fundamentais:
        </p>
        <div className="about-values-grid">
          {values.map(([title, description]) => (
            <article className="about-value" key={title}>
              <StarIcon size={18} fill="currentColor" aria-hidden="true" />
              <p>
                <strong>{title}:</strong> {description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-organization">
        <div className="section-number" id="estrutura">05 / ESTRUTURA</div>
        <h2>
          Conheça nossas <em>diretorias e programas</em>
        </h2>
        <div className="about-unit-list">
          {[directorates, programs]?.flat()?.map(({ slug, title }) => (
            <article className="about-unit" key={slug}>
              <StarIcon size={18} fill="currentColor" aria-hidden="true" />
              <p>
                <strong>
                  <a
                    className="about-unit-link"
                    href={"/quem-somos/" + slug}
                  >
                    {title}
                    <ArrowRightIcon fill="currentColor" aria-hidden="true" />
                  </a>
                </strong>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Quer fazer parte dessa missão?</h2>
        <Button variant="yellow" href="/faca-parte">
          Conheça as oportunidades <ArrowRightIcon size={18} />
        </Button>
      </section>
    </main>
  );
}
