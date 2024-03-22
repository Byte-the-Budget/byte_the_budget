import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // State to track the index of the currently hovered item
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  // Event handler when mouse enters a list item
  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the index of the hovered item
  };

  // Event handler when mouse leaves a list item
  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset the hovered index when mouse leaves any list item
  };

  // List of benefits
  const benefits = [
    { title: 'Automate Expense Tracking', excerpt: 'Let our AI auto-matically track your expenses and categorize them for you.' },
    { title: 'Smart Budget Thoughts', excerpt: 'Get custom budget tips based on your spending habits and financial goals.' },
    { title: 'Personal Financial Insights', excerpt: 'Gain valuable insights into your spending patterns and financial health with detailed personal reports.' },
    { title: 'Expense Category Help', excerpt: 'Let our AI suggest options for optimizing your expense categories to better manage your budget.' },
    { title: 'Real-time Spending Alerts', excerpt: 'Receive instant alerts to notify and assist you in staying within your budget and avoiding over-spending.' },
  ];

  return (
    <div className="background">
      <div className='mouse-capture'>
        <div className="container">
          <h1 className="main-title">Byte the Budget</h1>
          <p className="subtitle">AI-Assisted Budgeting Made Easy</p>
          <button className="button">Get Started</button>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="fade-in"
                onMouseEnter={() => handleMouseEnter(index)} 
                onMouseLeave={handleMouseLeave} 
              >
                <div className='bullet-container'>
                  <div className={`ben-title animated-text ${hoveredIndex ? 'hovered' : ''}`}>{hoveredIndex === index ? benefit.excerpt : benefit.title}</div> {/* Display excerpt if hovered over, otherwise display title */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


