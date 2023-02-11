import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const router = useRouter();

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
