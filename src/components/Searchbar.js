import React from 'react';
import PropTypes from 'prop-types';

function Searchbar({ eventSearch }) {
  return (
    <>
      <input
        type="text"
        name="search"
        id="search-note"
        placeholder="Search Note..."
        onChange={(e) => {
          eventSearch(e.target.value);
        }}
      />
    </>
  );
}

Searchbar.propTypes = {
  eventSearch: PropTypes.func.isRequired,
};

export default Searchbar;
