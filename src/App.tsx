import { createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './pages/Home';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import TunnelDodge from './pages/TunnelDodge';
import TunnelDodgePrivacyPolicy from './pages/TunnelDodgePrivacyPolicy';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'tunnel-dodge',
        element: <TunnelDodge />,
      },
      {
        path: 'terms-of-use',
        element: <TermsOfUse />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'tunnel-dodge-privacy-policy',
        element: <TunnelDodgePrivacyPolicy />,
      },
    ],
  },
]);
