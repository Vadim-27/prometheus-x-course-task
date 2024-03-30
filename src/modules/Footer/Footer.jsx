import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${css.wrapperFooter} ${'container'}`}>
      <a
        className={css.footerLink}
        href="https://prometheus.org.ua/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Виконано в Prometheus © 2022
      </a>
    </footer>
  );
};
export default Footer;
