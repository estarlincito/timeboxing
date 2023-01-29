import style from "../styles/timeboxing.module.css";
import Link from "next/link";
import Head from "next/head";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import Card from "../components/Card";
import { BsPencilSquare } from "react-icons/bs";
import { useRouter } from "next/router";

const Timeboxing = () => {
  const router = useRouter();
  const { timeboxing } = useContext(UserContext);

  const handleClick = () => {
    router.push("/new");
  };

  return (
    <>
      <Head>
        <title>Timeboxing</title>
      </Head>

      <main className={style.main}>
        <Link className="title link" href="/timeboxing">
          TimeBoxing
        </Link>

        <section>
          {timeboxing.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              obj={item.obj}
              duration={item.duration}
              end_time={item.end_time}
              type={item.type}
              id={item.id}
              statu={item.statu}
            />
          ))}
        </section>

        <div className={style.btn} onClick={handleClick}>
          <BsPencilSquare />
        </div>
      </main>
    </>
  );
};

export default Timeboxing;
