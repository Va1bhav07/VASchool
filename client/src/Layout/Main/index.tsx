import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SpinnerComp } from '../../components/Spinner';

function Main() {
  // for light theme use data-bs-theme="light" bg-white text-white
  return (
    <div data-bs-theme="dark" className="min-vh-100 d-flex flex-column bg-dark">
      <Header />
      <main className="d-flex flex-column flex-grow-1 text-white">
        <Suspense fallback={<SpinnerComp className="m-auto" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
