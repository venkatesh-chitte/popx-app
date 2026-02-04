import { useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';

const theme = extendTheme({
  colors: {
    brand: {
      500: '#7C3AED',
      400: '#A78BFA',
      300: '#C4B5FD',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
});

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userData, setUserData] = useState(null);

  const handleLogin = (email, password) => {
    // Store login user data
    setUserData({
      email: email,
      name: email.split('@')[0], // Extract name from email
      source: 'login'
    });
    setCurrentPage('profile');
  };

  const handleSignup = (formData) => {
    // Store signup user data
    setUserData({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phoneNumber,
      company: formData.companyName,
      isAgency: formData.isAgency,
      source: 'signup'
    });
    setCurrentPage('profile');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} onLogin={handleLogin} />;
      case 'signup':
        return <SignupPage onNavigate={setCurrentPage} onSignup={handleSignup} />;
      case 'profile':
        return <ProfilePage onNavigate={setCurrentPage} userData={userData} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return <ChakraProvider theme={theme}>{renderPage()}</ChakraProvider>;
}