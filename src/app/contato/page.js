"use client"

import { ArrowRightIcon, CameraIcon, GraduationCapIcon, MeteorIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="section-number">CONTATO / NPCA</div>
        <div className="contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">ASTRONOMIA SE FAZ EM REDE</span>
            <h1>
              Vamos conversar?
              <br />
              <em>Fale com o NPCA.</em>
            </h1>
            <p>
              Dúvidas, parcerias ou interesse em participar? Nossa equipe está
              no Instagram para conversar com estudantes e instituições.
            </p>
          </div>
          <Link
            className="contact-channel"
            href="https://www.instagram.com/npca.brasil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-channel-label">
              <CameraIcon size={20} /> CANAL OFICIAL <ArrowRightIcon size={20} />
            </span>
            <strong>@npca.brasil</strong>
            <span className="contact-channel-action">Enviar uma mensagem</span>
          </Link>
        </div>
      </section>
      <section className="contact-paths">
        <div className="section-number">ENCONTRE SEU CAMINHO</div>
        <h2>
          Como podemos <em>ajudar?</em>
        </h2>
        <div className="contact-options">
          <Link href="/faca-parte#editais">
            <GraduationCapIcon />
            <span>
              <small>QUERO PARTICIPAR</small>
              Conheça o NPCA e acompanhe os editais
            </span>
            <ArrowRightIcon />
          </Link>
          <Link
            href="https://sara-npca.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MeteorIcon />
            <span>
              <small>JÁ FAÇO PARTE</small>
              Acesse a plataforma SARA-NPCA
            </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
