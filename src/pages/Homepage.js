import React from 'react';
import ContainerHeader from '../components/ContainerHeader';
import ContainerNotes from '../components/ContainerNotes';
import BtnAddPage from '../components/BtnAddPage';
import { getActiveNotes } from '../data/local-data';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomepageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeParams(keyword) {
    setSearchParams({ keyword });
  }

  return <Homepage keywordParams={keyword} keywordChange={changeParams} />;
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.keywordParams || '',
    };

    this.eventSearch = this.eventSearch.bind(this);
  }

  eventSearch(input) {
    this.setState({ keyword: input });

    this.props.keywordChange(input);
  }

  render() {
    const { notes, keyword } = this.state;
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

    return (
      <>
        <ContainerHeader eventSearch={this.eventSearch} />
        <ContainerNotes notes={filteredNotes} />
        <BtnAddPage />
      </>
    );
  }
}

Homepage.propTypes = {
  keywordParams: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomepageWrapper;
