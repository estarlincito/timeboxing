import Head from "next/head";
import Form from "../components/Form";
import style from "../styles/newPage.module.css";

const NewPage = () => {
  return (
    <>
      <Head>
        <title>Timeboxing | New</title>
      </Head>

      <main className={style.main}>
        <Form />
      </main>
    </>
  );
};

export default NewPage;
