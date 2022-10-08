import React from 'react';
import { NavLink, Outlet, useParams, useSearchParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();

  return (
    <>
      <ul className="d-flex p-20">
        <li>
          <NavLink end to="">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="data">Data</NavLink>
        </li>
      </ul>
      <div className="p-20">
        <h2 className="mb-20">Profile</h2>
        <Outlet />
      </div>
    </>
  );
}
