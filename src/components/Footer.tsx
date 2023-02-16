import style from "../styles/footer.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <footer className={style.footer}>
      <p>
        &nbsp;
        Copyright © {date.getFullYear()}&nbsp;
        <a
          href="https://linktr.ee/estarlincito"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Estarlincito
        </a>
      </p>
    </footer>
  );
};

export default Footer;
