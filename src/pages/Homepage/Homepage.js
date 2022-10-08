import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Homepage() {
  const recipes = useLoaderData();

  return (
    <>
      <h2>Homepage</h2>
      <ul>{recipes && recipes.map((r) => <li key={r._id}>{r.title}</li>)} </ul>
    </>
  );
}
