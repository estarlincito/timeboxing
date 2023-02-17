import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import style from "../styles/form.module.css";

const Form = () => {
  const { postTB } = useContext(UserContext);
  const router = useRouter();

  const [name, setName] = useState("");
  const [obj, setObj] = useState("");
  const [duration, setDuration] = useState("02:00:00");
  const [type, setType] = useState("fijo");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    //add new Timeboxing
    postTB(name, obj, duration, type);

    //clean inputs
    setName("");
    setObj("");
    setDuration("");
    setType("");

    //back to home
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h3 className="title">
        <Link className="link" href="/new">
          Crear Timeboxing
        </Link>
      </h3>

      <label>Nombre</label>
      <input
        type="text"
        value={name}
        maxLength={300}
        autoFocus
        placeholder="Escribe el nombre"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Objtivo</label>
      <textarea
        value={obj}
        maxLength={1500}
        placeholder="Escribe el objtivo"
        onChange={(e) => setObj(e.target.value)}
        required
      ></textarea>

      <label>Duración</label>
      <input
        className={style.tiempo_input}
        type="time"
        value={duration}
        onChange={(e) => setDuration(e.target.value + ":00")}
        required
      />

      <label>Tipo de Bloque</label>
      <select
        className={style.bloque_select}
        onChange={(e) => setType(e.target.value)}
        required
      >
        <option value="fijo">fijo</option>
        <option value="flexible">flexible</option>
      </select>

      <button className="btn">Añadir</button>
    </form>
  );
};

export default Form;
