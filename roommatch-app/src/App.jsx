import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Lazily load pages to help with debugging
const Home = React.lazy(() => import('./pages/Home'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Messages = React.lazy(() => import('./pages/Messages'));

function App() {
  const [isError, setIsError] = useState(false);
  
  if (isError) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Something went wrong</h1>
        <p>There was an error loading the application. Please check the console for details.</p>
        <button onClick={() => window.location.reload()}>Reload App</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <React.Suspense fallback={<div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App; 