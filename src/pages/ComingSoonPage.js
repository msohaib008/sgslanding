import '../pages/ComingSoonPage.css';
import React from 'react';
import logo from '../logo.jpg';

function ComingSoonPage() {
  return (
    <div className="coming-soon-page">
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1>Tulossa pian!</h1>
          <h2 style={{ textAlign: 'center', color: 'white' }}>SGS palvelu pelioikeuksien varamiseen ja mobiilijäsenkorttiin avautuu tänne pian.</h2>
          <h2 style={{ textAlign: 'center', color: 'white' }}>Pysy kuulolla.</h2>
        </div>
      </header>
      <main>
      </main>
    </div>
  );
}

export default ComingSoonPage;
