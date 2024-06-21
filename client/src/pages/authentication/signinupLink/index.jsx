import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function SignupLink({ type }) {
  return (
    <>
      <hr className="hr my-4" />
      <p className="text-center">
        {type === 'signin'
          ? "Don't have an account?"
          : 'Already have an account?'}{' '}
        <Link
          to={type === 'signin' ? '/signup' : '/login'}
          className="link-opacity-75">
          {type === 'signin' ? 'Sign Up' : 'Login'}
        </Link>
      </p>
    </>
  );
}

export default SignupLink;
