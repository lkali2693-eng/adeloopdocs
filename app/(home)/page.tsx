import React from 'react';
import LandingPage from './LandingPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-green-500/30">
      <LandingPage />
    </div>
  );
};

export default App;
