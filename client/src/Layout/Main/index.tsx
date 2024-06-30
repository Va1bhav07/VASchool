import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { SpinnerComp } from '../../components/Spinner';

type MainContainerProps = {
  children: React.ReactNode;
};

function MainContainer({ children }: MainContainerProps) {
  const location = useLocation();
  const isMyAccount = location.pathname === '/myaccount';
  if (isMyAccount) {
    return (
      <Suspense
        fallback={
          <div className="min-vh-100 d-flex bg-dark text-white">
            <SpinnerComp className="m-auto" />
          </div>
        }>
        {children}
      </Suspense>
    );
  }
  return (
    <div data-bs-theme="dark" className="min-vh-100 d-flex flex-column bg-dark">
      <Header />
      <main className="d-flex flex-column flex-grow-1 text-light">
        <Suspense fallback={<SpinnerComp className="m-auto" />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default MainContainer;
