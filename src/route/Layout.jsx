import { Outlet } from 'react-router-dom';
import Heder from 'modules/Heder/Heder';

const Layout = () => {
  return (
    <>
      <header>
        <Heder />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
