import { useRouter } from "next/router";
import Header from "../components/Header";
import Head from "next/head";
import style from "../styles/home.module.css";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/new");
  };

  return (
    <>
      <Head>
        <title>Timeboxing</title>
      </Head>

      <Header />
      <main className={style.main}>
        <div className={style.btn} onClick={handleClick}>
          <h2 className="title">Empezar</h2>
        </div>
      </main>
    </>
  );
};

export default Home;
