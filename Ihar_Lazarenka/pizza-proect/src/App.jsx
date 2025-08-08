import React, { useState } from 'react';
import Header from './Header';
import MenuButton from './MenuButton';
import PizzaBuilder from './PizzaBuilder';
import About from './About';
import MapComponent from './MapComponent';
import './App.css';

function App() {
  const [section, setSection] = useState('home');

  const renderSection = () => {
    if (section === 'pizza') return <PizzaBuilder onBack={() => setSection('home')} />;
    if (section === 'about') return <About onBack={() => setSection('home')} />;
    return null;
  };

  return (
    <>
      <Header setSection={setSection} />
      <MenuButton setSection={setSection} />
      <main>
        {section === 'home' && (
          <div className="home-screen">
            <h2 className="tagline animate-fade-in">Welcome to PizzAmore</h2>            
            <MapComponent />
            <button
              className="order-btn animate-pulse"
              onClick={() => setSection('pizza')}
            >
              Сделай пиццу
            </button>
          </div>
        )}
        {renderSection()}
      </main>
    </>
  );
}

export default App;



