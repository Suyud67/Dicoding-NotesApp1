import React from 'react';
import { Link } from 'react-router-dom';

function BtnAddPage() {
  return (
    <>
      <Link to={'/notes/add'} className="btn-add">
        Add
      </Link>
    </>
  );
}

export default BtnAddPage;
