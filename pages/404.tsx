import Link from "next/link";
import style from "../styles/noFoun.module.css";

const NotFounPage = () => {
  return (
    <main className={style.main}>
      <h3 className="title">Lo sentimos…</h3>
      <p>Esta página no existe.</p>

      <div>
        <p>
          Puedes volver a <Link href="/" className="link">inicio</Link>
        </p>
      </div>
    </main>
  );
};

export default NotFounPage;
