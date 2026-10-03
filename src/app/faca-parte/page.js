"use client"

import {
  ArrowRightIcon,
  EnvelopeIcon,
  GraduationCapIcon,
  MegaphoneSimpleIcon,
  MeteorIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const opportunities = [
  {
    icon: MeteorIcon,
    title: "Diretoria de Orientação",
    description:
      "Coordena as pesquisas, treinamentos e atividades relacionadas à caça de asteroides e à produção científica.",
  },
  {
    icon: GraduationCapIcon,
    title: "Diretoria de Capacitação",
    description:
      "Organiza cursos, workshops, palestras e programas de formação, além de produzir materiais de estudo para os membros da equipe.",
  },
  {
    icon: MegaphoneSimpleIcon,
    title: "Diretoria de Comunicação",
    description:
      "Cuida da comunicação institucional, das mídias sociais e dos eventos, além de revisar e publicar produções científicas.",
  },
];

export default function Page() {
  return (
    <main className="join-page">
      <section className="join-hero">
        <div className="section-number">FAÇA PARTE / NPCA</div>
        <h1>
          Faça parte do NPCA,
          <br />
          <em>contribua para a ciência brasileira</em>
        </h1>
      </section>
      <section className="join-notice" id="editais">
        <div>
          <span className="tag">EDITAIS DISPONÍVEIS</span>
          <h2>O próximo passo começa aqui.</h2>
          <p>Nenhum edital disponível ainda.</p>
        </div>
        <Link
          className="btn black"
          href="mailto:npca.brasil@gmail.com?subject=Editais%20do%20NPCA"
        >
          Falar sobre editais <EnvelopeIcon size={18} />
        </Link>
      </section>
      <section className="join-roles" id="vagas">
        <div className="section-number">FAÇA PARTE DA NOSSA EQUIPE</div>
        <h2>
          Oferecemos vagas <em>para:</em>
        </h2>
        <div className="join-role-grid">
          {opportunities.map(({ icon: Icon, title, description }, index) => (
            <article className="join-role" key={title}>
              <div className="join-role-index">0{index + 1}</div>
              <div className="icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="join-email">
        <div>
          <div className="section-number">VENHA CONSTRUIR COM A GENTE</div>
          <h2>Faça parte do time NPCA.</h2>
        </div>
        <Link href="mailto:npca.brasil@gmail.com">
          <EnvelopeIcon size={18} /> npca.brasil@gmail.com{" "}
          <ArrowRightIcon size={18} />
        </Link>
      </section>
    </main>
  );
}
