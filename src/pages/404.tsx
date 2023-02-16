import Head from "next/head";
import Link from "next/link";
import style from "../styles/noFounPage.module.css";

const NotFounPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>

      <main className={style.main}>
        <h3 className="title">Lo sentimos…</h3>
        <p>Esta página no existe.</p>

        <div>
          <p>
            Puedes volver a&nbsp;
            <Link href="/" className="link">
              inicio
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default NotFounPage;
