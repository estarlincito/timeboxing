import { useRouter } from "next/router";
import Header from "../components/Header";
import Head from "next/head";
import style from "../styles/homePage.module.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import TimeboxingPage from "../components/Timeboxing";

const HomePage = () => {
  const router = useRouter();
  const { timeboxing } = useContext(UserContext);

  const handleClick = () => {
    router.push("/new");
  };

  if (timeboxing.length === 0) {
    return (
      <>
        <Head>
          <title>Timeboxing</title>
        </Head>

        <Header />
        <main className={style.main}>
          <button className="btn" onClick={handleClick}>
            Empezar
          </button>
        </main>
      </>
    );
  } else {
    return <TimeboxingPage timeboxing={timeboxing} />;
  }
};

export default HomePage;
