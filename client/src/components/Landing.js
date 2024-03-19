import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track the index of the currently hovered item
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 }); // State to track the mouse cursor position for gradient effect

  // Event handler when mouse enters a list item
  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the index of the hovered item
  };

  // Event handler when mouse leaves a list item
  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset the hovered index when mouse leaves any list item
  };

  // Event handler to track mouse movement for gradient effect
  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    setGradientPosition({ x, y });
  };

  // List of benefits
  const benefits = [
    { title: 'Automated Expense Tracking', excerpt: 'Let our AI auto-matically track your expenses and categorize them for you.' },
    { title: 'Smart Budget Thoughts', excerpt: 'Get customized budget tips based on your spending habits and financial goals.' },
    { title: 'Personalized Financial Insights', excerpt: 'Gain valuable insights into your spending patterns and financial health with personalized reports.' },
    { title: 'Expense Category Suggestions', excerpt: 'Get suggestions for optimizing your expense categories to better manage your budget.' },
    { title: 'Real-time Spending Alerts', excerpt: 'Receive instant alerts and notifications to assist you in staying within your budget and avoiding over-spending.' },
  ];

  return (
    <div className="background" onMouseMove={handleMouseMove}>
      <div className='mouse-capture' style={{ '--x': `${gradientPosition.x}px`, '--y': `${gradientPosition.y}px` }}>
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
                  <div className="ben-title">{hoveredIndex === index ? benefit.excerpt : benefit.title}</div> {/* Display excerpt if hovered over, otherwise display title */}
                  <div className='ben-excerpt'></div>
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


