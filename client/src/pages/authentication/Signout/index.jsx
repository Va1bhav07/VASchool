import React from 'react';
import CardComp from '../../../components/Cards';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SignOut() {
  const signOutEvent = () => {
    // write log out code
    console.log('log out');
  };
  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp className="mt-5 card-comp p-4">
        <Card.Title className="text-center fs-2 mb-4">
          Do you want to log out
        </Card.Title>
        <Button className="w-100" onClick={signOutEvent}>
          Log out
        </Button>
      </CardComp>
    </section>
  );
}

export default SignOut;
