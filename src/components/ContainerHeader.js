import React from 'react';
import NavbarSection from './SectionNav';
import PropTypes from 'prop-types';

function ContainerHeader({ eventSearch }) {
  return (
    <header>
      <div className="logo">
        <h1>NotesApp</h1>
      </div>
      <NavbarSection eventSearch={eventSearch} />
    </header>
  );
}

ContainerHeader.propTypes = {
  eventSearch: PropTypes.func.isRequired,
};

export default ContainerHeader;
