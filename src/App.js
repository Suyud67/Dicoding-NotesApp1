import React from 'react';
import Homepage from './pages/Homepage';
import AddNotePage from './pages/AddNotePage';
import DetailPage from './pages/DetailPage';
import ArchivedPage from './pages/ArchivedPage';
import ErrorPage from './pages/ErrorPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/notes/add" element={<AddNotePage />}></Route>
      <Route path="/notes/detail/:id" element={<DetailPage />}></Route>
      <Route path="/notes/arsip" element={<ArchivedPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
