import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import ListAllTask from './component/ListAllTask';
import CreateTask from './component/CreateTask';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <HeaderComponent />
        <main>
          <Routes>
            <Route path='/' element={<ListAllTask />} />
            <Route path='/tasks' element={<ListAllTask />} />
            <Route path='/add-tasks' element={<CreateTask />} />
            <Route path='/edit-tasks/:id' element={<CreateTask />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
