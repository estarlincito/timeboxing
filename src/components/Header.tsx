import style from "../styles/header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className="title">
        <Link href="/" className="link">
          Timeboxing
        </Link>
      </h1>
      <p className="text">
        El &nbsp;
        <Link
          className="link"
          href="https://lamenteesmaravillosa.com/timeboxing/"
          target="_blank"
        >
          Timeboxing
        </Link>
        &nbsp; es una estrategia de gestión del tiempo que se basa en el diseño
        de bloques de tiempo y se orienta al logro de objetivos definidos. Se
        aplica para elevar la productividad y evitar la procrastinación. A
        veces, los microcompromisos o las tareas más triviales llegan a ocupar
        hasta el 60 % del tiempo laboral. Esto resta eficiencia y termina
        generando más fatiga de la que debiera. Para más información lee la
        &nbsp;
        <Link className="link" href="/doc">
          documentación
        </Link>
        .
      </p>
    </header>
  );
};

export default Header;
