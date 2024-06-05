import React, { Suspense } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import { SpinnerComp } from "../../components/Spinner";

function Main({ children }) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Container className="d-flex flex-column flex-grow-1">
        <Suspense fallback={<SpinnerComp className="m-auto" />}>
          {children}
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default Main;
