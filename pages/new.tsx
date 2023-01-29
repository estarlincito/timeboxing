import Head from "next/head";
import Link from "next/link";
import Form from "../components/Form";
import style from "../styles/new.module.css";

const NewPage = () => {
  return (
    <>
      <Head>
        <title>Timeboxing | New</title>
      </Head>

      <main className={style.main}>
        <Link className="title link" href="/new">
          Crea un Timeboxing
        </Link>
        <Form />
      </main>
    </>
  );
};

export default NewPage;
