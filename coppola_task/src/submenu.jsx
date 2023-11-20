import React, { useState } from 'react';

function Submenu() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const toggleListHeight1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleListHeight2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleListHeight3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const toggleListHeight4 = () => {
    setIsExpanded4(!isExpanded4);
  };
  const toggleListHeight5 = () => {
    setIsExpanded5(!isExpanded5);
  };
 
  return (
    <div className="header_nav_submenu">
      <div className="submenu">
        <ul
          onClick={toggleListHeight1}
          style={{ height: isExpanded1 ? 'auto' : 40, overflow: 'hidden',}}
        >
          <h5 style={{color:'#eaa57f'}}>HOME</h5>
          <li>Main Home</li>
          <li style={{color:'#eaa57f'}}>Film Festival</li>
          <li>Horizontal Scroll Showcase</li>
          <li>Vertical Split Showcase</li>
        </ul>
        <ul
          onClick={toggleListHeight2}
          style={{ height: isExpanded2 ? 'auto' : 40, overflow: 'hidden' }}
        >
          <h5>PAGES</h5>
          <li>About Us</li>
          <li>Our Team</li>
          <li>Contact Us</li>
        </ul>
        <ul
          onClick={toggleListHeight3}
          style={{ height: isExpanded3 ? 'auto' : 40, overflow: 'hidden' }}
        >
          <h5>
            PORTFOLIO
</h5>
          <li>Fullscreen Slider</li>
          <li>Scrolling Portfolio</li>
         <li>Slider</li>
        </ul>
        <ul
          onClick={toggleListHeight4}
          style={{ height: isExpanded4 ? 'auto' : 40, overflow: 'hidden' }}
        >
          <h5>BLOG</h5>
          <li>Right Sidebar List</li>
          <li>Without Sidebar List</li>
         
        </ul>
        <ul
          onClick={toggleListHeight5}
          style={{ height: isExpanded5 ? 'auto' : 40, overflow: 'hidden' }}
        >
          <h5>SHOP</h5>
          <li>Product List</li>
          <li>Product Single</li>
         
        </ul>
      </div>
    </div>
  );
}
export default Submenu;