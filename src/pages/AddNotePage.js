import React from 'react';
import FormAddNote from '../components/FormAddNote';
import BtnHomePage from '../components/BtnHomePage';
import { addNote } from '../data/local-data';
import { useNavigate } from 'react-router-dom';

function AddNotePage() {
  const navigate = useNavigate();

  function handleAddNote(note) {
    addNote(note);
    window.alert('Successful to add note');

    navigate('/');
  }

  return (
    <>
      <BtnHomePage />
      <div className="container-form">
        <div className="header">
          <h2>Form Add Note</h2>
        </div>
        <FormAddNote addNote={handleAddNote} />
      </div>
    </>
  );
}

export default AddNotePage;
