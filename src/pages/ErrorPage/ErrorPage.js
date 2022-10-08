import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h2>ErrorPage</h2>
      <p>{error.message || error.statusText}</p>
    </>
  );
}
