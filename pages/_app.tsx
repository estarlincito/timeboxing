import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ContextPrivider from "../context/ContextProvider";

import "../styles/app.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextPrivider>
      <div className="groupers">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ContextPrivider>
  );
};

export default App;
