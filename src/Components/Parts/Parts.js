import React from 'react';
import './Parts.css';
import img1 from '../../assets/bg-showcase-1.jpg';
import img2 from '../../assets/bg-showcase-2.jpg';
import img3 from '../../assets/bg-showcase-3.jpg';
const Parts = () => {
    return (
        <div className="part-container">
            <div className="part1-container">
                <div className="left text">
                    <h2>Fully Responsive Design</h2>
                    <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                </div>
                <div className="right">
                    <img src={img1} alt={img1} />
                </div>
            </div>
            <div className="part2-container">
                <div className="left">
                    <img src={img2} alt={img2} />
                </div>
                <div className="right text">
                    <h2>Updated For Bootstrap 5</h2>
                    <p>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!
                    </p>
                </div>
            </div>
            <div className="part3-container">
                <div className="left text">
                    <h2>Easy to Use & Customize</h2>
                    <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                </div>
                <div className="right">
                    <img src={img3} alt={img3} />
                </div>
            </div>
        </div>
    );
};

export default Parts;