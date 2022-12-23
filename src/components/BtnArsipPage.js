import React from 'react';
import { Link } from 'react-router-dom';

function ArchiveBtn() {
  return (
    <>
      <Link to={'/notes/arsip'} className="btn-arsip">
        archive
      </Link>
    </>
  );
}

export default ArchiveBtn;
