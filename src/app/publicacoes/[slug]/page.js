"use client";

import {
  FeedStatus,
  formatDate,
  PublicationBlock,
  PublicationNotFound,
} from "@/components/Editorial.js";
import useJsonFeed from "@/hooks/useJsonFeed.js";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const { items, loading, error } = useJsonFeed("/publicacoes.json");
  const publication = items.find((item) => item.slug === params.slug);

  return (
    <main className="editorial-page">
      <FeedStatus loading={loading} error={error} isEmpty={false} />
      {!loading && !error && !publication && <PublicationNotFound />}
      {publication && !loading && !error && (
        <article className="publication-detail">
          <Link className="publication-back" href="/publicacoes">
            <ArrowLeftIcon size={17} /> Todas as publicações
          </Link>
          <header className="publication-heading">
            <div className="editorial-meta">
              <span>{publication.category}</span>
              <time dateTime={publication.date}>{formatDate(publication.date)}</time>
            </div>
            <h1>{publication.title}</h1>
            <p className="publication-excerpt">{publication.excerpt}</p>
            <p className="publication-author">Por {publication.author}</p>
          </header>
          <div className="publication-prose">
            {publication.content.map((block) => (
              <PublicationBlock
                key={`${block.type}-${block.text || block.items?.[0]}`}
                block={block}
              />
            ))}
          </div>
        </article>
      )}
    </main>
  );
}
