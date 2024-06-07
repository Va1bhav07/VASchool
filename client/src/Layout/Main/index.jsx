import React, { Suspense } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { SpinnerComp } from "../../components/Spinner";

function Main({ children }) {
  // for light theme use data-bs-theme="light" bg-white text-white
  return (
    <div data-bs-theme="dark" className="min-vh-100 d-flex flex-column bg-dark">
      <Header />
      <main className="d-flex flex-column flex-grow-1 text-white">
        <Suspense fallback={<SpinnerComp className="m-auto" />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
