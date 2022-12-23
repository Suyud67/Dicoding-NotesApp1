import React from 'react';
import Searchbar from './Searchbar';
import ArchiveBtn from './BtnArsipPage';
import PropTypes from 'prop-types';

function NavbarSection({ eventSearch }) {
  return (
    <div className="navbar-section">
      <Searchbar eventSearch={eventSearch} />
      <ArchiveBtn />
    </div>
  );
}

NavbarSection.propTypes = {
  eventSearch: PropTypes.func.isRequired,
};

export default NavbarSection;
