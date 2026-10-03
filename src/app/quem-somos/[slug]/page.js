"use client";

import { StarIcon } from "@phosphor-icons/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { notFound } from "next/navigation";
import { organizationalUnits } from "../../../data/organizationalUnits.js";
import { use } from "react";

export default function OrganizationalUnitPage({ params }) {
  const { slug } = use(params);
  const unit = organizationalUnits.find((item) => item.slug === slug);

  if (!unit) notFound();

  const isDirectorate = unit.type === "Diretoria";

  return (
    <main className="unit-page">
      <section className="unit-hero">
        <Link className="unit-back" href="/quem-somos#estrutura">
          <ArrowLeftIcon size={18} /> Todas as diretorias e programas
        </Link>
        <div className="section-number">NPCA / {unit.type.toUpperCase()}</div>
        <h1>{unit.title}</h1>
      </section>
      <section className="unit-content">
        <article className="unit-section">
          <div className="section-number">01 / APRESENTAÇÃO</div>
          <div>
            <h2>{unit.introductionLabel}</h2>
            <p className="unit-placeholder">{unit.introductionPlaceholder}</p>
          </div>
        </article>
        <article className="unit-section">
          <div className="section-number">
            02 / {isDirectorate ? "ATRIBUIÇÕES" : "ATUAÇÃO"}
          </div>
          <div>
            <h2>{unit.detailsLabel}</h2>
            <p className="unit-placeholder">{unit.detailsPlaceholder}</p>
          </div>
        </article>
        {isDirectorate && (
          <article className="unit-section unit-members">
            <div className="section-number">03 / EQUIPE</div>
            <div>
              <h2>Membros</h2>
              <div className="about-activity-list">
                {unit.members?.map(({ name, description, url }) => (
                  <article className="about-activity" key={name}>
                    <StarIcon
                      size={18}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                    <p>
                      <strong>
                        {url ? (
                          <a
                            className="about-activity-link"
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {name}
                          </a>
                        ) : (
                          name
                        )}
                        :
                      </strong>{" "}
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </article>
        )}
      </section>
      {isDirectorate ? (
        <section className="unit-resource" id="regimento">
          <div>
            <div className="section-number">DOCUMENTO INSTITUCIONAL</div>
            <h2>Regimento interno</h2>
          </div>
          {unit.regimentoHref ? (
            <a
              className="btn black"
              href={unit.regimentoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar o PDF do regimento interno <ArrowRightIcon size={18} />
            </a>
          ) : (
            <span
              className="btn black unit-resource-pending"
              aria-disabled="true"
            >
              PDF do regimento interno
            </span>
          )}
        </section>
      ) : (
        <section className="unit-join">
          <div>
            <div className="section-number">PARTICIPE DO NPCA</div>
            <h2>Quer fazer parte deste programa?</h2>
          </div>
          <Link className="btn yellow" href="/faca-parte#editais">
            Acessar editais <ArrowRightIcon size={18} />
          </Link>
        </section>
      )}
    </main>
  );
}
