import { useTheme } from '../../utils/providers/TemeProvider';
import { themeIcons } from '../../assete/png/index';
import css from './Heder.module.scss'

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className={css.imgTheme}>
      <img
       
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        height={30}
        alt="theme"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeButton;
