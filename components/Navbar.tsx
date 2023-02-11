import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const { timeboxing } = useContext(UserContext);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={router.pathname === "/" ? `${styles.active}` : ""}>
          <Link href="/">Timeboxing</Link>
        </li>

        <li className={router.pathname === "/doc" ? `${styles.active}` : ""}>
          <Link href="/doc">Documentación</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
