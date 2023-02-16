import style from "../styles/timeboxingPage.module.css";
import Link from "next/link";
import Head from "next/head";
import Card from "./Card";
import { BsPencilSquare } from "react-icons/bs";
import { useRouter } from "next/router";
import timeboxingTS from "../types/timeboxingTS";

type props = {
  timeboxing: timeboxingTS[];
};

const TimeboxingPage = ({ timeboxing }: props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/new");
  };

  return (
    <>
      <Head>
        <title>Timeboxing</title>
      </Head>

      <main className={style.main}>
        <h3 className="title">
          <Link className="link" href="/">
            TimeBoxing
          </Link>
        </h3>

        <section className={style.results}>
          {timeboxing.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              obj={item.obj}
              duration={item.duration}
              init_time={item.init_time}
              end_time={item.end_time}
              type={item.type}
              id={item.id}
              statu={item.statu}
            />
          ))}
        </section>

        <button className="btn" onClick={handleClick}>
          <BsPencilSquare />
        </button>
      </main>
    </>
  );
};

export default TimeboxingPage;
