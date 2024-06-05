import React from "react";

function SignupLink({ type }) {
  return (
    <>
      <hr className="hr my-4" />
      <p className="text-center">
        {type === "signin"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        <a
          className="link-opacity-75"
          href={type === "signin" ? "/signup" : "/login"}
        >
          {type === "signin" ? "Sign Up" : "Login"}
        </a>
      </p>
    </>
  );
}

export default SignupLink;
