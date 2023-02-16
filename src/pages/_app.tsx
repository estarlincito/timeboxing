import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContextPrivider from "../context/ContextProvider";

import "../styles/app.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextPrivider>
      <div className="groupers">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ContextPrivider>
  );
};

export default App;
