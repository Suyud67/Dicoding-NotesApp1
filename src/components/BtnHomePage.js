import React from 'react';
import { Link } from 'react-router-dom';

function BtnHomePage() {
  return (
    <>
      <Link to={'/'} className="btn-home">
        Home
      </Link>
    </>
  );
}

export default BtnHomePage;
