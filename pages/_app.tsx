import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ContextPrivider from "../context/ContextProvider";
import useUnsavedChangesWarning from "../hooks/useUnsavedChangesWarning";

import "../styles/app.css";

const App = ({ Component, pageProps }: AppProps) => {
  //if timeboxing is run and router changed
  useUnsavedChangesWarning();
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
