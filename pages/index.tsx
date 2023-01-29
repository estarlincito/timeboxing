import { useRouter } from "next/router";
import Header from "../components/Header";
import Head from "next/head";
import style from "../styles/home.module.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Home = () => {
  // const router = useRouter();
  // const { timeboxing } = useContext(UserContext);

  // const handleClick = () => {
  //   router.push("/new");
  // };

  // if (timeboxing.length === 0) {
  //   return (
  //     <>
  //       <Head>
  //         <title>Timeboxing</title>
  //       </Head>

  //       <Header />
  //       <main className={style.main}>
  //         <div className={style.btn} onClick={handleClick}>
  //           <h2 className="title">Empezar</h2>
  //         </div>
  //       </main>
  //     </>
  //   );
  // } else {
  //   router.replace("/timeboxing");
  // }
};

export default Home;
