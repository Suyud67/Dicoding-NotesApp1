import React from 'react';
import { archiveNote } from '../data/local-data';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function BtnArchive({ id }) {
  const navigate = useNavigate();

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href={`/notes/note/archive/${id}`}
      onClick={(e) => {
        e.preventDefault();
        if (window.confirm(`are you sure you want archive this note?`)) {
          archiveNote(id);
          navigate('/notes/arsip');
        } else {
          return false;
        }
      }}
      id="btn-arsip"
    >
      Archive
    </a>
  );
}

BtnArchive.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BtnArchive;
