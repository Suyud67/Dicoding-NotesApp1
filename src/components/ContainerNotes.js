import React from 'react';
import NoteList from './NoteList';
import PropTypes from 'prop-types';

function ContainerNotes({ notes }) {
  return (
    <div className="container-notes">
      <div className="header">
        <h2>My Notes</h2>
      </div>
      <NoteList notes={notes} />
    </div>
  );
}

ContainerNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContainerNotes;
