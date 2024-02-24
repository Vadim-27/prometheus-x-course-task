import { Outlet } from 'react-router-dom';
import Heder from 'modules/Heder/Heder';

const Layout = ({ stateLogin, onLogout }) => {
  return (
    <>
      <header>
        <Heder stateLogin={stateLogin} onLogout={onLogout} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
