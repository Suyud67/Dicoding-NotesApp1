import React from 'react';
import { unarchiveNote } from '../data/local-data';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function BtnUndo({ id }) {
  const navigate = useNavigate();

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href={`/notes/note/restore/${id}`}
      onClick={(e) => {
        e.preventDefault();
        unarchiveNote(id);
        navigate('/');
      }}
      id="btn-undo"
    >
      Undo
    </a>
  );
}

BtnUndo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BtnUndo;
