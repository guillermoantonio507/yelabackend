// pages/_app.js
import '../styles/globals.css'  // Asegúrate que esta ruta y archivo existan o ajusta según tus estilos

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}