import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';

import Layout from './Layout';

const Footer = lazy(() => import('modules/Footer/Footer'));
const BooksPage = lazy(() => import('pages/BooksPage'));
const SingInPage = lazy(() => import('pages/SingInPage'));
const OneBookPage = lazy(() => import('pages/OneBookPage'));
const CartPage = lazy(() => import('pages/CartPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const PublicRoute = lazy(() => import('./PublicRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));

const SharedLayout = () => {
  const getUserLocalStorage = () => {
    const storedData = localStorage.getItem('userLogin');
    return storedData ? JSON.parse(storedData) : null;
  };
  const [stateLogin, setStateLogin] = useState(getUserLocalStorage);

  useEffect(() => {
    localStorage.setItem('userLogin', JSON.stringify(stateLogin));
  }, [stateLogin]);

  const handleLogin = data => {
    setStateLogin(data);
  };
  const handleLogOut = () => {
    setStateLogin(null);
    localStorage.removeItem('userLogin');
  };

  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route
          path="/"
          element={<Layout stateLogin={stateLogin} onLogout={handleLogOut} />}
        >
          <Route index element={<Navigate to="/singin" />} />
          <Route element={<PublicRoute stateLogin={stateLogin} />}>
            <Route
              path="/singin"
              element={<SingInPage onSubmit={handleLogin} />}
            />
          </Route>
          <Route element={<PrivateRoute stateLogin={stateLogin} />}>
            <Route path="/books" element={<BooksPage />} />
            <Route path="/book/:id" element={<OneBookPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
};
export default SharedLayout;
