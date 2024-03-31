import { useTheme } from 'utils/providers/TemeProvider';
import css from './Footer.module.scss';

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <footer
      className={`${css.wrapperFooter} ${
        isDark ? css.dark : css.light
      } ${'container'}`}
    >
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
