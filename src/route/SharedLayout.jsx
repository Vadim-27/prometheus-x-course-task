import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout';

const Footer = lazy(() => import('modules/Footer/Footer'));
const BooksPage = lazy(() => import('pages/BooksPage'));
const SingInPage = lazy(() => import('pages/SingInPage'));
const OneBookPage = lazy(() => import('pages/OneBookPage'));
const CartPage = lazy(() => import('pages/CartPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const SharedLayout = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/singin" />} />
          <Route path="/singin" element={<SingInPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<OneBookPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
};
export default SharedLayout;
