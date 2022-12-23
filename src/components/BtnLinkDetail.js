import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BtnLinkDetail({ id }) {
  return (
    <>
      <Link to={`/notes/detail/${id}`} className="link-detail">
        check detail note
      </Link>
    </>
  );
}

BtnLinkDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BtnLinkDetail;
