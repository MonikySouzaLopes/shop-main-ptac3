import Footer from "./componentes/Footer"
import Header from "./componentes/Header"

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};
//O layout é o pai de todas as page.js, onde seu parâmetro é o children
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
