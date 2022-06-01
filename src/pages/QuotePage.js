import React from 'react';
import Navbar from '../components/Navbar';

function QuotePage() {
  return (
    <div>
      <div className="headerCont">
        <h1>Math Magicians</h1>
        <Navbar />
      </div>
      <div className="quoteCont">
        <blockquote>
          As far as the laws of mathematics refer to reality,
          they are not certain, and as far as they are certain,
          they do not refer to reality.
        </blockquote>
        <cite>- Alber Einstein</cite>
      </div>
    </div>
  );
}

export default QuotePage;
