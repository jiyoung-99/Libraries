import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Error from './pages/Error';

function App() {
  return(
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/book/:id" element={<Detail/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route element={NotFound}/>
        </Routes>
        </BrowserRouter>
      </ErrorBoundary>
  );
}

export default App;
