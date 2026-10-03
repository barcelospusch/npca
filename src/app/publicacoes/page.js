"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import {
  EditorialHero,
  FeedStatus,
  formatDate,
} from "@/components/Editorial.js";
import useJsonFeed from "@/hooks/useJsonFeed.js";
import Link from "next/link";

export default function Page() {
  const { items, loading, error } = useJsonFeed("/publicacoes.json");
  const sortedItems = [...items].sort((first, second) =>
    second.date.localeCompare(first.date),
  );

  return (
    <main className="editorial-page">
      <EditorialHero
        section="PUBLICAÇÕES"
        title="Pesquisa e conhecimento"
        description="Artigos, materiais e trabalhos produzidos pelo NPCA."
      />
      <section className="editorial-feed publication-list" aria-label="Publicações">
        <FeedStatus loading={loading} error={error} isEmpty={!items.length} />
        {sortedItems.map((item) => (
          <Link
            className="publication-card"
            href={`/publicacoes/${encodeURIComponent(item.slug)}`}
            key={item.slug}
          >
            <div className="editorial-meta">
              <span>{item.category}</span>
              <time dateTime={item.date}>{formatDate(item.date)}</time>
            </div>
            <h2>{item.title}</h2>
            <p>{item.excerpt}</p>
            <span className="publication-read">
              Ler publicação <ArrowRightIcon size={17} />
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
