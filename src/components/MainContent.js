import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
<div className="hero-section">
  <h1>Fitness Wonder</h1>
  <p>
    "The body achieves what the mind believes.”<br />
    – Napoleon Hill
  </p>
  <button className="hero-btn">Read More</button>
</div>


      <div className="banner">
        <div className="banner-item">
          <h2>25% Discount</h2>
          <p>If You Sign Up Today</p>
        </div>
        <div className="banner-item">
          <h2>Fitness Class</h2>
          <p>Get Started Today</p>
          <button className="banner-btn">Send Message</button>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Programs</h2>
        <p>
          Explore a wide range of programs to fit your fitness needs. Whether you're looking for weight loss, muscle building, or general fitness, we have a program for you.
        </p>
      </div>

      <div className="content-section">
        <h2>Why Choose Us</h2>
        <p>
          We offer state-of-the-art facilities, experienced trainers, and a community that supports you in achieving your fitness goals.
        </p>
      </div>

      <div className="content-section">
        <h2>Contact Us</h2>
        <p>
          Call us at +34 566 778 8892 or visit our gym to get started with your fitness journey today!
        </p>
      </div>
    </div>
  );
};

export default MainContent;
