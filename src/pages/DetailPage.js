import React from 'react';
import DetailNote from '../components/DetailNote';
import BtnHomePage from '../components/BtnHomePage';
import { useParams } from 'react-router-dom';
import { getNote } from '../data/local-data';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage idNote={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.idNote),
    };
  }

  render() {
    return (
      <>
        <BtnHomePage />
        <DetailNote {...this.state.note} />
      </>
    );
  }
}

DetailPage.propTypes = {
  idNote: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
