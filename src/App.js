import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Pages/SignUp';
import SignIn from './Pages/SignIn';

function App() {
  return (
      <div>
        <Routes>
          {/* Define the route for the signup page */}
          <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />


        </Routes>
      </div>
  );
}

export default App;
