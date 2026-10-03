import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "NPCA — Núcleo de Pesquisa e Caça de Asteroides",
  description:
    "Núcleo de Pesquisa e Caça de Asteroides: astronomia, ciência cidadã e formação científica estudantil.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
