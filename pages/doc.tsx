import style from "../styles/doc.module.css";
import Link from "next/link";
import Head from "next/head";

const DocPage = () => {
  return (
    <>
      <Head>
        <title>Timeboxing | Doc</title>
      </Head>

      <main className={style.main}>
        <Link className="title link" href="/doc">
          Documentación
        </Link>

        <section className={style.estrategias}>
          <h2 className="subtitle">Estrategias</h2>
          <li className="text">
            Es necesario definir un timebox o bloque de tiempo. Durante ese
            lapso se debe realizar solo una tarea o un grupo de tareas asociadas
            entre sí.
          </li>
          <li className="text">
            Cada timebox debe tener un objetivo. En el timeboxing se trabaja por
            objetivos, así que se debe definir uno muy preciso para cada bloque
            de tiempo.
          </li>
          <li className="text">
            Al finalizar el timebox debe interrumpirse la tarea. Inmediatamente
            después, determinar si el objetivo se logró, y, en caso negativo,
            identificar la causa.
          </li>

          <br />
          <h2 className="subtitle">Bloques</h2>
          <li className="text">
            Bloque de tiempo fijo. Es inamovible; esto quiere decir que al
            término del bloque sí o sí se debe interrumpir la tarea, sin
            importar el estado en que se encuentre.
          </li>
          <li className="text">
            Bloque de tiempo flexible. En este caso es posible aumentar en 10 o
            15 minutos el bloque de tiempo, hasta que se le dé un cierre a lo
            que se esté haciendo.
          </li>
        </section>
      </main>
    </>
  );
};

export default DocPage;
