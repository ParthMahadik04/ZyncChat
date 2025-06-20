import React, { useEffect, useRef } from 'react';
import './LoginLeftCards.css';

const cards = [
  {
    title: "Real-time Messaging",
    description: "Chat with anyone around the world instantly with live updates.",
  },
  {
    title: "Secure & Private",
    description: "End-to-end encryption ensures your messages stay private.",
  },
  {
    title: "Group Chats",
    description: "Create groups and collaborate with ease.",
  },
  {
    title: "Media Sharing",
    description: "Send images, videos, and files effortlessly.",
  },
  {
    title: "Custom Emojis",
    description: "Express yourself with a wide range of emojis.",
  },
];

const LoginLeftCards = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
  const slider = sliderRef.current;

  const interval = setInterval(() => {
    const cardWidth = slider.offsetWidth;
    const maxScroll = slider.scrollWidth - cardWidth;

    if (slider.scrollLeft >= maxScroll) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }, 3000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="slider-container">
      <div className="card-slider" ref={sliderRef}>
        {cards.map((card, index) => (
          <div className="info-card  text-primary" key={index}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginLeftCards;
