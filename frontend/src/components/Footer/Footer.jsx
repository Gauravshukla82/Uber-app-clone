import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
      // <footer className="footer">
      //   <div className="footer-container">
      //     <div className="footer-links">
      //       <div className="footer-section">
      //         <h3>About</h3>
      //         <br />
      //         <ul>
      //           <li><a href="#">Our Story</a></li>
      //           <li><a href="#">Newsroom</a></li>
      //           <li><a href="#">Investors</a></li>
      //           <li><a href="#">Careers</a></li>
      //           <li><a href="#">Blog</a></li>
      //           <li><a href="#">Global Citizenship</a></li>
      //         </ul>
      //       </div>
      //       <div className="footer-section">
      //         <h3>Products</h3>
      //         <br />
      //         <ul>
      //           <li><a href="#">Ride</a></li>
      //           <li><a href="#">Drive</a></li>
      //           <li><a href="#">Eat</a></li>
      //           <li><a href="#">Freight</a></li>
      //           <li><a href="#">Business</a></li>
      //           <li><a href="#">Transit</a></li>
      //           <li><a href="#">Bikes</a></li>
      //           <li><a href="#">Scooters</a></li>
      //           <li><a href="#">More</a></li>
      //         </ul>
      //       </div>
      //       <div className="footer-section">
      //         <h3>Global citizenship</h3>
      //         <br />
      //         <ul>
      //           <li><a href="#">Safety</a></li>
      //           <li><a href="#">Diversity and Inclusion</a></li>
      //           <li><a href="#">FAQs</a></li>
      //           <li><a href="#">Accessibility</a></li>
      //           <li><a href="#">Sustainability</a></li>
      //           <li><a href="#">Safety Toolkit</a></li>
      //         </ul>
      //       </div>
      //       <div className="footer-section">
      //         <h3>Travel</h3>
      //         <br />
      //         <ul>
      //           <li><a href="#">Airports</a></li>
      //           <li><a href="#">Cities</a></li>
      //         </ul>
      //       </div>
            
      //     </div>
      //     {/* <div className="footer-social">
      //       <ul>
      //         <li><a href="#"><i className="fab fa-facebook"></i></a></li>
      //         <li><a href="#"><i className="fab fa-twitter"></i></a></li>
      //         <li><a href="#"><i className="fab fa-instagram"></i></a></li>
      //       </ul>
      //     </div> */}
      //   </div>
      //   <hr />
      //   <div className="footer-bottom">
      //     <p>&copy; 2023 Uber Technologies Inc. All Rights Reserved.</p>
      //     <div className="language-selector">
      //       <span>English (United States)</span>
      //       <i className="fas fa-globe"></i>
      //     </div>
      //   </div>
      // </footer>

      <>
    <div className="bottom">
    <div className="footer">
        <ul>
            <li>
                <h3>Company</h3>
                <Link to="#">About us</Link><br/>
                <Link to="#">Our offerings</Link><br/>
                <Link to="#">Newsroom</Link><br/>
                <Link to="#">Investors</Link><br/>
                <Link to="#">Blog</Link><br/>
                <Link to="#">Careers</Link><br/>
                <Link to="#">Gift cards</Link>
            </li>   
        </ul>

        <ul>
            <li>
                <h3>Products</h3>
                <Link to="#">Ride</Link><br/>
                <Link to="#">Drive</Link><br/>
                <Link to="#">Deliver</Link><br/>
                <Link to="#">Press</Link><br/>
                <Link to="#">Eat</Link><br/>
                <Link to="#">Uber for Business</Link><br/>
                <Link to="#">Uber Freight</Link>
            </li>   
        </ul>

        <ul>
            <li>
                <h3>Global citizenship</h3>
                <Link to="#">Safety</Link><br/>
                <Link to="#">Diversity and Inclusion</Link><br/>
                <Link to="#">Sustainability</Link><br/>
                <Link to="#">Accessibility</Link><br/>
                <Link to="#">Testimonials</Link><br/>
                <Link to="#">Safety Toolkit</Link><br/>
                <Link to="#">FAQs</Link>
            </li>   
        </ul>

        <ul>
            <li>
                <h3>Travel</h3>
                <Link to="#">Airports</Link><br/>
                <Link to="#">Cities</Link><br/>
                {/* <Link to="#">Authenticity</Link><br/>
                <Link to="#">Press</Link><br/>
                <Link to="#">Testimonials</Link><br/>
                <Link to="#">Zara CSR</Link><br/>
                <Link to="#">Investor Relations</Link> */}
            </li>   
        </ul>

        {/* <ul>
            <li>
                <h3>Top Categories</h3><br/>
                <Link to="#">Who are we?</Link><br/>
                <Link to="#">Careers</Link><br/>
                <Link to="#">Authenticity</Link><br/>
                <Link to="#">Press</Link><br/>
                <Link to="#">Testimonials</Link><br/>
                <Link to="#">Zara CSR</Link><br/>
                <Link to="#">Investor Relations</Link>
            </li>   
        </ul> */}
    </div>
</div>

      
    </>
    );
  };
  
  export default Footer;