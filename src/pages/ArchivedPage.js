import React from 'react';
import ArchivedList from '../components/ArchivedList';
import BtnHomePage from '../components/BtnHomePage';
import { getArchivedNotes } from '../data/local-data';

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNotes: getArchivedNotes(),
    };
  }
  render() {
    return (
      <>
        <BtnHomePage />
        <div className="container-unchivedNotes">
          <div className="header">
            <h3>Archived Notes</h3>
          </div>
          <ArchivedList notes={this.state.archivedNotes} />
        </div>
      </>
    );
  }
}

export default ArchivedPage;
