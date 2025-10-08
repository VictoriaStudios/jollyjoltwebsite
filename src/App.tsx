import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './pages/Home';
import Games from './pages/Games';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import ExampleGame from './pages/ExampleGame';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="games/example-game" element={<ExampleGame />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;