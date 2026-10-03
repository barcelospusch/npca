"use client";

import { useEffect, useState } from "react";

export default function useJsonFeed(source) {
  const [feed, setFeed] = useState({ items: [], loading: true, error: false });

  useEffect(() => {
    const controller = new AbortController();

    fetch(source, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Falha ao carregar o conteúdo");
        return response.json();
      })
      .then((items) => {
        if (!Array.isArray(items)) throw new Error("Formato JSON inválido");
        setFeed({ items, loading: false, error: false });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setFeed({ items: [], loading: false, error: true });
        }
      });

    return () => controller.abort();
  }, [source]);

  return feed;
}
