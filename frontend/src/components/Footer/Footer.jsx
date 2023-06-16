import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <div className="footer-section">
              <h3>About</h3>
              <br />
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Global Citizenship</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Products</h3>
              <br />
              <ul>
                <li><a href="#">Ride</a></li>
                <li><a href="#">Drive</a></li>
                <li><a href="#">Eat</a></li>
                <li><a href="#">Freight</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Transit</a></li>
                <li><a href="#">Bikes</a></li>
                <li><a href="#">Scooters</a></li>
                <li><a href="#">More</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Global citizenship</h3>
              <br />
              <ul>
                <li><a href="#">Safety</a></li>
                <li><a href="#">Diversity and Inclusion</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Safety Toolkit</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Travel</h3>
              <br />
              <ul>
                <li><a href="#">Airports</a></li>
                <li><a href="#">Cities</a></li>
              </ul>
            </div>
            
          </div>
          {/* <div className="footer-social">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
          <p>&copy; 2023 Uber Technologies Inc. All Rights Reserved.</p>
          <div className="language-selector">
            <span>English (United States)</span>
            <i className="fas fa-globe"></i>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;