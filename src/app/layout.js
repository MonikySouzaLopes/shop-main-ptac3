import Footer from "./componentes/Footer"
import Header from "./componentes/Header"

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <br/>
        {children}
        <br/>
        <Footer/>
      </body>
    </html>
  );
}
